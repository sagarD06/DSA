/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * *** This is a two pointer approach that solves the problem with O(1) SC ***
 * for stack based approach see "BackSpaceStringCompare.js"
 */
function backspaceCompare (s, t) {
    let skipS = 0, skipT = 0;
    let i = s.length - 1, j = t.length - 1;

    while (i >= 0 || j >= 0) {
        while (i >= 0 && (s[i] === '#' || skipS > 0)) {
            if (s[i] === '#') {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            }
        }
        while (j >= 0 && (t[j] === '#' || skipT > 0)) {
            if (t[j] === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            }
        }

        if ((i < 0 && j >= 0) || (i >= 0 && j < 0)) {
            return false
        }

        if (s[i] === t[j]) {
            i--, j--;
        } else {
            return false;
        }

    }
    return true;
};

console.log(backspaceCompare("ab#c","ad#c")); //true
console.log(backspaceCompare("ab##","c#d#")); //true
