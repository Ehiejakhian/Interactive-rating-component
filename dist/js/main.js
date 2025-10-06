//let radioInputs = document.querySelectorAll('input[type="radio]')

let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')

let submit = document.querySelector('.submit-button')

var oneCli = false;
var twoCli = false;
var threeCli = false;
var fourCli = false;
var fiveCli = false;


submit.style.cursor = 'pointer'
submit.addEventListener('click', ()=> {
  let value = checkInputs();
  console.log(value)
  if (value) {
    display(value)
  }
})


function checkInputs() {
  if (one.checked) {
    oneCli = true;
    twoCli, threeCli, fourCli, fiveCli = false
    console.log(one.value)
    return one.value
  }
  if (two.checked) {
    twoCli = true;
    oneCli, threeCli, fourCli, fiveCli = false
    return two.value
  }
  if (three.checked) {
    threeCli = true;
    twoCli, oneCli, fourCli, fiveCli = false
    return three.value
  }
  if (four.checked) {
    fourCli = true;
    twoCli, threeCli, oneCli, fiveCli = false
    return four.value
  }
  if (five.checked) {
    fiveCli = true;
    twoCli, threeCli, fourCli, oneCli = false
    return five.value
  }
}

function display(value) {
  document.querySelector('.rating-state').classList.add('closed')
  document.querySelector('.thank-you-state').classList.add('open')
  document.querySelector('.selected-value').textContent = value
}
