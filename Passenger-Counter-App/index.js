// grab the count-el element, store it in a countEl variable
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetEl = document.getElementById("reset-el")
let count = 0

function increment() {
    count += 1
    // set countEl's innerText to the count
    countEl.textContent = count
}

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
   // 3. Render the variable in the saveEl using innerText
   // NB: Make sure to not delete the existing content of the paragraph
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    countEl.textContent = 0
    count = 0
    saveEl.textContent = "Previous entries: "
}