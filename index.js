let count = 0
let countEL = document.getElementById("count-el")
let saveText = document.getElementById("save-text")

function increment(){
count += 1
countEL.textContent = count

}

function save() {
  let newCount = count + " - "
  saveText.textContent += newCount
  count = 0
  countEL.textContent = count
}