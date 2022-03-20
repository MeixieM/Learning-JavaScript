
let countEl = document.getElementById("count-el")

// intialize the count as 0

let count = 0

// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
function increment () {
    count = count + 1
    countEl.innerText = count
}

// change the count-el in the HTML to reflect the new count

