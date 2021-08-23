function sendtophp(){
    let testing1 = parseInt(document.getElementById("testing1").innerHTML);
    let testing2 = parseInt(document.getElementById("testing2").innerHTML);
    let testing3 = parseInt(document.getElementById("testing3").innerHTML);
    let testing4 = parseInt(document.getElementById("testing4").innerHTML);
    let testing5 = parseInt(document.getElementById("testing5").innerHTML);
    
$.ajax({
    type: "POST",
    url: '../test/funcresult.php',
    data: { 
        'testing1': testing1,
        'testing2': testing2,
        'testing3': testing3,
        'testing4': testing4,
        'testing5': testing5,
    }
});
}