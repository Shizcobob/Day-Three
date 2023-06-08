/* 
    String: Is Palindrome

    Create a function that returns a boolean whether the string is a **STRICT** palindrome. 
        - palindrome = string that is same forwards and backwards
    
    Do not ignore spaces, punctuation and capitalization
 */

    const str1 = "a x a";
    const expected1 = true;
    
    const str2 = "racecar";
    const expected2 = true;
    
    const str3 = "Dud";
    const expected3 = false;
    
    const str4 = "oho!";
    const expected4 = false;
    
    /**
     * Determines if the given str is a palindrome (same forwards and backwards).
     * - Time: O(?).
     * - Space: O(?).
     * @param {string} str
     * @returns {boolean} Whether the given str is a palindrome or not.
     */

//     const str1 = "a x a";
//     const expected1 = true;

//     function isPalindrome(str) { 
//         for(var i=0; i < str.length/2; i++){
//             var string = str.replace(/\s/g, '');
//             var len = string.length;
//             if(string[i] != string[len -1- i]){
//                 return false;
//             }
//             return true;
//         }
//     }
// console.log(isPalindrome(str1))

function isPalindrome(str) { 
    for (let left = 0; left < str.length/2; left++) {
        let right = str.length-1-left;
        if(str[left] != str[right]){
            return false;
        }
    }
    return true;
}

    
    /*****************************************************************************/
    
    /* 
        Longest Palindrome
    
        For this challenge, we will look not only at the entire string provided,
        but also at the substrings within it.
        Return the longest palindromic substring. 
    
        Strings longer or shorter than complete words are OK.
    
        All the substrings of "abc" are:
        a, ab, abc, b, bc, c
    
        Hint: We could make use of .slice() to get substrings like the abc example above.
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    
        Note: We can use the isPalindrome function you created above to evaluate our substrings to check if they are palindromes! 
    */
    



    const str5 = "what up, daddy-o?";
    const expected5 = "dad";
    
    const str6 = "uh, not much";
    const expected6 = "u";
    
    const str7 = "Yikes! my favorite racecar erupted!";
    const expected7 = "e racecar e";
    
    const str8 = "a1001x20002y5677765z";
    const expected8 = "5677765";
    
    const str9 = "a1001x20002y567765z";
    const expected9 = "567765";
    
    /**
     * Finds the longest palindromic substring in the given string.
     * - Time: O(?).
     * - Space: O(?).
     * @param {string} str
     * @returns {string} The longest palindromic substring from the given string.
     */
/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
//!Solution revised


function longestPalindromicSubstring(str) { 
    //create substring to then iterate through - checking if palindrome
    let palinLong = ""
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length+1; j++) {
            let subString = str.slice(i,j);
            if (isPalindrome(subString) && subString.length > palinLong.length){
                // console.log(subString);
                palinLong = subString;
            }
        }
    }
    console.log(palinLong);
    return palinLong;
    }
    longestPalindromicSubstring(str5)
    longestPalindromicSubstring(str6)
    longestPalindromicSubstring(str7)
    longestPalindromicSubstring(str8)
    longestPalindromicSubstring(str9)