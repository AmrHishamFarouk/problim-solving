/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = '';
    let next;

    for(let i=0; i<strs.length; i++){
        for(let j=0; j<strs[i].length; j++){
            next = i + 1;            
            for(let k=0 ; k<strs[next].length ;k++){
                if(strs[i][j] == strs[next][k]){
                    common = common.concat(strs[i][j]);   
                }
            }
        
        }
        if(common == ''){
            return common;
        }
    }

};
