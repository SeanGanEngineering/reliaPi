// main.go
package main

import (
	"fmt"
	"reliaPi/cmd/reliaPi"
)

func main() {
	fmt.Println("Hello, World!")
	db, err := reliaPi.ConnectDB()
	if err != nil {
		fmt.Println("Error connecting to db", err)
		return
	}
	defer db.Close()

	if err := reliaPi.CreateDatabaseAndTables(db); err != nil {
		fmt.Println("Error creating database and tables:", err)
		return
	}

	fmt.Println("Database actions completed")
}
