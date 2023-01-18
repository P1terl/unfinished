window.addEventListener('load', function () {

    // 禁止鼠标选中
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    })


    let nav_big_box_1 = document.querySelector('.nav-big-box-1');
    let nav_big_box_2 = document.querySelector('.nav-big-box-2');
    let search_box = document.querySelector('.search-box');
    let search_box_input = document.querySelector('.search-box-input');
    let search_box_input_2 = document.querySelector('.search-box-input-2');
    let search_box_submit = document.querySelector('.search-box-submit');
    let ask = document.querySelector('.ask');
    let search_box_submit_img = document.querySelector('.search-box-submit-img');
    let search_box_submit_img_2 = document.querySelector('.search-box-submit-img-2');
    let main_right_7_fixed = document.querySelector('.main-right-7-fixed');




    let skip_to_write_article = document.querySelectorAll('.skip-to-write-article');
    let skip_to_ask = document.querySelectorAll('.skip-to-ask');


    // 选中第一个导航栏中的输入框放大效果
    search_box_input.addEventListener('focus', function () {
        search_box_input.classList.remove("search-box-input-after-animation");
        search_box_submit.classList.remove("search-box-submit-after-animation");
        search_box_submit_img.classList.remove("search-box-submit-img-after-animation");
        ask.style.display = "none";
        search_box_input.classList.add("search-box-input-before-animation");
        search_box_submit.classList.add("search-box-submit-before-animation");
        search_box_submit_img.classList.add("search-box-submit-img-before-animation");

        search_box_input.addEventListener('blur', function () {
            setTimeout(function () {
                ask.style.display = "block";
            }, 200)
            search_box_input.classList.remove("search-box-input-before-animation");
            search_box_submit.classList.remove("search-box-submit-before-animation");
            search_box_submit_img.classList.remove("search-box-submit-img-before-animation");
            search_box_input.classList.add("search-box-input-after-animation");
            search_box_submit.classList.add("search-box-submit-after-animation");
            search_box_submit_img.classList.add("search-box-submit-img-after-animation");
        })
    })

    search_box_input_2.addEventListener('focus', function () {
        search_box_input_2.classList.remove("search-box-input-2-after-animation");
        search_box_submit_img_2.classList.remove("search-box-submit-img-2-after-animation");
        search_box_input_2.classList.add("search-box-input-2-before-animation");
        search_box_submit_img_2.classList.add("search-box-submit-img-2-before-animation");

        search_box_input_2.addEventListener('blur', function () {
            search_box_input_2.classList.remove("search-box-input-2-before-animation");
            search_box_submit_img_2.classList.remove("search-box-submit-img-2-before-animation");
            search_box_input_2.classList.add("search-box-input-2-after-animation");
            search_box_submit_img_2.classList.add("search-box-submit-img-2-after-animation");
        })
    })



    // 导航栏上下滑动效果
    document.addEventListener('scroll', function () {
        if (window.pageYOffset > 52) {

            nav_big_box_1.classList.remove("nav-big-box-come-animation");
            nav_big_box_2.classList.remove("nav-big-box-come-animation");
            nav_big_box_1.classList.add("nav-big-box-go-animation");
            nav_big_box_2.classList.add("nav-big-box-go-animation");
        }
        else {
            // 如果要解决第一次的小bug，把后面两行删掉
            nav_big_box_1.classList.remove("nav-big-box-go-animation");
            nav_big_box_2.classList.remove("nav-big-box-go-animation");
            nav_big_box_1.classList.add("nav-big-box-come-animation");
            nav_big_box_2.classList.add("nav-big-box-come-animation");
        }
    })

    // 右侧菜单下拉固定效果
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= 900) {
            main_right_7_fixed.style.position = "fixed";
            main_right_7_fixed.style.top = "50px";
        }
        else {
            main_right_7_fixed.style.position = "static";
        }
    })

    // 跳转去写文章
    for (let i = 0; i < skip_to_write_article.length; i++) {
        skip_to_write_article[i].addEventListener('click', function () {
            window.open("/api/v1/article","_blank");
        })
    }
    // 跳转去提问
    for (let i = 0; i < skip_to_ask.length; i++) {
        skip_to_ask[i].addEventListener('click', function () {
            window.open("/api/v1/question","_blank");
        })
    }

    // 评论
    let go_to_comment = document.querySelectorAll('.go-to-comment');
    let comment_submit = document.querySelectorAll('.comment-submit');
    let go_to_comment_state = 0;
    for (let i = 0; i < go_to_comment.length; i++) {
        go_to_comment[i].addEventListener('click', function () {
            if (go_to_comment_state == 0) {
                this.parentElement.parentElement.style.borderBottom = "none"
                this.parentElement.parentElement.children[3].style.display = "block";
                go_to_comment_state = 1;
            }
            else {
                this.parentElement.parentElement.style.borderBottom = "block"
                this.parentElement.parentElement.children[3].style.display = "none";
                go_to_comment_state = 0;
                this.parentElement.parentElement.style.borderBottom = "1px solid #f0f2f7"
            }
            comment_submit[i].addEventListener('click', function () {
                window.location.reload()
            })
        })

    }


    // 全文阅读
    let the_whole = document.querySelectorAll('.the-whole');
    for (let i = 0; i < the_whole.length; i++) {

        the_whole[i].addEventListener('click', function () {

            this.parentElement.style.setProperty("height", 'initial');

            this.parentElement.children[0].classList.remove("main-left-content-card-body-img");

            this.parentElement.children[1].classList.remove("main-left-content-card-body-font");
            this.parentElement.children[1].style.setProperty("font-size", '15px');

            this.parentElement.parentElement.children[2].lastElementChild.style.setProperty("visibility", 'initial');
            this.style.visibility = "hidden"
            let thethis = this;
            this.parentElement.parentElement.children[2].lastElementChild.addEventListener('click', function () {
                thethis.style.setProperty("visibility", 'initial');
                thethis.parentElement.style.setProperty("height", '170px');

                thethis.parentElement.parentElement.style.setProperty("width", '654px');
                thethis.parentElement.children[0].classList.add("main-left-content-card-body-img");
                thethis.parentElement.children[1].classList.add("main-left-content-card-body-font");
                this.style.visibility = "hidden"

            })

        })
    }
    // 个人栏
    let my_state = 0;
    let head_picture = document.querySelector('.head-picture');
    let my = document.querySelector('.my');

    head_picture.addEventListener('click', function () {
        if (my_state == 0) {
            my.style.visibility = "visible";
            my_state = 1;
        }
        else {
            my.style.visibility = "hidden";
            my_state = 0;
        }
    })


    head_picture.addEventListener('mouseenter', function () {
        if (my_state == 0) {
            my.style.visibility = "visible"
        }
    })
    head_picture.addEventListener('mouseleave', function () {
        if (my_state == 0) {
            my.style.visibility = "hidden"
        }
    })


    // 回答问题
    let go_to_answer = document.querySelectorAll('.go-to-answer');
    for (let i = 0; i < go_to_answer.length; i++) {
        go_to_answer[i].addEventListener('click', function () {
            window.open("/api/v1/answer","_blank");
        })
    }


})