const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("Welcome to the password validator tool!")

reader.question("Please enter your password", function(input){
	tokens = input.split(' ');

  userPasswordEntered = tokens [0];
  console.log('userPasswordEntered: ', userPasswordEntered);

  if (userPasswordEntered.length >= 10) {
    console.log("Success! Your password meets the requirements.");
    console.log(' /\\___/\\\n( o   o )\n(  =^=  )\n(        )\n(         )\n(          )))))))))))')
    
  } else {
    console.log('/ (╯°□°）╯︵ ┻━┻');
    
    console.log("Your password has failed to meet the requirements");
    console.log(' /\\_/\\\n( o.o )\n > ^ <\n')
    
  }
	
	reader.close()

});