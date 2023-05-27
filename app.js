const calc = () => {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    document.getElementById("result").innerHTML = `The result is: ${(num1 + num2)}`;
    console.log(document.getElementById("result").innerHTML);
    console.log(document.getElementById("num1").value);
    console.log(document.getElementById("num2").value);
};