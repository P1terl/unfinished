package main

import (
	"assessment/dao"
	"assessment/route"
	"fmt"
)

func main() {
	err := dao.InitDB()
	if err != nil {
		fmt.Printf("init db failed,err:%v\n", err)
		return
	}
	route.SetupRouters()
	panic(route.SetupRouters().Run(":8080"))
}
