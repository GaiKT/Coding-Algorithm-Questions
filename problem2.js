// Problem 2: Superman's Chicken Rescue

// Description:
// In a one-dimensional world, Superman needs to protect chickens from a heavy rainstorm using a roof of limited
// length. Given the positions of chickens and the length of the roof Superman can carry, determine the maximum
// number of chickens Superman can protect.

// Input:
// The input consists of two integers n and k (1 <= n,k <= 1,000,000), where n represents the number of chickens
// and k denotes the length of the roof Superman can carry. The next line contains n integers (1 <= x <=
// 1,000,000,000) representing the positions of the chickens on the one-dimensional axis.

// Output:
// Output a single integer, denoting the maximum number of chickens Superman can protect with the given roof length.

// Note:
// - Superman can position the roof starting at any point on the axis.
// - The roof can cover chickens whose positions are within k units from its starting point. [p, p+k)
// - It's not required to cover all chickens, but to maximize the number of chickens protected.
// - It’s guaranteed that the given positions of the chickens will be sorted from lowest to highest.

function protectCheckenWithRoof(n , k , position) {

    let numberOfChecken = 0
    
    for(let end = 0 ; end < n ; end++){
        let start = 0
        let newNumberOfChecken = 0

        // Adjust the start pointer until the window is within the roof length
        while(position[end] - position[start] >= k){
            start ++
        }

        newNumberOfChecken = end - start + 1

        // Update the maximum number of chickens that can be protected
        if(numberOfChecken < newNumberOfChecken){
            numberOfChecken = newNumberOfChecken 
        }
    }

    return numberOfChecken
}

// Test cases
let result1 = protectCheckenWithRoof( 5 , 5 , [2,5,10,12,15]);
let result2 = protectCheckenWithRoof( 6 , 10 , [1,10,30,34,35,37]);
let result3 = protectCheckenWithRoof( 8 , 20 , [1,10,30,34,39,40,44,56,48,59,60,66,69]);
let result4 = protectCheckenWithRoof( 7 , 5 , [1,2,3,4,10,18,20]);

console.log(result2) //4
console.log(result1) //2
console.log(result3) //5
console.log(result4) //4
