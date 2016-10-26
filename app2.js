var pos = 200;
var pos1 = 200;
var count =0;
function myMove() {
var x =  event.key;
  var elem = document.getElementById("car");

  if((x=="a" || x=="A") && pos1>=0 && count==0){
  pos1 = pos1-10;}
if((x=="d" || x=="D")&& pos1<=750 && count==0){
  pos1 = pos1+10 ;}
if((x=="W" || x=="w") && pos>=0 && count==0){
  pos = pos-10;}
if((x=="S" || x=="s") && pos<=350 && count==0){
  pos = pos+10;}

  if((pos==0 || pos==350 ||pos1==0 || pos1==750) && count==0){
  alert(" GAME OVER !! Better Luck Next Time");
  count++;
  }





      elem.style.top = pos + 'px';
       elem.style.left = pos1 + 'px';

    }
