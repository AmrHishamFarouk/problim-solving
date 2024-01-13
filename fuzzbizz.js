/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    if(1 <= n <= 10000){
            let answer = [];
         for(let i=1; i<=n;i++){
             if(i%3 == 0){
                 if(i%5 == 0){
                    answer[i-1] = 'FizzBuzz';
                    }
                 else{
                     answer[i-1] = 'Fizz';
                    }
             }
             else{
                 if(i%5 == 0){
                    answer[i-1] = 'Buzz';
                    }
                else{
                    answer[i-1] = i.toString();
                }
             }

         }
    return answer;
    }
    return;
};
