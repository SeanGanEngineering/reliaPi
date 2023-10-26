package controllers

import (
	"database/sql"
	"fmt"
	"net/http"
	models "reliaPi/pkg/models"

	"github.com/gin-gonic/gin"
)

func CreatePlanTable(db *sql.DB) error {
	createTable := `CREATE TABLE IF NOT EXISTS testPlans (
			id serial PRIMARY KEY,
			title VARCHAR (255), 	
			description VARCHAR (255),
			assigned VARCHAR (255),
			startTime timestamp,
			endTime timestamp,
			metric VARCHAR (255),
			testType VARCHAR (255)
		)
	`
	_, err := db.Exec(createTable)
	if err != nil {
		return err
	}

	return nil
}

func AddTestPlan(db *sql.DB, c *gin.Context) error {
	var testPlan models.TestPlan

	sqlStatement := `
	INSERT INTO testPlans (title, description, assigned, startTime, endTime, metric, testType)
	VALUES ($1, $2, $3, $4, $5, $6, $7)
	`

	if err := c.ShouldBind(&testPlan); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return err
	}
	_, err := db.Exec(sqlStatement, testPlan.Title, testPlan.Description, testPlan.Assigned, testPlan.StartTime, testPlan.EndTime, testPlan.Metric, testPlan.TestType)
	if err != nil {
		return err
	}
	c.IndentedJSON(http.StatusCreated, testPlan)

	return nil

}

func GetTestPlans(db *sql.DB, c *gin.Context) {
	rows, err := db.Query("SELECT * FROM testplans")
	CheckError(err)

	var testPlans []gin.H
	for rows.Next() {
		var id int
		var title string
		var description string
		var assigned string
		var startTime string
		var endTime string
		var metric string
		var testType string
		if err := rows.Scan(&id, &title, &description, &assigned, &startTime, &endTime, &metric, &testType); err != nil {
			fmt.Println("Error scanning row", err)
		}
		testPlans = append(testPlans, gin.H{"ID": id, "title": title, "description": description, "assigned": assigned, "startTime": startTime, "endTime": endTime, "metric": metric, "testType": testType})
	}
	if err := rows.Err(); err != nil {
		fmt.Println("Error iterating through result set:", err)
	}

	c.JSON(http.StatusOK, gin.H{
		"testPlans": testPlans,
	})
}

func GetTestPlanById(db *sql.DB, testId string, c *gin.Context) {
	var id int
	var title string
	var description string
	var assigned string
	var startTime string
	var endTime string
	var metric string
	var testType string

	err := db.QueryRow("SELECT * FROM testPlans WHERE id = $1", testId).Scan(&id, &title, &description, &assigned, &startTime, &endTime, &metric, &testType)

	if err != nil {
		fmt.Println("Error querying user by ID:", err)
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"ID": id, "title": title, "description": description, "assigned": assigned, "startTime": startTime, "endTime": endTime, "metric": metric, "testType": testType})
}
