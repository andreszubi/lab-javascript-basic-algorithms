console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "Andres";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Amalita";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(` The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length}`);
}
// Iteration 3: Loops

// 3.1
// console.log(driverCaps[0],driverCaps[1],driverCaps[2],driverCaps[3],driverCaps[4],driverCaps[5]);
const driverCaps =  hacker1.toUpperCase();
function driverinCapsSpace (driverCaps) {
let finalResult = " ";
for (let count = 0; count < driverCaps.length; count += 1) {
    finalResult = finalResult + driverCaps[count] +  " ";
    
} console.log(finalResult);
}
driverinCapsSpace(driverCaps);
// 3.2
//console.log(hacker2[6],hacker2[5],hacker2[4],hacker2[3],hacker2[2],hacker2[1],hacker2[0]);
function hacker2Backwards (hacker2) {
    const nameBackwards = hacker2.length - 1;
    let char = "";
    for (let index = nameBackwards ; index >= 0; index -= 1) {
        char = char + hacker2[index];
    } console.log(char);
}

hacker2Backwards(hacker2);


// 3.3 

function lexographicalOrder(N, array1) {
 array1.sort();

 for (let i = 0; i < N; i += 1) {
 break;
}  console.log(array1);
}

let array1 = ["The driver's name goes first", "Yo, the navigator goes first definitely.", "What?! You both have the same name?"];
let N = array1.length;

lexographicalOrder(N, array1);

// Bonus 1:
function countLorem (str) {
    const arr = str.split(' ');

    return arr.filter(word => word !== '').length;
}

console.log(countLorem("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ligula mauris, a efficitur ex tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt placerat mauris quis maximus. Pellentesque arcu risus, placerat et dolor tincidunt, malesuada volutpat purus. Duis vel eros ac lacus eleifend faucibus. Aenean vitae erat quis ex rhoncus viverra at ac velit. Praesent et ultrices dui. In eu lorem rhoncus, placerat tellus eu, bibendum magna. Phasellus vitae aliquet ante. Integer finibus leo eu ex imperdiet mattis. Quisque facilisis urna et lacinia mattis. Fusce sed iaculis tortor. Nam fermentum enim ut eros fringilla ultricies. Aenean maximus interdum tristique. Cras lectus felis, volutpat ut diam sit amet, scelerisque bibendum erat. Sed risus est, iaculis quis ex vel, vehicula tempor urna. Aliquam convallis scelerisque purus, sed blandit ex. Duis congue elit a arcu commodo pharetra. Nunc facilisis leo lacus, id faucibus augue fringilla ac. Integer ornare, nibh id ultricies efficitur, libero felis sagittis quam, quis cursus lacus neque sit amet libero. Mauris non enim nec massa cursus interdum. Morbi eget nulla pharetra, maximus magna quis, scelerisque enim. Duis porttitor dapibus volutpat. Vivamus sit amet augue ultricies, blandit leo ut, commodo sapien. Nunc fringilla erat eget sagittis sagittis. Morbi egestas leo non nisi dictum commodo. Vivamus pretium at sem eget luctus. Curabitur semper posuere volutpat. Maecenas cursus, mauris sit amet lacinia accumsan, risus ex consequat sem, vel hendrerit leo sem vel leo. Morbi in ex urna. Sed eget congue ipsum, quis blandit enim. Ut in commodo orci, ut ultricies nisl. Aliquam lacus sem, dictum nec varius vel, vehicula eu libero. Proin augue nunc, faucibus id eros vitae, efficitur consequat sem. Vivamus nec lectus id velit mattis convallis. Sed condimentum vestibulum luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer commodo sed leo facilisis rhoncus. Nullam quis mollis nisl. Pellentesque tempor hendrerit suscipit. Aenean neque arcu, vulputate a nisl quis, fringilla malesuada ligula. Aenean sodales leo vitae nulla sodales, sed auctor purus ornare. Quisque sed commodo est"));


// Bonus 2: 
function checkPalindrome (word) {
const phraseToCheck = word.length;

for (let ind = 0; ind < phraseToCheck / 2; ind += 1) {

     if (word[ind] !== word[phraseToCheck - 1 - ind]) {
        return false;
    
    }
  }  
   return true;
}

const string  = "madam";
const isPalindrome = checkPalindrome(string);

console.log(isPalindrome);