window.addEventListener('load', function () {

    // 禁止鼠标选中
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    })

    // 头像选择的元素获取
    let picture_chose_h2 = document.querySelector('.picture-chose-h2');
    let picture_chose_img = document.querySelectorAll('.picture-chose-img');
    let picture_chose_button = document.querySelector('.picture-chose-button');
    let picture_chose_big_box = document.querySelector('.picture-chose-big-box');
    // 注册页面的元素获取
    let register_picture_chose_img_box = document.querySelector('.register-picture-chose-img-box');
    let register_picture_chose_img = document.querySelector('.register-picture-chose-img');
    let register_picture_chose_img_back = document.querySelector('.register-picture-chose-img-back');
    let register_img = document.querySelector('.register-img');
    let register_big_box = document.querySelector('.register-big-box');
    let register_title = document.querySelector('.register-title');
    let register_input = document.querySelectorAll('.register-input');
    let register_mail_number_submit = document.querySelector('.register-mail-number-submit');
    let register_checkbox = document.querySelector('.register-checkbox');
    let register_button_submit = document.querySelector('.register-button-submit');
    // 完成注册的元素获取
    let register_complete_big_box = document.querySelector('.register-complete-big-box');
    let register_complete_h1 = document.querySelector('.register-complete-h1');
    let register_complete_return_button = document.querySelector('.register-complete-return-button');
    let register_complete_automatic_return = document.querySelector('.register-complete-automatic-return');




    // （20-112）头像选择js

    // 定义被选中的图片，向注册页面传递
    let picture_be_chose;

    //创造数组接受锁定状态
    let arr_picture_chose_state = new Array;
    //锁定状态为0表示false没被锁定，
    //为1表示true被锁定，
    //给所有图片状态设置自定义属性'date-imgstate'并都赋值0，arrState数组接收
    for (let i = 0; i < picture_chose_img.length; i++) {
        picture_chose_img[i].setAttribute('date-imgstate', 0);
        arr_picture_chose_state[i] = picture_chose_img[i].getAttribute('date-imgstate');
    }

    // 按钮移入移除事件
    picture_chose_button.addEventListener('mouseenter', function () {
        picture_chose_button.classList.add("picture-chose-button-mouseenter");
        picture_chose_button.addEventListener('mouseleave', function () {
            picture_chose_button.classList.remove("picture-chose-button-mouseenter");
        })
    })

    //按钮点击事件
    picture_chose_button.addEventListener('click', function () {
        // 给被选中的图片赋值，向注册页面传递该参数
        picture_be_chose = document.querySelector('.picture-chose-click');

        console.log(picture_be_chose.src)
        if (picture_be_chose != null) {

            // 选择的图片传地址参数
            let register_picture_chose_img_src = picture_be_chose.src;
            register_img.value=register_picture_chose_img_src
            register_picture_chose_img.setAttribute('src', register_picture_chose_img_src)


            for (let i = 0; i < picture_chose_img.length; i++) {
                picture_chose_img[i].classList.add('picture-not-chose-animation');
            }
            picture_be_chose.classList.remove('picture-not-chose-animation');
            picture_be_chose.classList.add('picture-be-chose-animation');
            picture_chose_h2.classList.add('h2-chose-animation');
            picture_chose_button.classList.add('button-chose-animation');

            setTimeout(function () {

                // 清除被选择头像的选定状态

                // 清除头像选择页面移开的动画
                for (let i = 0; i < picture_chose_img.length; i++) {
                    picture_chose_img[i].classList.remove('picture-not-chose-animation');
                }
                picture_be_chose.classList.remove('picture-be-chose-animation');
                picture_chose_h2.classList.remove('h2-chose-animation');
                picture_chose_button.classList.remove('button-chose-animation');

                // 清除返回上一页后再次点击确定时，返回上一页的动画
                register_picture_chose_img_back.classList.remove("register-picture-chose-img-back-move-animation-1");
                register_picture_chose_img_back.classList.remove("register-picture-chose-img-back-move-animation-2");


                // 定时器删除头像选择页面，让注册页面出现
                picture_chose_big_box.style.display = 'none';
                register_picture_chose_img_box.style.display = 'block';
                register_big_box.style.display = 'block';

                // window.open('注册界面.html', '_self');
            }, 1500)
        }
        else {
            alert('请选择你的头像');
        }

    })


    // 排他思想 
    for (let i = 0; i < picture_chose_img.length; i++) {
        //选择中效果
        picture_chose_img[i].addEventListener('mouseenter', function () {
            if (arr_picture_chose_state[i] != '1') {//如果没被锁定
                for (let j = 0; j < picture_chose_img.length; j++) {
                    this.classList.add("picture-chose-mouseenter");
                    //选择移开效果
                    picture_chose_img[i].addEventListener('mouseleave', function () {
                        this.classList.remove("picture-chose-mouseenter");
                    })
                }
            }
        })

        // 锁定效果实现
        if (arr_picture_chose_state[i] != '1') {//如果没被锁定

            picture_chose_img[i].addEventListener('click', function () {
                for (let j = 0; j < picture_chose_img.length; j++) {
                    arr_picture_chose_state[j] = '0';//设置所有未锁定
                }
                arr_picture_chose_state[i] = '1';//设置已经被锁定
                for (let j = 0; j < picture_chose_img.length; j++) {
                    picture_chose_img[j].classList.remove("picture-chose-click")
                    this.classList.add("picture-chose-click");
                }
            })
        }

        // 没能完成的效果，取消锁定

        //
        // if (arr_picture_chose_state[i] == '1') {//如果被锁定
        //     for (let i = 0; i < picture_chose_img.length; i++) {
        //         for (let j = 0; j < picture_chose_img.length; j++) {
        //             picture_chose_img[i].addEventListener('click', function () {
        //                 this.classList.remove("picture-chose-click");
        //                 arr_picture_chose_state[i]= '0';//设置未被锁定
        //             })
        //         }
        //     }
        // }
    }


    // 返回上一步操作
    register_picture_chose_img.addEventListener('click', function () {

        register_picture_chose_img_box.classList.add('register-picture-chose-img-after-animation');
        register_picture_chose_img_back.classList.add('register-picture-chose-img-back-move-animation-3');
        register_checkbox.classList.add('register-checkbox-after-animation');
        register_title.classList.add('register-title-after-animation');
        register_input[0].classList.add('register-input-left-after-animation');
        register_input[2].classList.add('register-input-left-after-animation');
        register_input[1].classList.add('register-input-right-after-animation');
        register_input[3].classList.add('register-input-right-after-animation');
        register_picture_chose_img_back.classList.remove("register-picture-chose-img-back-move-animation-1");
        register_picture_chose_img_back.classList.remove("register-picture-chose-img-back-move-animation-2");


        setTimeout(function () {
            // 定时器删除注册页面，让头像选择页面出现
            picture_chose_big_box.style.display = 'block';
            register_picture_chose_img_box.style.display = 'none';
            register_big_box.style.display = 'none';

            // 清除注册页面移开的动画
            register_picture_chose_img_box.classList.remove('register-picture-chose-img-after-animation');
            register_picture_chose_img_back.classList.remove('register-picture-chose-img-back-move-animation-3');
            register_checkbox.classList.remove('register-checkbox-after-animation');
            register_title.classList.remove('register-title-after-animation');
            register_input[0].classList.remove('register-input-left-after-animation');
            register_input[2].classList.remove('register-input-left-after-animation');
            register_input[1].classList.remove('register-input-right-after-animation');
            register_input[3].classList.remove('register-input-right-after-animation');
            //window.open('注册界面.html', '_self');
        }, 2500)


    })


    // 发送验证码的按钮
    register_mail_number_submit.addEventListener('click', function () {
        register_mail_number_submit.style.cursor = 'not-allowed';
        let register_mail_number_submit_time = 60;

        register_mail_number_submit.innerHTML = register_mail_number_submit_time + 's后可重发';
        register_mail_number_submit_time--;
        let register_mail_number_submit_timer = setInterval(function () {
            if (register_mail_number_submit_time == 0) {
                clearInterval(register_mail_number_submit_timer);
                register_mail_number_submit.style.cursor = 'pointer';
                register_mail_number_submit.innerHTML = '发送验证码';
                register_mail_number_submit_time = 60;
            }
            else {
                register_mail_number_submit.innerHTML = register_mail_number_submit_time + 's后可重发';
                register_mail_number_submit_time--;
            }
        }, 1000)
    })



    // 鼠标移入移除注册选择的图片
    register_picture_chose_img.addEventListener('mouseenter', function () {
        register_picture_chose_img.classList.add('register-picture-chose-img-mouseenter');
        register_picture_chose_img_back.classList.remove("register-picture-chose-img-back-move-animation-2");
        register_picture_chose_img_back.classList.add("register-picture-chose-img-back-move-animation-1");
        register_picture_chose_img.addEventListener('mouseleave', function () {
            register_picture_chose_img.classList.remove("register-picture-chose-img-mouseenter");
            register_picture_chose_img_back.classList.remove("register-picture-chose-img-back-move-animation-1");
            register_picture_chose_img_back.classList.add("register-picture-chose-img-back-move-animation-2");
        })
    })



    // 鼠标移入移出注册按钮
    register_button_submit.addEventListener('mouseenter', function () {
        register_button_submit.classList.add("picture-chose-button-mouseenter");

        register_button_submit.addEventListener('mouseleave', function () {
            register_button_submit.classList.remove("picture-chose-button-mouseenter");

        })
    })

    // 注册按钮点击跳转注册成功
    register_button_submit.addEventListener('click', function () {
        // 注册页面移除动画
        register_picture_chose_img_box.classList.add('register-picture-chose-img-after-animation');
        register_picture_chose_img_back.classList.add('register-picture-chose-img-back-move-animation-3');
        register_checkbox.classList.add('register-checkbox-after-animation');
        register_title.classList.add('register-title-after-animation');
        register_input[0].classList.add('register-input-left-after-animation');
        register_input[2].classList.add('register-input-left-after-animation');
        register_input[1].classList.add('register-input-right-after-animation');
        register_input[3].classList.add('register-input-right-after-animation');



        setTimeout(function () {
            // 定时器删除注册页面动画，让注册成功页面出现
            register_complete_big_box.style.display = 'block';
            register_picture_chose_img_box.style.display = 'none';
            register_big_box.style.display = 'none';

            // 清除注册页面移开的动画
            register_picture_chose_img_box.classList.remove('register-picture-chose-img-after-animation');
            register_picture_chose_img_back.classList.remove('register-picture-chose-img-back-move-animation-3');
            register_checkbox.classList.remove('register-checkbox-after-animation');
            register_title.classList.remove('register-title-after-animation');
            register_input[0].classList.remove('register-input-left-after-animation');
            register_input[2].classList.remove('register-input-left-after-animation');
            register_input[1].classList.remove('register-input-right-after-animation');
            register_input[3].classList.remove('register-input-right-after-animation');
            register_picture_chose_img_back.classList.remove("register-picture-chose-img-back-move-animation-2");


        }, 2500)
    })



    // 返回登录界面按钮移入移除事件
    register_complete_return_button.addEventListener('mouseenter', function () {
        register_complete_return_button.classList.add("register-complete-return-button-mouseenter");
        register_complete_return_button.addEventListener('mouseleave', function () {
            register_complete_return_button.classList.remove("register-complete-return-button-mouseenter");
        })
    })


    // 返回按钮点击事件
    register_complete_return_button.addEventListener('click', function () {
        register_complete_big_box.classList.add("register-complete-big-box-after-animation");
        register_complete_h1.classList.add("register-complete-h1-after-animation");
        register_complete_automatic_return.classList.add("register-complete-automatic-return-after-animation");
        setTimeout(function () {
            register_complete_big_box.classList.remove("register-complete-big-box-after-animation");
            register_complete_h1.classList.remove("register-complete-h1-after-animation");
            register_complete_automatic_return.classList.remove("register-complete-automatic-return-after-animation");
            window.location.href="/api/v1/user/login" ;

        }, 2400)
    })

    // 自动返回
    let automatic_return_time = 7;
    let register_complete_automatic_return_timer = setInterval(function () {
        if (register_complete_big_box.style.display == 'block') {

            register_complete_automatic_return.innerHTML = automatic_return_time + 's后自动返回主页';

            if (automatic_return_time == 0) {
                clearInterval(register_complete_automatic_return_timer);
                register_complete_big_box.classList.add("register-complete-big-box-after-animation");
                register_complete_h1.classList.add("register-complete-h1-after-animation");
                register_complete_automatic_return.classList.add("register-complete-automatic-return-after-animation");
                setTimeout(function () {
                    register_complete_big_box.classList.remove("register-complete-big-box-after-animation");
                    register_complete_h1.classList.remove("register-complete-h1-after-animation");
                    register_complete_automatic_return.classList.remove("register-complete-automatic-return-after-animation");
                    window.location.href="/api/v1/user/login" ;
                }, 2400)
            }
            else {
                register_complete_automatic_return.innerHTML = automatic_return_time + 's后自动返回主页';
                automatic_return_time--;
            }
        }

    }, 1000)






})