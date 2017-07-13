var cc = document.getElementById('card-number');
var btn = document.getElementById('btn');
var visa = document.getElementById('visa');
var ame = document.getElementById('ame');


btn.addEventListener('click', cardnumber);

// if radio = visa then if radio = ae
function cardnumber() {
  var regAME = /^(?:3[47][0-9]{13})$/;
  var regVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;


  if (visa.checked) {
    if (cc.value.match(regVisa)) {
      return true;
    } else {
      alert("Not a valid Visa credit card number!");
    }
  }if (ame.checked) {
    if (cc.value.match(regAME)) {
      return true;
    } else {
      alert("Not a valid American Express credit card number!");
    }
  }
  // console.log("testing", cc.value);
}



// console.log("testing", cc.value);
