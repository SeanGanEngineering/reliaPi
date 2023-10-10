package controllers

import (
	"database/sql"
	"fmt"
	"net/http"
	models "reliaPi/pkg/models"
	"time"

	"github.com/gin-gonic/gin"
)

func CreateTemperatureTables(db *sql.DB) error {
	createTableSQL := `
		CREATE TABLE IF NOT EXISTS temperatures (
			id serial PRIMARY KEY,
			name VARCHAR (255),
			timestamp timestamp,
			temperature decimal
		)
	`
	_, err := db.Exec(createTableSQL)
	if err != nil {
		return err
	}

	return nil
}

func AddDataPoint(db *sql.DB, c *gin.Context) error {
	var temperaturePoint models.TemperaturePoint

	sqlStatement := `
		INSERT INTO temperatures (name, timestamp, temperature)
		VALUES ($1, to_timestamp($2 / 1000.0), $3)
	`
	if err := c.ShouldBindJSON(&temperaturePoint); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return err
	}

	_, err := db.Exec(sqlStatement, temperaturePoint.Name, temperaturePoint.Timestamp, temperaturePoint.TemperatureC)
	if err != nil {
		return err
	}
	c.IndentedJSON(http.StatusCreated, temperaturePoint)

	return nil
}

func GetTemps(db *sql.DB, c *gin.Context) {
	rows, err := db.Query("SELECT * FROM temperatures")
	CheckError(err)

	var temperatures []gin.H
	for rows.Next() {
		var id int
		var name string
		var timestamp time.Time
		var temperature float64
		if err := rows.Scan(&id, &name, &timestamp, &temperature); err != nil {
			fmt.Println("Error scanning row:", err)
		}
		fmt.Printf("ID: %d, Name: %s, timestamp: %s, temperature: %f\n ", id, name, timestamp, temperature)
		temperatures = append(temperatures, gin.H{"ID": id, "name": name, "timestamp": timestamp, "temperature": temperature}) // Collect user data
	}
	if err := rows.Err(); err != nil {
		fmt.Println("Error iterating through result set:", err)
	}

	c.JSON(http.StatusOK, gin.H{
		"temperatures": temperatures,
	})

}
