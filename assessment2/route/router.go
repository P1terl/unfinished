package route

import (
	"assessment/service"
	"github.com/gin-gonic/gin"
)

func SetupRouters() *gin.Engine {
	r := gin.Default()
	//读取静态文件
	r.Static("/图片", "./static/图片")
	r.Static("/static", "./static")
	r.LoadHTMLGlob("./web/*")
	//r.LoadHTMLGlob("./templates/*")

	Zhihu := r.Group("/api/v1")
	{
		//登录组
		LoginGroup := Zhihu.Group("/user/login")
		{
			LoginGroup.GET("", service.GetLogin)
			//LoginGroup.GET("", func(ctx *gin.Context) {
			//	ctx.HTML(http.StatusOK, "login.html", nil)
			//})
			//LoginGroup.POST("", service.LogIN)
		}
		//注册组
		RegisterGroup := Zhihu.Group("/user/register")
		{
			RegisterGroup.GET("", service.GetRegister)
			//RegisterGroup.POST("", service.EmailVerification)
			RegisterGroup.POST("", service.RegisterUser)
		}
		//主页组
		HomeGroup := Zhihu.Group("/home")
		{
			HomeGroup.GET("", service.GetHome)
		}
		//编辑组
		EditGroup := Zhihu.Group("")
		{
			EditGroup.GET("/article", service.WriteArticle)
			EditGroup.GET("/question", service.AskQuestion)
			EditGroup.GET("/answer", service.GivAnswer)
		}
	}

	return r
}
