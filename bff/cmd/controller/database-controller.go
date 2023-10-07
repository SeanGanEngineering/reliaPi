package reliaPiController

import (
	"fmt"
	reliaPiService "reliaPi/cmd/service"

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

	// err = reliaPi.InsertUser(db, "newuser4", "newuser@example.com")
	// if err != nil {
	// 	fmt.Println("Error inserting user:", err)
	// 	return
	// }
	fmt.Println("Database actions completed")

	router := gin.Default()

	router.GET("/users", func(c *gin.Context) {
		reliaPiService.GetUsers(db, c) // Call your GetUsers function with the database connection
	})

	router.GET("/users/:id", func(c *gin.Context) {
		userID := c.Param("id")
		reliaPiService.GetUserById(db, userID, c)
	})

	router.POST("/users/", func(c *gin.Context) {
		reliaPiService.InsertUser(db, c)
	})

	router.Run(":8080")
	return
}
