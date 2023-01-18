package service

import (
	"assessment/dao"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetLogin(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "登录界面.html", nil)
}

func GetRegister(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "注册界面.html", nil)
}

func GetHome(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "主页.html", nil)
}

func WriteArticle(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "写文章.html", nil)
}

func AskQuestion(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "提问.html", nil)
}

func GivAnswer(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "回答问题.html", nil)
}

func RegisterUser(ctx *gin.Context) {
	username := ctx.PostForm("register-mail-number")
	account := ctx.PostForm("register-usernumber")
	password := ctx.PostForm("register-password")
	dao.InsertUser(username, account, password)
}

func LogIN(ctx *gin.Context) {
	//account := ctx.PostForm("user-number")
	//password := ctx.PostForm("login-password")
	ctx.Redirect(http.StatusMovedPermanently, "../home")
}

//func GetValidateCode(ctx *gin.Context) {
//	// 获取目的邮箱
//	em := ctx.PostForm("email")
//	vCode, err := dao.SendEmailValidate(em)
//	if err != nil {
//		log.Println(err)
//		ctx.JSON(http.StatusBadRequest, gin.H{
//			"status":           400,
//			"msg":              "验证码发送失败",
//			"ERROR-CONTROLLER": err.Error(),
//		})
//		return
//	}
//}
