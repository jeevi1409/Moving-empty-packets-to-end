let n = parseInt(prompt("n:"));
let chocolates = [];
for (let i = 0; i < n; i++) {
    let chocolate = parseInt(prompt(`Enter the value of chocolate packet ${i + 1} (0 for empty packet):`));
    chocolates.push(chocolate);
}
let result = new Array(n).fill(0);
let index = 0;
for (let i = 0; i <n; i++) {
    if (chocolates[i] !== 0) {
        result[index] = chocolates[i];
        index++;
    }
}
console.log("Modified array of chocolates:", result); 
