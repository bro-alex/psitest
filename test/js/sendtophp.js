var testing = 20; // вот эта переменная 
 
$.ajax({
    type: "POST", // метод
    url: "../test/funcresult.php", // скрипт который получит отправление
    dataType: "json", // тип послания
    data: { // тут создаем json со значением которое нужно
        o: testing
    },
    success: function (data) { // необязательная функция, срабатывает при успехе
       alert('Success');

    },
    error: function () {// необязательная функция, срабатывает при неудаче
     alert('Error');
    }
});