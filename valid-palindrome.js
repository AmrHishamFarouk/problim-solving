/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.replace(/[^a-zA-Z0-9]/g ,'')
    s = s.toLowerCase()

    let R = s.length-1;
    let L = 0;
    while(L < R){
        if(s[L] !== s[R]){
            console.log(s[L], s[R])
            return false;
        }
        L++;
        R--;
    }
    return true;
};
