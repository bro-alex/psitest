
<link rel="stylesheet" href="style.css">
    <div class="form_register">

    <p id="message" style="color: red;"></p> 
        <form class="form" action="subtest/register.php" method="post" name="form_register"  onsubmit="return (ValidPhone()&&ValidMail())">
           
                    <div class="name"> <div class="namein">Имя: </div> 
                        <input class="intext" type="text" name="name" required="required" placeholder="Пример: Антонина Фролова" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Введите ваше имя'">
</div>
                

                
                    <div class="name"> <div class="namein">Телефон: </div>
                        <input id="phone" class="intext" type="text" name="telephone" required="required" placeholder="Пример: +79091234556" onfocus="this.value = '+'">
</div>
                
<div class="name"> <div class="namein">e-mail: </div>
                        <input id="email" class="intext" type="text" name="email" required="required" placeholder="Пример: name@mail.ru" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Введите ваш e-mail'">
</div>
<div style="margin-bottom: 3%; font-size: 12px; text-align: justify;"><input type="checkbox" checked="checked">Согласие с нашей <a href="policy.html" target="_blank">Политикой</a> защиты персональной информации</div>

                    <div class="inbtn">
                        
                        <input class="input" type="submit" name="btn_submit_register" value="Пройти тест" onClick="ValidMail(); ValidPhone()">

</div>
                
               
        </form>
    </div>
