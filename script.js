function revealMessage(){
    document.getElementById("hiddenMessage").style.display ='block';
}
function countDown(){
    var trenutnaVrijednost=document.getElementById("countDownButton").innerHTML;
    var novaVrijednost=0;
    if(trenutnaVrijednost>0){
     novaVrijednost=trenutnaVrijednost-1;
    }
document.getElementById("countDownButton").innerHTML=novaVrijednost;
}