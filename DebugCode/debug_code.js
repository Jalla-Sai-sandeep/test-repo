function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //checking Inputs

    if(!isNaN(num1) && !isNaN(num2)){
        let result = multiply(num1,num2);

        displayResults(result)
    } else{
        displayResults('enter valid inputs!')
    }

}
function multiply(a,b){
    debugger;

    return a*b;
}
function displayResults(result){
    const a = document.getElementById('result');

    a.textContent= `The result is ${result}`;
}