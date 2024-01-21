/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    for(let i=0;i<s.length;i++){
        if('A'<=s[i]<='Z'){
            s[i]= s[i] + 32;
        }
        else{
            if(!('a'<=s[i]<='z')){
            s[i]= '';
            }
        }
    }
    console.log(s)

    let right = s.length-1;
    let left = 0;
    while(left < right){
        if(s[left] != s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};
