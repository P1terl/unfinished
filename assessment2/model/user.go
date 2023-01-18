package model

type User struct {
	ID       int    `sql:"volume:id"`
	Username string `sql:"volume:username"`
	Account  string `sql:"volume:account"`
	Password string `sql:"volume:password"`
}
