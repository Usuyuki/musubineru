package main 

import (
    "github.com/gin-gonic/gin"
)

func main() {
    router := gin.Default()

    router.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "技育博用のdocker整備！！!!",
        })
    })

    router.Run(":8080")
}