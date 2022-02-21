//1st Method:
console.log("1. Using properties and methods");

function charCount1(character, string) {
    const splitStr = string.split("");
    const filterChar = splitStr.filter( char => char === character);
    
    return filterChar.length;
}

const final1 = charCount1("i", "linh xinh");
console.log(final1);

//

console.log("1.2 Using properties and methods but in a shorter syntax");

function charCount1_2(character, string) {
    return (string.split("").filter(char => char === character)).length;
}

const final1_2 = charCount1_2("i", "linh xinh vai");
console.log(final1_2);

//2nd Method:
console.log("2. Using for loop and .split");

function charCount2(character,string) {
    const array = string.split("");

    let counter = 0 
    for(let i = 0; i < array.length; i++){
        if(array[i] === character){
            counter++
        }
    }
    return counter;
}

const final2 = charCount2("i", "linh xinh dien dao")
console.log(final2);

// 

console.log("2.2 Using for loop and .chartAt")

function charCount2_2(character,string) {
    let counter = 0 
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === character){
            counter++
        }
    }
    return counter;
}

const final2_2 = charCount2("i", "linh xinh kinh khung khiep")
console.log(final2_2);