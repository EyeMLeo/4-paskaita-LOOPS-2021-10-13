'use strict';
console.log('game.js');



// STARTING SCORE
let totalScoreEl;
document.getElementById("totalScore").innerHTML=0


// STARTING POWER
let power=1







// CLICK LISTENER FOR ADD MORE
document.getElementById("totalScore").addEventListener("click", myFunction);
totalScoreEl=document.getElementById("totalScore").innerHTML;

// CLICK FUNCTION FOR ADD MORE
function myFunction() {
    document.getElementById("totalScore").innerHTML =+(document.getElementById("totalScore").innerHTML) + power;
    
  }
  






  
  
//   // CLICK LISTENER FOR ADD MORE
// document.getElementById("PowerUpBtn").addEventListener("click", myFunctionPower);
// // CLICK FUNCTION FOR ADD MORE
// function myFunctionPower() {
//     document.getElementById("totalScore").innerHTML-10;
//     power+=1;
//   }
  
  