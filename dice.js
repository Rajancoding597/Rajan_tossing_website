function changeimage(player1,a){
    if(a === 0){
     var image = document.getElementById("IMAGE1");
    }
    else{
     var image = document.getElementById("IMAGE2");
    }
 
     if(player1 === 1){
         image.src = "dice1.png";
     }
     else if(player1 === 2){
         image.src = "dice2.png";
     }
     else if(player1 === 3){
         image.src = "dice3.png";
     }
     else if(player1 === 4){
         image.src = "dice4.png";
     }
     else if(player1 === 5){
         image.src = "dice5.png";
     }
     else{
         image.src = "dice6.png";
     }
 }

 document.getElementById("btn").onclick = function() {main()};

 function main(){
 var m = Math.random();
 var n = Math.random();
 var p = m*6;
 var q = n*6;
 var player1 = Math.floor(p)  + 1;
 var player2 = Math.floor(q)  + 1;
 changeimage(player1,0);
 changeimage(player2,1);

 if(player1 > player2){
    document.getElementById("result").innerHTML="Player 1 Wins";
}
else if(player1 < player2){
   document.getElementById("result").innerHTML="Player 2 Wins";
    
}
else{
   document.getElementById("result").innerHTML="Draw";
}
 }


 

 
 