// 1.1
function findMinLengthOfThreeWords(word1, word2, word3) {
    return Math.min(word1.length, word2.length, word3.length);
}
var output = findMinLengthOfThreeWords('apple', 'banana', 'pear');
console.log('Task(1): ' + output);

// 1.2
function filterOddElements(arr) {
    return arr.filter(function (number) {
        return number % 2 !== 0;
    });
}
output = filterOddElements([1, 2, 3, 4, 5]);
console.log('Task(2): ' + output);

// 1.3
function getLengthOfShortestElement(arr) {
    if (arr.length < 1) {
        return 0;
    }
    var shortestLength = arr[0].length;
    for (let i in arr) {
        if (arr[i].length < shortestLength) {
            shortestLength = arr[i].length;
        }
    }
    return shortestLength;
}
output = getLengthOfShortestElement(['JavaScript', 'Python', 'C']);
console.log('Task(3): ' + output);

// 1.4
function joinArrayOfArrays(arr) {
    return arr.reduce(function (result, subArray) {
        return result.concat(subArray);
    }, []);
}
output = joinArrayOfArrays([
    [1, 2],
    [3, 4],
    [5]
]);
console.log('Task(4): ' + output);

// 1.5
function findSmallestNumberAmongMixedElements(arr) {
    const numbers = arr.filter(item => typeof item === 'number');
    if (numbers.length > 0) {
        return Math.min.apply(null, numbers);
    } else {
        return 0;
    }
}
output = findSmallestNumberAmongMixedElements([2, 'text', 3.14, -5]);
console.log('Task(5): ' + output);

// 1.6
function computeSummationToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
output = computeSummationToN(4);
console.log('Task(6): ' + output);

// 1.7
function convertScoreToGrade(score) {
    if (score > 100 || score < 0) return 'INVALID SCORE';
    else if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else return 'F';
}
output = convertScoreToGrade(95);
console.log('Task(7): ' + output);

// 1.8
function getLongestOfThreeWords(word1, word2, word3) {
    var maxLength = Math.max(word1.length, word2.length, word3.length);
    var longestWord = [word1, word2, word3].filter(function (word) {
        return word.length === maxLength;
    })[0];
    return longestWord;
}
output = getLongestOfThreeWords('apple', 'banana', 'pear');
console.log('Task(8): ' + output);

// 1.9
function multiply(num1, num2) {
    var sum = 0;
    for (i = 0, j = Math.abs(num2); i < j; i++) {
        sum += num1;
    }
    if (num2 < 0) {
        return -sum;
    }
    return sum;
}
output = multiply(4, 7);
console.log('Task(9): ' + output);

// 1.10
function computeSumBetween(num1, num2) {
    var sum = 0;
    for (var i = num1; i < num2; i++) {
        sum += i;
    }
    return sum;
}
output = computeSumBetween(2, 5);
console.log('Task(10): ' + output);