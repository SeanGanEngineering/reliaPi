package models

type TemperaturePoint struct {
	Timestamp    float64
	TemperatureC float64
	Name         string
}

type UserData struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}
