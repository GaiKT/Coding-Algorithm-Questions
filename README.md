# Coding Algorithm Questions
## Problem 1: Boss Baby's Revenge 
### Solution
  1. Initializes variables and find string.length
     ```bash
      let countShot = 0;
      let stringLength = string.length
     ```
  1. Verify inputs to comply with rules (If not return "input not match")
     ```bash
        if (stringLength < 1 || stringLength > 1000000) {
            return "Input does not match";
        }    
     ```
  2. First check the input that the first letter is R and the last letter is S. (If yes return "Bad Boy")
     ```bash
        if (string[0] === 'R' || string[stringLength - 1] === 'S') {
            return "Bad boy";
        }
     ```    
  3. Loop each letter. If it is the letter S, count +1. If it is the letter R, count -1. (+1 as mean get hit , -1 as mean shotback)
     ```bash
        for (let i = 0; i < stringLength; i++) {
            
            let letter = string[i];
    
            if (letter === 'S') {
                countShot ++;
            } else if (letter === 'R') {
                if(countShot > 0){
                    countShot --;
                }
            }
        }
     ```
  4. When the number is 0 (successful revenge), it will not be add -1 , because Boss Baby can return fire more than once.
     ```bash
       if(countShot > 0){
          countShot --;
        }
     ```
  5. Last check to see if Boss Baby got his revenge. (If yes return "Good Boy" , If not return "Bad Boy")
     ```bash
       return countShot === 0 ? "Good boy" : "Bad boy"
     ```

## Problem 2: Superman's Chicken Rescue
### Solution
  1. Verify inputs to comply with rules (If not return "input not match")
  2. Initializes variables to keep track of the maximum number of chickens and the starting index of the window.
     
     ```bash
       let maxChickens = 0;
       let start = 0;
     ```
  3. Main Loop through each position using the end index.
     
     ```bash
        for (let end = 0; end < n; end++) {
     ```
  4. while loop Mmves the start pointer to ensure the window size is within the roof length k
     
     ```bash
        while (positions[end] - positions[start] >= k) {
            start++;
        }
     ```     
  5. Calculates the number of chickens in the current window (from start to end).
     
     ```bash
      let currentChickens = end - start + 1;
     ```          
  6. Updates the maximum number of chickens if the current window contains more chickens than the previous maximum.
     ```bash
        if (currentChickens > maxChickens) {
            maxChickens = currentChickens;
        }
     ```    
  7. Returns the maximum number of chickens
