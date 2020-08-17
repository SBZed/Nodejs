let sum = 0;
process.argv.slice(2).forEach(element => {
    sum += +element
});
console.log(sum);