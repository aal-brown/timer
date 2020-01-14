/* 
Take in an array of numbers representing timers
After each time is elapsed we will "beep"

Multiply each item by 1000

iterate through the array

if statement to skip negative numbers

Skip non-numbers

skip empty numbers

*/

const argList = process.argv.slice(2);

const timer1 = function(arrayInput) {
  
  for (let delay of arrayInput) {
    
    delay = Number(delay)

    if (delay >= 0 && delay !== undefined && !isNaN(delay)) {
      
      setTimeout(() => {
        process.stdout.write("BEEP!");
        console.log("");
      }, delay*1000);
    }
  }
};

timer1(argList);