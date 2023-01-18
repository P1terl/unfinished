package dao

import (
	"assessment/model"
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jordan-wright/email"
	"math/rand"
	"net/smtp"
	"time"
)

var db *sql.DB

func InitDB() (err error) {
	username := "root"
	password := "314159"
	host := "8.130.17.168"
	port := 33060
	Dbname := "zhihu"
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8&parseTime=True&loc=Local", username, password, host, port, Dbname)
	db, err = sql.Open("mysql", dsn)
	if err != nil {
		return err
	}

	if err = db.Ping(); err != nil {
		return err
	}
	return nil
}

// QueryRowDemo 查询单条数据示例
func QueryRowDemo() {
	sqlStr := "select id, account, password from user where Account=?"
	var u model.User
	err := db.QueryRow(sqlStr, 1).Scan(&u.ID, &u.Account, &u.Password)
	if err != nil {
		fmt.Printf("scan failed, err:%v\n", err)
		return
	}
}

func InsertUser(Username, Account, Password string) {
	sqlStr := "insert into users(username, account, password) values (?,?,?)"
	ret, err := db.Exec(sqlStr, Username, Account, Password)
	if err != nil {
		fmt.Printf("insert failed, err:%v\n", err)
		return
	}
	theID, err := ret.LastInsertId() // 新插入数据的id
	if err != nil {
		fmt.Printf("get lastinsert ID failed, err:%v\n", err)
		return
	}
	fmt.Printf("insert success, the ID is %d.\n", theID)
}

func SendEmailValidate(receiver []string) (string, error) {
	rnd := rand.New(rand.NewSource(time.Now().UnixNano()))
	vCode := fmt.Sprintf("%06v", rnd.Int31n(1000000))
	t := time.Now().Format("2006-01-02 15:04:05")
	//设置文件发送的内容
	content := fmt.Sprintf(`
	<div>
		<div>
			尊敬的%s，您好！
		</div>
		<div style="padding: 8px 40px 8px 50px;">
			<p>您于 %s 提交的邮箱验证，本次验证码为<u><strong>%s</strong></u>，为了保证账号安全，验证码有效期为5分钟。请确认为本人操作，切勿向他人泄露，感谢您的理解与使用。</p>
		</div>
		<div>
			<p>此邮箱为系统邮箱，请勿回复。</p>
		</div>
	</div>
	`, receiver[0], t, vCode)
	e := &email.Email{
		From: fmt.Sprintf("Peter <guangning616@qq.com>"),
		To:   receiver,
		Text: []byte(content),
	}
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "guangning616@qq.com", "tuwycqftqyjbdbce", "smtp.qq.com"))
	return vCode, err
}
