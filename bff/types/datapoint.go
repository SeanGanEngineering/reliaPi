package types

import "time"

type TemperaturePoint struct {
	timestamp    time.Time
	temperatureC int
	name         string
}

type UserData struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}
