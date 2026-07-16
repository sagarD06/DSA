/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision (asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let isActive = true;
        while (isActive && stack.length && stack.at(-1) > 0 && asteroids[i] < 0) {
            if (stack.at(-1) < Math.abs(asteroids[i])) {
                stack.pop();
            } else if (stack.at(-1) === Math.abs(asteroids[i])) {
                isActive = false;
                stack.pop();
            } else {
                isActive = false;
            }
        }

        if (isActive) stack.push(asteroids[i])
    }
    return stack;
};

console.log(asteroidCollision([5,10,-5])); //[5,10]
console.log(asteroidCollision([3,5,-6,2,-1,4])); //[-6,2,4]
