
// Get fields
let binField = document.querySelector('.bin-num')
let decField = document.querySelector('.dec-num')
let btnConvert = document.querySelector('.btn-submit')

let newBin = 0;

binField.addEventListener('change', (e)=> {
  const value = e.target.value
  newBin = value;
})

btnConvert.addEventListener('click', (e)=> {
  e.preventDefault();
  checkValidation(newBin) ? convert(newBin) : alert('Please, enter a valid sequence.')
  
})

function checkValidation(binValue) {
  const splitedBin = binValue.split('').reverse()
  for( let num of splitedBin) {
    if(num !== '1' && num !== '0') {
      return false
    }
  }
  return true
}

function convert(binValue) {
  let totDec = 0
  const splitedBin = binValue.split('').reverse()
  for(let i in splitedBin) {
    if(splitedBin[i] === '1'){
      totDec += Math.pow(2,i)
    }
  }
  decField.value = totDec
}