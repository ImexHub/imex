if (document.querySelector('.left-sidebar')) {
    let nav = document.querySelectorAll('.profile-navigation > a')
    let nav_text = document.querySelectorAll('.nav-text')
    let open_nav = document.querySelector('.open-nav')
    let sidebar = document.querySelector('.left-sidebar')

    for (let s = 0; s < nav_text.length; s++) {
        nav_text[s].style.display = 'none'
    }

    open_nav.addEventListener('click', (e)=> {
        if (open_nav.classList.contains('check') == false) {
            open_nav.classList.add('check')
            sidebar.classList.add('nav-width')

        } else if (open_nav.classList.contains('check')){ 
            open_nav.removeAttribute('class')
            open_nav.setAttribute('class', 'open-nav')
            sidebar.classList.remove('nav-width')
        }

        if (open_nav.classList.contains('check')) {
            for (let h = 0; h < nav_text.length; h++) {
                nav_text[h].style.display = 'block'
            }
        } else {
            for (let s = 0; s < nav_text.length; s++) {
                nav_text[s].style.display = 'none'
            }
        }
    })
}

if (document.querySelector('.admin-button')) {
    let message_button = document.querySelector('.message-header')
    let logist_button = document.querySelector('.logist-header')
    let tovar_button = document.querySelector('.tovar-header')
    let sklad_button = document.querySelector('.sklad-header')
    let drop_menu = document.querySelectorAll('.drop-menu')

    let adm_button = document.querySelector('.admin-button > div')

    document.addEventListener('click', function(e){
        if (e.target.classList.contains('message-header') === adm_button.classList.contains('message-header')) {
            drop_menu[0].style.display = 'block'
            console.log(e.target)
        } else {
            drop_menu[0].removeAttribute('style')
        }
        if (e.target === logist_button) {
            drop_menu[1].style.display = 'block'
        } else {
            drop_menu[1].removeAttribute('style')
        }
        if (e.target === tovar_button) {
            drop_menu[2].style.display = 'block'
        } else {
            drop_menu[2].removeAttribute('style')
        }
        if (e.target === sklad_button) {
            drop_menu[3].style.display = 'block'
        } else {
            drop_menu[3].removeAttribute('style')
        }
    })
}

let header = document.createElement('header')
header.classList.add('header')
header.innerHTML = `<section class="header-top d-flex justify-content-around">
<div class="logo">
    <a href="#">
        <img src="img/logo.svg" alt="">
    </a>
</div>
<div class="search d-flex">
    <!-- <button class="search-button">
        <img src="img/filter-header-icon.png" alt="">
    </button> -->
    <div class="search-wraper">
        <form action="">
            <input type="search" class="search-input">
            <button type="submit" class="search-submit">
                <div><img src="./img/serch-icon.svg" style="margin-right: 10px; margin-left: 10px;" alt=""></div> Поиск
            </button>    
        </form>
    </div>
</div>
<div class="login">
    <a href="#" class="login-button oxy12-15">
        <img src="img/login-icon.png" alt=""> Войти
    </a>
</div>
</section>
<nav class="sub-header">
<ul class="sub-menu">
    <li><a class="oxy12-15" href="#">Торговая площадка</a></li>
    <li><a class="oxy12-15" href="#">Компании</a></li>
    <li><a class="oxy12-15" href="#">Логисты</a></li>
    <li><a class="oxy12-15" href="#">Помощь</a></li>
    <li><a class="oxy12-15" href="#">Для бизнеса</a></li>
    <li><a class="oxy12-15" href="#">Вопросы и предложения</a></li>
</ul>
<ul class="exchange">
    <li>USD</li>
    <li>RUS</li>
</ul>
</nav>`
console.log(header)


let header_logins = document.createElement('header')
header_logins.classList.add('header')
header_logins.innerHTML = `<header class="header">
<section class="header-top d-flex justify-content-around">
    <div class="logo">
        <a href="#">
            <img src="img/LOGO.png" alt="">
        </a>
    </div>
    <div class="search d-flex">
        <button class="search-button">
            <img src="img/filter-header-icon.png" alt="">
        </button>
        <div class="search-wraper">
            <form action="">
                <input type="search" class="search-input">
                <input type="submit" class="search-submit" value="">    
            </form>
        </div>
    </div>
    <div class="admin-button">
        <div class="message-header">
            <div class="drop-menu">
                <a class="drop-a oxy12-15" href="#">Входящие</a>
                <a class="drop-a oxy12-15" href="#">Исходящие</a>
            </div>
        </div>
        <div class="logist-header">
            <div class="drop-menu">
                <a class="drop-a oxy12-15" href="#">Мои сделки</a>
                <a class="drop-a oxy12-15" href="#">Создать сделку</a>
            </div>
        </div>
        <div class="tovar-header">
            <div class="drop-menu">
                <a class="drop-a oxy12-15" href="#">Мои товары</a>
                <a class="drop-a oxy12-15" href="#">Добавить товар</a>
            </div>
        </div>
        <div class="sklad-header">
            <div class="drop-menu">
                <a class="drop-a oxy12-15" href="#">Мои склады</a>
                <a class="drop-a oxy12-15" href="#">Добавить склад</a>
            </div>
        </div>
    </div>
    <div class="login">
        <a href="#" class="login-button oxy12-15">
            <img src="img/login-icon.png" alt=""> Войти
        </a>
    </div>
</section>
<nav class="sub-header">
    <ul class="sub-menu">
        <li><a class="oxy12-15" href="#">Торговая площадка</a></li>
        <li><a class="oxy12-15" href="#">Компании</a></li>
        <li><a class="oxy12-15" href="#">Логисты</a></li>
        <li><a class="oxy12-15" href="#">Помощь</a></li>
        <li><a class="oxy12-15" href="#">Для бизнеса</a></li>
        <li><a class="oxy12-15" href="#">Вопросы и предложения</a></li>
    </ul>
    <ul class="exchange">
        <li>USD</li>
        <li>RUS</li>
    </ul>
</nav>`


document.body.prepend(header)

