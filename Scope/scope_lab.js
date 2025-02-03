// Global Scope

var globalVar = "I'm a global variable";
let globalLet = "i'm also global but scoped with let";
const globalConst = "I'm a global constant";

{
// Block Scope

var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
// Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped constant";
}
show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);