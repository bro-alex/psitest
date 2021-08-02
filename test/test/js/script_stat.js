function stata1(){
  var statas1 = parseInt(document.test.a1.value) + parseInt(document.test.a2.value) + parseInt(document.test.a3.value) + parseInt(document.test.a4.value) + parseInt(document.test.a5.value);
  document.getElementById("stata").innerHTML = statas1;
  document.getElementById("testing1").innerHTML = statas1;  
}

function stata2(){
  var statas2 = parseInt(document.test.a6.value) + parseInt(document.test.a7.value) + parseInt(document.test.a8.value) + parseInt(document.test.a9.value) + parseInt(document.test.a10.value);
  var i  = parseInt(document.getElementById("stata").innerHTML);
  document.getElementById("stata").innerHTML = statas2 + i;
  document.getElementById("testing1").innerHTML = statas2 + i;   
}

function statb1(){
  var statbs1 = parseInt(document.test.b1.value) + parseInt(document.test.b2.value) + parseInt(document.test.b3.value) + parseInt(document.test.b4.value) + parseInt(document.test.b5.value);
  document.getElementById("statb").innerHTML = statbs1;
  document.getElementById("testing2").innerHTML = statbs1;   
}
  
function statb2(){
  var statbs2 = parseInt(document.test.b6.value) + parseInt(document.test.b7.value) + parseInt(document.test.b8.value) + parseInt(document.test.b9.value) + parseInt(document.test.b10.value);
  var i  = parseInt(document.getElementById("statb").innerHTML);
  document.getElementById("statb").innerHTML = statbs2 + i;
  document.getElementById("testing2").innerHTML = statbs2 + i;  
}

function statc1(){
  var statcs1 = parseInt(document.test.c1.value) + parseInt(document.test.c2.value) + parseInt(document.test.c3.value) + parseInt(document.test.c4.value) + parseInt(document.test.c5.value);
  document.getElementById("statc").innerHTML = statcs1;
  document.getElementById("testing3").innerHTML = statcs1;   
}
      
function statc2(){
  var statcs2 = parseInt(document.test.c6.value) + parseInt(document.test.c7.value) + parseInt(document.test.c8.value) + parseInt(document.test.c9.value) + parseInt(document.test.c10.value);
  var i  = parseInt(document.getElementById("statc").innerHTML);
  document.getElementById("statc").innerHTML = statcs2 + i;
  document.getElementById("testing3").innerHTML = statcs2 + i;  
}

function statd1(){
  var statds1 = parseInt(document.test.d1.value) + parseInt(document.test.d2.value) + parseInt(document.test.d3.value) + parseInt(document.test.d4.value) + parseInt(document.test.d5.value);
  document.getElementById("statd").innerHTML = statds1;
  document.getElementById("testing4").innerHTML = statds1;  
}
        
function statd2(){
  var statds2 = parseInt(document.test.d6.value) + parseInt(document.test.d7.value) + parseInt(document.test.d8.value) + parseInt(document.test.d9.value) + parseInt(document.test.d10.value);
  var i  = parseInt(document.getElementById("statd").innerHTML);
  document.getElementById("statd").innerHTML = statds2 + i;
  document.getElementById("testing4").innerHTML = statds2 + i;  
}

function state1(){
  var states1 = parseInt(document.test.e1.value) + parseInt(document.test.e2.value) + parseInt(document.test.e3.value) + parseInt(document.test.e4.value) + parseInt(document.test.e5.value);
  document.getElementById("state").innerHTML = states1;
  document.getElementById("testing5").innerHTML = states1;  
}
          
function state2(){
    var states2 = parseInt(document.test.e6.value) + parseInt(document.test.e7.value) + parseInt(document.test.e8.value) + parseInt(document.test.e9.value) + parseInt(document.test.e10.value);
    var i  = parseInt(document.getElementById("state").innerHTML);
    document.getElementById("state").innerHTML = states2 + i;
    document.getElementById("testing5").innerHTML = states2 + i;
     
}