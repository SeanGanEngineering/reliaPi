package reliaPiService

import (
	"database/sql"
	"fmt"
	"net/http"
	"reliaPi/types"

	"github.com/gin-gonic/gin"
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
	CheckError(err)

	err = db.Ping()
	CheckError(err)

	return db, nil
}

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
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

// Add user
func InsertUser(db *sql.DB, c *gin.Context) error {
	var userData types.UserData
	// SQL statement with placeholders
	sqlStatement := `
			INSERT INTO users (username, email)
			VALUES ($1, $2)
	`

	if err := c.ShouldBindJSON(&userData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return err
	}

	// Execute the SQL statement with user data
	_, err := db.Exec(sqlStatement, userData.Username, userData.Email)
	if err != nil {
		return err
	}

	c.IndentedJSON(http.StatusCreated, userData)

	return nil
}

func GetUsers(db *sql.DB, c *gin.Context) {
	// SQL statement with placeholders
	rows, err := db.Query("SELECT * FROM users")
	CheckError(err)
	defer rows.Close()

	var users []gin.H // Create a slice to collect user data
	for rows.Next() {
		var id int
		var username string
		var email string
		if err := rows.Scan(&id, &username, &email); err != nil {
			fmt.Println("Error scanning row:", err)
		}
		fmt.Printf("ID: %d, Name: %s\n", id, username)
		users = append(users, gin.H{"ID": id, "Username": username, "Email": email}) // Collect user data
	}

	if err := rows.Err(); err != nil {
		fmt.Println("Error iterating through result set:", err)
	}

	c.JSON(http.StatusOK, gin.H{
		"users": users,
	})
}

type User struct {
	id       int
	username string
	email    string
}

func GetUserById(db *sql.DB, userID string, c *gin.Context) {
	var id int
	var username string
	var email string

	err := db.QueryRow("SELECT * FROM users WHERE id = $1", userID).Scan(&id, &username, &email)

	if err != nil {
		fmt.Println("Error querying user by ID:", err)
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"id": id, "username": username, "email": email})
}
