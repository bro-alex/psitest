<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="subtest/style.css">
    <script type="text/javascript">
 
function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}
 
function ValidPhone() {
    var re = /^\+[0-9]{11}$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
}  
 
</script>
</head>
<body>
<div class="top">
        <div class="topText">ОТВЕТЬ НА ВОПРОСЫ ТЕСТА И ТЫ УЗНАЕШЬ С КАКИМИ ТРАВМАМИ ТЕБЕ РАБОТАТЬ</div>
        <div class="topLogo"><img src="img/logo.png" alt="логотип"></div>
        <div class="topButton"><button class="new" onclick="document.location='https://korneichuk.online'"><img src="img/str1.png" alt="стрелка"><p class="textBut">ВЕРНУТЬСЯ НА САЙТ</p></button></div>
    </div>
    
<div class="content">

    <div class="zagolovok1"><div class="img55"><img src="img/55.png" alt="фото"></div><div>Наше Я, как здание, которое строится на фундаменте личности. 
Личность человека закладывается в детстве и от того, 
что заложено в ваш фундамент будет напрямую зависеть 
как вы проживете свою жизнь</div></div>

<div class="imgwrapp">
    <div class="happy">
    <div class="happytext2">СВОБОДА, ЛЮБОВЬ, ВОЗМОЖНОСТИ</div>
        <div class="happytext">СЧАСТЬЕ</div>  
        
</div>

    <div class="nothappy">
    <div class="nothappytext">НЕСЧАСТЬЕ</div>  
        <div class="nothappytext2">БЕСПОМОЩНОСТЬ, СЛАБОСТЬ, ОДИНОЧЕСТВО</div>
</div>

</div>
<div class="texttestwrapper">
<div class="texttest"><div class="img56"><img src="img/56.png" alt="фото"></div>Пройди тест и узнай,
что заложено в твоем фундаменте личности
и как ты проживешь жизнь</div>
</div>

<div class="subtestwraper">
<div class="subtest">
    <?php
include 'subtest/index.php';
?>
<div class="subtesttext">Тест состоит из 50 описаний ситуаций, на которые нужно максимально правдиво дать оценку от 1 до 10 это про Вас, где 1 точно ко мне относится, 10 - точно не про меня
<div class="subtesttext2">Тест проходите 1 раз максимально честно отвечая давая оценку.</div></div>
</div></div>
    <div class="footer">
    <div class="footerLogo"><img src="img/logo2.png" alt="стрелка"></div>
    <div class="footerText">Vasili Korneychuk © 2020. Все права защищены.</div>
</div>
</body>