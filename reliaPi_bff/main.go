package main

import (
	"fmt"
)

func main() {
	name := "Sean"
	age := 26
	favNumbers := []int{5, 4, 3}
	favNumbers = append(favNumbers, 12)
	vertices := make(map[string]int)

	fmt.Println(favNumbers)
	fmt.Println(name, age)
}
