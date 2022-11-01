let loveScore =document.querySelector(".Submit")
loveScore.addEventListener('click', loveList);


function loveList(e){
    e.preventDefault;
 loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore)
if(loveScore >=30 || loveScore >=70){
  alert(`your lovescore is ${loveScore}% you are deeply in love`);
}else if(loveScore < 30){
 alert(`your lovescore is ${loveScore}% you are little bit in love`);
}else if(loveScore == 100){
  alert(`your lovescore is ${loveScore}% you are drowning in beds of love`);
}else{
  alert(`your lovescore is ${loveScore}% you are adviced to withdraw` );
}

}
let result = loveList();



