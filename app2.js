var pos = 200;
var pos1 = 200;
var count =0;
function myMove() {
var x =  event.key;
  var elem = document.getElementById("car");

  if(x=="a" && pos1>=0 && count==0){
  pos1 = pos1-10;}
if(x=="d" && pos1<=750 && count==0){
  pos1 = pos1+10 ;}
if(x=="w" && pos>=0 && count==0){
  pos = pos-10;}
if(x=="s" && pos<=350 && count==0){
  pos = pos+10;}

  if((pos==0 || pos==350 ||pos1==0 || pos1==750) && count==0){
  alert("game Over");
  count++;
  }





      elem.style.top = pos + 'px';
       elem.style.left = pos1 + 'px';

    }
