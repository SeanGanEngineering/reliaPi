package models

type TestPlan struct {
	ID          int     `json:"id"`
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Assigned    string  `json:"assigned"`
	StartTime   float64 `json:"startTime"`
	EndTime     float64 `json:"endTime"`
	Metric      string  `json:"metric"`
	TestType    string  `json:"testType"`
}
