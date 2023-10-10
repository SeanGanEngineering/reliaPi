package reliaPiController

import (
	"fmt"
	controllers "reliaPi/pkg/controllers"

	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
)

func RunApp() {
	fmt.Println("Starting application")
	db, err := controllers.ConnectDB()
	if err != nil {
		fmt.Println("Error connecting to db", err)
		return
	}
	defer db.Close()

	fmt.Println("Database actions completed")

	controllers.CreateTemperatureTables(db)

	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5174", "http://localhost:5173"} // Replace with your Vite app's URL
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE"}
	config.AllowHeaders = []string{"Content-Type", "Authorization"}
	router.Use(cors.New(config))

	// User mapping
	router.GET("/users", func(c *gin.Context) {
		controllers.GetUsers(db, c) // Call your GetUsers function with the database connection
	})

	router.GET("/users/:id", func(c *gin.Context) {
		userID := c.Param("id")
		controllers.GetUserById(db, userID, c)
	})

	router.POST("/users", func(c *gin.Context) {
		controllers.InsertUser(db, c)
	})

	//Temperatures mapping
	router.GET("/temperatures", func(c *gin.Context) {
		controllers.GetTemps(db, c)
	})

	router.POST("/temperatures", func(c *gin.Context) {
		controllers.AddDataPoint(db, c)
	})

	router.Run(":8080")
	return
}
