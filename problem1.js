// Description:
// Boss Baby, known for his cool and clever ways, deals with teasing from the neighborhood kids who shoot
// water guns at his house. In response, Boss Baby seeks revenge by shooting at least one shot back, but only
// if the kids have already shot at him first. As Boss Baby's assistant, your task is to check if Boss Baby has
// sought revenge for every shot aimed at him at least once and hasn't initiated any shooting himself.

// Input:
// A string (S, 1 <= len(S) <= 1,000,000) containing characters 'S' and 'R', where 'S' represents a shot and 'R'
// represents revenge. The string represents the sequence of events for one day.

// Output:
// Return "Good boy" if all shots have been revenged at least once and Boss Baby doesn’t initiate any shots at
// the neighborhood kids first. Return "Bad boy" if these conditions are not satisfied.

// Note:
// - Boss Baby doesn’t need to shoot back before the next shots of the kids. He can shoot back whenever
// he wants as long as he doesn’t shoot first.


function checkGoodBoy(string) {
    let countShot = 0;
    let stringLength = string.length // find string length

    // check input length
    if (stringLength < 1 || stringLength > 1000000) {
        return "Input does not match";
    }    

    // If the first character is 'R' or the last character is 'S', return "Bad boy"
    if (string[0] === 'R' || string[stringLength - 1] === 'S') {
        return "Bad boy";
    }

    // 
    for (let i = 0; i < stringLength; i++) {
        
        let letter = string[i];

        if (letter === 'S') {
            countShot ++;
        } else if (letter === 'R') {
            // If every shot was revenge That shot doesn't count.
            if(countShot > 0){
                countShot --;
            }
        }
    }

    // If all shots have been revenged properly, return "Good boy"
    return countShot === 0 ? "Good boy" : "Bad boy"
}

// Test cases
let result1 = checkGoodBoy("SRSSRRR");
let result2 = checkGoodBoy("RSSRR");
let result3 = checkGoodBoy("SSSRRRRS");
let result4 = checkGoodBoy("SRRSSR");
let result5 = checkGoodBoy("SSRSRR");
let result6 = checkGoodBoy("SSRRRRRRRRRRRRRRRRRRRRRRRRR");
let result7 = checkGoodBoy("SSRRRRRRRRRRRSSRRRRRRRRRRRRRSSR");

console.log(result1); // Good boy
console.log(result2); // Bad boy
console.log(result3); // Bad boy
console.log(result4); // Bad boy
console.log(result5); // Good boy
console.log(result6); //Good boy
console.log(result7); //Good boy
