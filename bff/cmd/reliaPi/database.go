package reliaPi

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

// Env holds database connection to Postgres
type Env struct {
	DB *sql.DB
}

// database variables
// usually we should get them from env like os.Getenv("variableName")
const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "password"
	dbname   = "postgres"
)

// ConnectDB tries to connect DB and on succcesful it returns
// DB connection string and nil error, otherwise return empty DB and the corresponding error.
func ConnectDB() (*sql.DB, error) {
	connString := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname = %s sslmode=disable", host, port, user, password, dbname)
	db, err := sql.Open("postgres", connString)
	if err != nil {
		log.Printf("failed to connect to database: %v", err)
		return &sql.DB{}, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	fmt.Println(db)
	return db, nil
}
func CreateDatabaseAndTables(db *sql.DB) error {
	// SQL statements to create a database and a table
	createDBSQL := `
			CREATE DATABASE mydb;
	`

	createTableSQL := `
			CREATE TABLE IF NOT EXISTS users (
					id serial PRIMARY KEY,
					username VARCHAR (50) UNIQUE NOT NULL,
					email VARCHAR (100) NOT NULL
			);
	`

	_, err := db.Exec(createDBSQL)
	if err != nil {
		return err
	}

	_, err = db.Exec(createTableSQL)
	if err != nil {
		return err
	}

	return nil
}
