function check(){
        a = parseInt(document.test.a1.value) + parseInt(document.test.a2.value) + parseInt(document.test.a3.value) + parseInt(document.test.a4.value) + parseInt(document.test.a5.value) + parseInt(document.test.a6.value) + parseInt(document.test.a7.value) + parseInt(document.test.a8.value) + parseInt(document.test.a9.value) + parseInt(document.test.a10.value);
        b = parseInt(document.test.b1.value) + parseInt(document.test.b2.value) + parseInt(document.test.b3.value) + parseInt(document.test.b4.value) + parseInt(document.test.b5.value) + parseInt(document.test.b6.value) + parseInt(document.test.b7.value) + parseInt(document.test.b8.value) + parseInt(document.test.b9.value) + parseInt(document.test.b10.value);
        c = parseInt(document.test.c1.value) + parseInt(document.test.c2.value) + parseInt(document.test.c3.value) + parseInt(document.test.c4.value) + parseInt(document.test.c5.value) + parseInt(document.test.c6.value) + parseInt(document.test.c7.value) + parseInt(document.test.c8.value) + parseInt(document.test.c9.value) + parseInt(document.test.c10.value);
        d = parseInt(document.test.d1.value) + parseInt(document.test.d2.value) + parseInt(document.test.d3.value) + parseInt(document.test.d4.value) + parseInt(document.test.d5.value) + parseInt(document.test.d6.value) + parseInt(document.test.d7.value) + parseInt(document.test.d8.value) + parseInt(document.test.d9.value) + parseInt(document.test.d10.value);
        e = parseInt(document.test.e1.value) + parseInt(document.test.e2.value) + parseInt(document.test.e3.value) + parseInt(document.test.e4.value) + parseInt(document.test.e5.value) + parseInt(document.test.e6.value) + parseInt(document.test.e7.value) + parseInt(document.test.e8.value) + parseInt(document.test.e9.value) + parseInt(document.test.e10.value);
        
        var i = parseInt(document.test.e6.value)
        var f = parseInt(document.test.e7.value)
        var j = parseInt(document.test.e8.value)
        var g = parseInt(document.test.e9.value)
        var r = parseInt(document.test.e10.value)

        
        if(i > 0 && f > 0 && j > 0 && g > 0 && r > 0){
            document.getElementsByClassName('resultall')[0].style.display='flex';
            document.getElementsByClassName('topText')[0].style.display='none';
            document.getElementsByClassName('topText2')[0].style.display='flex';
            document.getElementsByClassName('head')[0].style.display='none';
            
        }
    }

    

    function check5(){
        var a = parseInt(document.test.a1.value)
        var b = parseInt(document.test.a2.value)
        var c = parseInt(document.test.a3.value)
        var d = parseInt(document.test.a4.value)
        var e = parseInt(document.test.a5.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa1')[0].style.display='none';
            document.getElementsByClassName('aa2')[0].style.display='none';
            document.getElementsByClassName('aa3')[0].style.display='none';
            document.getElementsByClassName('aa4')[0].style.display='none';
            document.getElementsByClassName('aa5')[0].style.display='none';
            document.getElementsByClassName('aa6')[0].style.display='block';
            document.getElementsByClassName('aa7')[0].style.display='block';
            document.getElementsByClassName('aa8')[0].style.display='block';
            document.getElementsByClassName('aa9')[0].style.display='block';
            document.getElementsByClassName('aa10')[0].style.display='block';
        }
    }

    function check10(){
        var a = parseInt(document.test.a6.value)
        var b = parseInt(document.test.a7.value)
        var c = parseInt(document.test.a8.value)
        var d = parseInt(document.test.a9.value)
        var e = parseInt(document.test.a10.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa6')[0].style.display='none';
            document.getElementsByClassName('aa7')[0].style.display='none';
            document.getElementsByClassName('aa8')[0].style.display='none';
            document.getElementsByClassName('aa9')[0].style.display='none';
            document.getElementsByClassName('aa10')[0].style.display='none';
            document.getElementsByClassName('aa11')[0].style.display='block';
            document.getElementsByClassName('aa12')[0].style.display='block';
            document.getElementsByClassName('aa13')[0].style.display='block';
            document.getElementsByClassName('aa14')[0].style.display='block';
            document.getElementsByClassName('aa15')[0].style.display='block';
            document.getElementsByClassName('head2')[0].style.display='none';
            document.getElementsByClassName('head4')[0].style.display='block';
        }
    }

    function check15(){
        var a = parseInt(document.test.b1.value)
        var b = parseInt(document.test.b2.value)
        var c = parseInt(document.test.b3.value)
        var d = parseInt(document.test.b4.value)
        var e = parseInt(document.test.b5.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa11')[0].style.display='none';
            document.getElementsByClassName('aa12')[0].style.display='none';
            document.getElementsByClassName('aa13')[0].style.display='none';
            document.getElementsByClassName('aa14')[0].style.display='none';
            document.getElementsByClassName('aa15')[0].style.display='none';
            document.getElementsByClassName('aa16')[0].style.display='block';
            document.getElementsByClassName('aa17')[0].style.display='block';
            document.getElementsByClassName('aa18')[0].style.display='block';
            document.getElementsByClassName('aa19')[0].style.display='block';
            document.getElementsByClassName('aa20')[0].style.display='block';
            document.getElementsByClassName('head4')[0].style.display='none';
            document.getElementsByClassName('head5')[0].style.display='block';
        }
    }

    function check20(){
        var a = parseInt(document.test.b6.value)
        var b = parseInt(document.test.b7.value)
        var c = parseInt(document.test.b8.value)
        var d = parseInt(document.test.b9.value)
        var e = parseInt(document.test.b10.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa16')[0].style.display='none';
            document.getElementsByClassName('aa17')[0].style.display='none';
            document.getElementsByClassName('aa18')[0].style.display='none';
            document.getElementsByClassName('aa19')[0].style.display='none';
            document.getElementsByClassName('aa20')[0].style.display='none';
            document.getElementsByClassName('aa21')[0].style.display='block';
            document.getElementsByClassName('aa22')[0].style.display='block';
            document.getElementsByClassName('aa23')[0].style.display='block';
            document.getElementsByClassName('aa24')[0].style.display='block';
            document.getElementsByClassName('aa25')[0].style.display='block';
            document.getElementsByClassName('head5')[0].style.display='none';
            document.getElementsByClassName('head6')[0].style.display='block';
        }
    }

    function check25(){
        var a = parseInt(document.test.c1.value)
        var b = parseInt(document.test.c2.value)
        var c = parseInt(document.test.c3.value)
        var d = parseInt(document.test.c4.value)
        var e = parseInt(document.test.c5.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa21')[0].style.display='none';
            document.getElementsByClassName('aa22')[0].style.display='none';
            document.getElementsByClassName('aa23')[0].style.display='none';
            document.getElementsByClassName('aa24')[0].style.display='none';
            document.getElementsByClassName('aa25')[0].style.display='none';
            document.getElementsByClassName('aa26')[0].style.display='block';
            document.getElementsByClassName('aa27')[0].style.display='block';
            document.getElementsByClassName('aa28')[0].style.display='block';
            document.getElementsByClassName('aa29')[0].style.display='block';
            document.getElementsByClassName('aa30')[0].style.display='block';
        }
    }

    function check30(){
        var a = parseInt(document.test.c6.value)
        var b = parseInt(document.test.c7.value)
        var c = parseInt(document.test.c8.value)
        var d = parseInt(document.test.c9.value)
        var e = parseInt(document.test.c10.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa26')[0].style.display='none';
            document.getElementsByClassName('aa27')[0].style.display='none';
            document.getElementsByClassName('aa28')[0].style.display='none';
            document.getElementsByClassName('aa29')[0].style.display='none';
            document.getElementsByClassName('aa30')[0].style.display='none';
            document.getElementsByClassName('aa31')[0].style.display='block';
            document.getElementsByClassName('aa32')[0].style.display='block';
            document.getElementsByClassName('aa33')[0].style.display='block';
            document.getElementsByClassName('aa34')[0].style.display='block';
            document.getElementsByClassName('aa35')[0].style.display='block';
            document.getElementsByClassName('head6')[0].style.display='none';
            document.getElementsByClassName('head7')[0].style.display='block';
        }
    }

    function check35(){
        var a = parseInt(document.test.d1.value)
        var b = parseInt(document.test.d2.value)
        var c = parseInt(document.test.d3.value)
        var d = parseInt(document.test.d4.value)
        var e = parseInt(document.test.d5.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa31')[0].style.display='none';
            document.getElementsByClassName('aa32')[0].style.display='none';
            document.getElementsByClassName('aa33')[0].style.display='none';
            document.getElementsByClassName('aa34')[0].style.display='none';
            document.getElementsByClassName('aa35')[0].style.display='none';
            document.getElementsByClassName('aa36')[0].style.display='block';
            document.getElementsByClassName('aa37')[0].style.display='block';
            document.getElementsByClassName('aa38')[0].style.display='block';
            document.getElementsByClassName('aa39')[0].style.display='block';
            document.getElementsByClassName('aa40')[0].style.display='block';
        }
    }

    function check40(){
        var a = parseInt(document.test.d6.value)
        var b = parseInt(document.test.d7.value)
        var c = parseInt(document.test.d8.value)
        var d = parseInt(document.test.d9.value)
        var e = parseInt(document.test.d10.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa36')[0].style.display='none';
            document.getElementsByClassName('aa37')[0].style.display='none';
            document.getElementsByClassName('aa38')[0].style.display='none';
            document.getElementsByClassName('aa39')[0].style.display='none';
            document.getElementsByClassName('aa40')[0].style.display='none';
            document.getElementsByClassName('aa41')[0].style.display='block';
            document.getElementsByClassName('aa42')[0].style.display='block';
            document.getElementsByClassName('aa43')[0].style.display='block';
            document.getElementsByClassName('aa44')[0].style.display='block';
            document.getElementsByClassName('aa45')[0].style.display='block';
            document.getElementsByClassName('head7')[0].style.display='none';
            document.getElementsByClassName('head8')[0].style.display='block';
        }
    }

    function check45(){
        var a = parseInt(document.test.e1.value)
        var b = parseInt(document.test.e2.value)
        var c = parseInt(document.test.e3.value)
        var d = parseInt(document.test.e4.value)
        var e = parseInt(document.test.e5.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa41')[0].style.display='none';
            document.getElementsByClassName('aa42')[0].style.display='none';
            document.getElementsByClassName('aa43')[0].style.display='none';
            document.getElementsByClassName('aa44')[0].style.display='none';
            document.getElementsByClassName('aa45')[0].style.display='none';
            document.getElementsByClassName('aa46')[0].style.display='block';
            document.getElementsByClassName('aa47')[0].style.display='block';
            document.getElementsByClassName('aa48')[0].style.display='block';
            document.getElementsByClassName('aa49')[0].style.display='block';
            document.getElementsByClassName('aa50')[0].style.display='block';
        }
    }

    function check50(){
        var a = parseInt(document.test.e6.value)
        var b = parseInt(document.test.e7.value)
        var c = parseInt(document.test.e8.value)
        var d = parseInt(document.test.e9.value)
        var e = parseInt(document.test.e10.value)
        if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
            document.getElementsByClassName('aa46')[0].style.display='none';
            document.getElementsByClassName('aa47')[0].style.display='none';
            document.getElementsByClassName('aa48')[0].style.display='none';
            document.getElementsByClassName('aa49')[0].style.display='none';
            document.getElementsByClassName('aa50')[0].style.display='none';
            document.getElementsByClassName('count')[0].style.display='none';
            
        }
    }

function count1(number) {
    const counter = document.getElementById('counter')
    const result = Number(counter.innerHTML)
    var a = parseInt(document.test.a1.value)
    var b = parseInt(document.test.a2.value)
    var c = parseInt(document.test.a3.value)
    var d = parseInt(document.test.a4.value)
    var e = parseInt(document.test.a5.value)
    if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
    counter.innerHTML = result + number
    }
}

function count2(number) {
    const counter = document.getElementById('counter')
    const result = Number(counter.innerHTML)
    var a = parseInt(document.test.a6.value)
    var b = parseInt(document.test.a7.value)
    var c = parseInt(document.test.a8.value)
    var d = parseInt(document.test.a9.value)
    var e = parseInt(document.test.a10.value)
    if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
    counter.innerHTML = result + number
    }
}

function count3(number) {
    const counter = document.getElementById('counter')
    const result = Number(counter.innerHTML)
    var a = parseInt(document.test.b1.value)
    var b = parseInt(document.test.b2.value)
    var c = parseInt(document.test.b3.value)
    var d = parseInt(document.test.b4.value)
    var e = parseInt(document.test.b5.value)
    if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
    counter.innerHTML = result + number
    }
}

function count4(number) {
    const counter = document.getElementById('counter')
    const result = Number(counter.innerHTML)
    var a = parseInt(document.test.b6.value)
    var b = parseInt(document.test.b7.value)
    var c = parseInt(document.test.b8.value)
    var d = parseInt(document.test.b9.value)
    var e = parseInt(document.test.b10.value)
    if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
    counter.innerHTML = result + number
    }
}

function count5(number) {
    const counter = document.getElementById('counter')
    const result = Number(counter.innerHTML)
    var a = parseInt(document.test.c1.value)
    var b = parseInt(document.test.c2.value)
    var c = parseInt(document.test.c3.value)
    var d = parseInt(document.test.c4.value)
    var e = parseInt(document.test.c5.value)
    if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
    counter.innerHTML = result + number
    }
}

function count6(number) {
    const counter = document.getElementById('counter')
    const result = Number(counter.innerHTML)
    var a = parseInt(document.test.c6.value)
    var b = parseInt(document.test.c7.value)
    var c = parseInt(document.test.c8.value)
    var d = parseInt(document.test.c9.value)
    var e = parseInt(document.test.c10.value)
    if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
    counter.innerHTML = result + number
    }
}

function count7(number) {
    const counter = document.getElementById('counter')
    const result = Number(counter.innerHTML)
    var a = parseInt(document.test.d1.value)
    var b = parseInt(document.test.d2.value)
    var c = parseInt(document.test.d3.value)
    var d = parseInt(document.test.d4.value)
    var e = parseInt(document.test.d5.value)
    if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
    counter.innerHTML = result + number
    }
}

function count8(number) {
    const counter = document.getElementById('counter')
    const result = Number(counter.innerHTML)
    var a = parseInt(document.test.d6.value)
    var b = parseInt(document.test.d7.value)
    var c = parseInt(document.test.d8.value)
    var d = parseInt(document.test.d9.value)
    var e = parseInt(document.test.d10.value)
    if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
    counter.innerHTML = result + number
    }
}

function count9(number) {
    const counter = document.getElementById('counter')
    const result = Number(counter.innerHTML)
    var a = parseInt(document.test.e1.value)
    var b = parseInt(document.test.e2.value)
    var c = parseInt(document.test.e3.value)
    var d = parseInt(document.test.e4.value)
    var e = parseInt(document.test.e5.value)
    if(a > 0 && b > 0 && c > 0 && d > 0 && e > 0){
    counter.innerHTML = result + number
    }
}