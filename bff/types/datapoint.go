package types

import "time"

type TemperaturePoint struct {
	Timestamp    time.Time
	TemperatureC int
	Name         string
}

type UserData struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}
