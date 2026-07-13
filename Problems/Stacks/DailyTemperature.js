/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures (temperatures) {
    const stack = [];
    let count=0;
    let ans = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++){
        while(stack.length > 0 && temperatures[stack.at(-1)] < temperatures[i]){
            const smaller = stack.pop();
            ans[smaller] = i - smaller;
        }

        stack.push(i);
    }

    return ans;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); //[1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); //[1,1,1,0]
