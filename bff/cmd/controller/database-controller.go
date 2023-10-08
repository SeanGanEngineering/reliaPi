package reliaPiController

import (
	"fmt"
	reliaPiService "reliaPi/cmd/service"

	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
)

func RunApp() {
	fmt.Println("Starting application")
	db, err := reliaPiService.ConnectDB()
	if err != nil {
		fmt.Println("Error connecting to db", err)
		return
	}
	defer db.Close()

	fmt.Println("Database actions completed")

	reliaPiService.CreateTemperatureTables(db)

	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5174"} // Replace with your Vite app's URL
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE"}
	config.AllowHeaders = []string{"Content-Type", "Authorization"}
	router.Use(cors.New(config))

	// User mapping
	router.GET("/users", func(c *gin.Context) {
		reliaPiService.GetUsers(db, c) // Call your GetUsers function with the database connection
	})

	router.GET("/users/:id", func(c *gin.Context) {
		userID := c.Param("id")
		reliaPiService.GetUserById(db, userID, c)
	})

	router.POST("/users", func(c *gin.Context) {
		reliaPiService.InsertUser(db, c)
	})

	//Temperatures mapping
	router.GET("/temperatures", func(c *gin.Context) {
		reliaPiService.GetTemps(db, c)
	})

	router.POST("/temperatures", func(c *gin.Context) {
		reliaPiService.AddDataPoint(db, c)
	})

	router.Run(":8080")
	return
}
