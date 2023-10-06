package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func helloWorld() {
	// Create a new Gin router
	router := gin.Default()

	// Define your API routes and handlers here

	// Start the server on port 8080
	router.Run(":8080")

	router.GET("/api/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello, World!",
		})
	})
}
