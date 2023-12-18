var currentValue = 0;
var alertShown = false;

function numberGoUp() {
    const counter = document.querySelector('#number');
        currentValue += Math.floor(Math.random() * 2000);
        counter.innerHTML = convertToRoman(currentValue);
        if(currentValue > 10000 && !alertShown) {
          alert(`The mathematicians of Rome would like to extend their sincerest apologies, for they do not have written documentation for numbers above 1000, represented by the letter "M". You might have to chisel a lot more to get a valid phone number.`);
          alertShown = true;
        }
}
function reset(){
    const counter = document.querySelector('#number');
    counter.innerHTML = "";
    currentValue = 0
}

function convertToRoman(num) {
    if (num < 1 || num > 9999999999) {
      return "Number out of range for Roman numeral conversion (1 to 10 billion)";
    }
  
    const romanNumerals = [
      { value: 1000000000, numeral: 'M\u0305' },
      { value: 1000000, numeral: 'M\u0304' }, 
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    let result = '';
  
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
  
    return result;
  }

  function translatedNum() {
  if (currentValue < 1000000000) {
    alert(`The emperor's mathematicians have calculated that this value (${currentValue}) may not be your phone number. Please chisel out some more numerals to properly express your number.`)
  }
  else {
    alert(`Congratulations, Roman citizen. You have chiseled ${currentValue} as your phone number.`)
  };
  }