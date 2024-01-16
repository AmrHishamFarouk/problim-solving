/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let result = true;
    let found = false;
    if(t.length == 1 && s.length !=1){
        return false;
    }
        for(let j=0;j<t.length;j++){
            for(let i=0;i<s.length;i++){
                if(t[j]==s[i]){
                    found =true;
                    break;
                }
                else{
                    found = false;
                }
            }
            if(found != true){
                result = false;
            }
        }
    return result;
};
