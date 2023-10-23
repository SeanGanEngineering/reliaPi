package controllers

import (
	"database/sql"
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
