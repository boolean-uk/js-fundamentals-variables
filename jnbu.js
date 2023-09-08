const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", function(firstName) {
    rl.question("What is your surname? ", function(surName) {
        console.log(`Welcome ${firstName} and your surname is ${surName}`);
        rl.close();
    });
});


let coding = "i am a programmer"
console.log("${usama} is a ${coding}");