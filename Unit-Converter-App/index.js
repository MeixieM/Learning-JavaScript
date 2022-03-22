let num1 = 20
document.getElementById("num-enter").textContent = num1

let conversionInput1 = document.getElementById("conversion1")


function length() {
    let meter = num1 * 3.28084 
    let feet = num1 * 0.3048 
    conversionInput1.textContent = num1 + " meters = "+ meter.toFixed(3) +  " feet | " + num1 + " feet = "+  feet +" meters"
}


length()