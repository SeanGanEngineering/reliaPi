// main.go
package main

import (
	"fmt"
	"reliaPi/cmd/reliaPi"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Hello, World!")
	db, err := reliaPi.ConnectDB()
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
		reliaPi.GetUsers(db, c) // Call your GetUsers function with the database connection
	})
	router.GET("/users/:id", func(c *gin.Context) {
		userID := c.Param("id")
		reliaPi.GetUserById(db, userID, c)
	})
	router.Run(":8080")
}
