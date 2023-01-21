// declarations

let emailVal = $('#email').val();
let contactNoVal = $('#contact-no').val();
let messageVal = $('#message').val();
let nameVal = $('#name').val();
let patternEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
let patternContactNo = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

// navbar

const hideNav = () => {
  $('.nav-items-mobile').animate({ height: '0', padding: '0px 20px' });
  $('.icon').css('display', 'block');
  $('.close').css('display', 'none');
};

$('.icon').click(() => {
  $('.nav-items-mobile').animate({ height: '290px', padding: '20px 20px' });
  $('.icon').css('display', 'none');
  $('.close').css('display', 'block');
});

$('.close').click(() => {
  hideNav();
});

$('.main').click(() => {
  hideNav();
});

$('.footer').click(() => {
  hideNav();
});

// contact page

// form validations

const validationRequired = (value, [class1, class2]) => {
  if (value.length < 1) {
    $(class1).addClass('error');
    $(class2).addClass(['label-error', 'shake']);
  } else {
    $(class1).removeClass('error');
    $(class2).removeClass(['label-error', 'shake']);
  }
};

//get values

$('.input-name').change((e) => {
  nameVal = e.target.value;
  validationRequired(nameVal, ['.input-name', '.label-name']);
});

$('.input-email').change((e) => {
  emailVal = e.target.value;
  if (emailVal.length < 1 || !patternEmail.test(emailVal)) {
    $('.input-email').addClass('error');
    $('.label-email').addClass(['label-error', 'shake']);
  } else {
    $('.input-email').removeClass('error');
    $('.label-email').removeClass(['label-error', 'shake']);
  }
});

$('.input-contact').change((e) => {
  contactNoVal = e.target.value;
  if (contactNoVal.length < 1 || !patternContactNo.test(contactNoVal)) {
    $('.input-contact').addClass('error');
    $('.label-contact').addClass(['label-error', 'shake']);
  } else {
    $('.input-contact').removeClass('error');
    $('.label-contact').removeClass(['label-error', 'shake']);
  }
});
$('.input-message').change((e) => {
  messageVal = e.target.value;
});

$('#contact-form').submit((event) => {
  event.preventDefault();
  validationRequired(nameVal, ['.input-name', '.label-name']);
  validationRequired(emailVal, ['.input-email', '.label-email']);
  validationRequired(contactNoVal, ['.input-contact', '.label-contact']);
  const contactFormData = {
    name: nameVal,
    email: emailVal,
    contact: contactNoVal,
    message: messageVal,
  };
  if (
    nameVal &&
    emailVal &&
    contactNoVal &&
    patternEmail.test(emailVal) &&
    patternContactNo.test(contactNoVal)
  ) {
    $('.model-wrapper').css('display', 'block');
  }
  console.log('>>>>>> ', contactFormData);
});

$('.btn-cancel').click(() => {
  location.href = './index.html';
});

$('.btn-confirm_model').click(() => {
  location.href = './index.html';
});

$('.model').click(() => {
  $('.model-wrapper').css('display', 'none');
});

$('.btn-cross_model').click(() => {
  $('.model-wrapper').css('display', 'none');
});

// document

$(document).ready(function () {
  $.getJSON('Data/contact_content.json', (jd) => {
    jd.forEach((item) => {
      $('#stage').append(`<li>${item.content}</li>`);
    });
  });
});
