/* 
The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
*/

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////



// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {

  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!");
    process.exit();
  }

  if (key === "b") {
    process.stdout.write("BEEP!");
    console.log("");
  }

  if (key >= 1 && key <= 9 && !isNaN(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("BEEP!");
      console.log("");
    }, key * 1000);
  }
});

/* console.log('after callback');



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

timer1(argList); */