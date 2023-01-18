window.addEventListener('load', function () {

     // 禁止鼠标选中
     document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    })
    


    let login_big_box = document.querySelector(".login-big-box");


    let login_title = document.querySelector('.login-title');
    let login_password = document.querySelector('.login-password');
    let login_password_display_or_not = document.querySelector('.login-password-display-or-not');
    let login_button_submit = document.querySelector('.login-button-submit');


    // 可拖动效果

    // login_title.addEventListener('mousedown', function (e) {
    //     let x = e.pageX - login_big_box.offsetLeft;
    //     let y = e.pageY - login_big_box.offsetTop;
    //     document.addEventListener('selectstart', function (e) {
    //         e.preventDefault();
    //     })
    //     function move(e) {
    //         login_big_box.style.left = e.pageX - x + 'px';
    //         login_big_box.style.top = e.pageY - y + 'px';
    //     }
    //     document.addEventListener('mousemove', move);
    //     document.addEventListener('mouseup', function () {
    //         document.removeEventListener('mousemove', move)
    //     });
    // })

    // 密码可见与不可见
    let login_password_display_or_not_state = 0;
    login_password_display_or_not.addEventListener('click', function () {
        if (login_password_display_or_not_state === 0) {
            login_password_display_or_not.src = "/图标/可见.png";
            login_password.type="text"; 
            login_password_display_or_not_state = 1;
        }
        else {
            login_password_display_or_not.src = "/图标/不可见.png";
            login_password.type="password"; 
            login_password_display_or_not_state = 0;
        }
    })

    login_button_submit.addEventListener('click',function(){
        // window.open('主页.html', "_self")
    })

})