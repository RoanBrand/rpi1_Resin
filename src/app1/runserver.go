package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("started. gonna run wwwserver:")
	http.Handle("/", http.FileServer(http.Dir("leaftut/")))
	err := http.ListenAndServe(":80", nil) // set listen port
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
