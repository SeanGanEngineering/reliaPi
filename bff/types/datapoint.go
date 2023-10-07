package types

type TemperaturePoint struct {
	Timestamp    float64
	TemperatureC int
	Name         string
}

type UserData struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}
