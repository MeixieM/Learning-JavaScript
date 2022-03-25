

let conversionInput1 = document.getElementById("conversion1")
let conversionInput2 = document.getElementById("conversion2")
let conversionInput3 = document.getElementById("conversion3")

document.getElementById("myButton").onclick = function () {
    var inputNum = document.getElementById("num-enter").value;
    
        let meter = inputNum * 3.28084 
        let feet = inputNum * 0.3048 
        conversionInput1.textContent = inputNum + " meters = "+ meter.toFixed(3) +  " feet | " + inputNum + " feet = "+  feet.toFixed(3) +" meters"
  
        let liters = inputNum * 3.785411784
        let gallons = inputNum * 0.2641720524 
        conversionInput2.textContent = inputNum + " liters = "+ gallons.toFixed(3) +  " gallons | " + inputNum + " gallons = "+  liters.toFixed(3) +" liters"
    

        let pounds = inputNum * 0.45359237
        let kilos = inputNum / 0.45359237
        conversionInput3.textContent = inputNum + " kilos = "+ kilos.toFixed(3) +  " pounds | " + inputNum + " pounds = "+  pounds.toFixed(3) +" kilos"
}


