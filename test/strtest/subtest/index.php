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
<link rel="stylesheet" href="style.css">
    <div class="form_register">

    <p id="message" style="color:red"></p> 
        <form class="form" action="subtest/register.php" method="post" name="form_register"  onsubmit="return (ValidPhone()&&ValidMail())">
           
                    <div class="name"> <div class="namein">Имя: </div> 
                        <input class="intext" type="text" name="name" required="required" placeholder="Пример: Антонина Фролова" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Введите ваше имя'">
</div>
                

                
                    <div class="name"> <div class="namein">Телефон: </div>
                        <input id="phone" class="intext" type="text" name="telephone" required="required" placeholder="Пример: +79091234556" onfocus="this.value = '+7'">
</div>
                
<div class="name"> <div class="namein">e-mail: </div>
                        <input id="email" class="intext" type="text" name="email" required="required" placeholder="Пример: name@mail.ru" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Введите ваш e-mail'">
</div>
               
                    <div class="inbtn">
                        
                        <input class="input" type="submit" name="btn_submit_register" value="Пройти тест" onClick="ValidMail(); ValidPhone()">

</div>
                
               
        </form>
    </div>
