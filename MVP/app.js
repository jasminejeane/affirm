var form = document.getElementsByTagName('form')[0];
var cc = document.getElementById('card-number');
var cvv = document.getElementById('cvv');
var btn = document.getElementById('btn');
var visa = document.getElementById('visa');
var ame = document.getElementById('ame');
var message = document.getElementById('submit-alert');
var holderName = document.getElementById('card-holder-name');
var cardAlert = document.getElementById('card-alert');


btn.addEventListener('click', function() {
  cardnumber();
  validateForm();
});

cc.addEventListener('mousedown', radioCheck);
visa.addEventListener('mousedown', radioCheck);
ame.addEventListener('mousedown', radioCheck);


function radioCheck() {
  if (!visa.checked && !ame.checked) {
    cardAlert.classList.add('warning');
    cardAlert.innerHTML = "Please check Visa or American Express";
  }

  if (visa.checked || ame.checked) {
    cardAlert.innerHTML = "";
  }
}

function cardnumber() {
  var regAME = /^(?:3[47][0-9]{13})$/;
  var regVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if (visa.checked) {
    if (cc.value.match(regVisa)) {
      return true;
    } else {
      message.classList.add('warning');
      message.innerHTML = "Not a valid Visa credit card number";
    }
  }
  if (ame.checked) {
    if (cc.value.match(regAME)) {
      return true;
    } else {
      message.classList.add('warning');
      message.innerHTML = "Not a valid American Express credit card number";
    }
  }
}

function validateForm() {
  holderName.value
  if (holderName.value == "" || cc.value == "" || cvv.value) {
    message.classList.add('warning');
    message.innerHTML = "Please fill out empty fields";
  }
}




// $('#cc_form').bootstrapValidator({
//     feedbackIcons: {
//         valid: 'glyphicon glyphicon-ok',
//         invalid: 'glyphicon glyphicon-remove',
//         validating: 'glyphicon glyphicon-refresh'
//     },
//     fields: {
//         card_holder_name: {
//             validators: {
//                     stringLength: {
//                     min: 2,
//                 },
//                     notEmpty: {
//                     message: 'Please supply your first name'
//                 }
//             }
//         },
//         phone: {
//             validators: {
//                 notEmpty: {
//                     message: 'Please supply your phone number'
//                 },
//                 phone: {
//                     country: 'US',
//                     message: 'Please supply a vaild phone number with area code'
//                   }
//               }
//           }
//         }
//     })
//     .on('success.form.bv', function(e) {
//         $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
//             $('#cc_form').data('bootstrapValidator').resetForm();
//
//         // Prevent form submission
//         e.preventDefault();
//
//         // Get the form instance
//         var $form = $(e.target);
//
//         // Get the BootstrapValidator instance
//         var bv = $form.data('bootstrapValidator');
//
//         // Use Ajax to submit form data
//         $.post($form.attr('action'), $form.serialize(), function(result) {
//             console.log(result);
//         }, 'json');
//     });
