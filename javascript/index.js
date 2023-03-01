// declarations

let emailVal = $('#email').val();
let contactNoVal = $('#contact-no').val();
let messageVal = $('#message').val();
let nameVal = $('#name').val();
let patternEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
let patternContactNo = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

const headerHtml = `
<header class="container nav-bar">
  <img class="logo" src="/images/logo.png" alt="logo image" />
  <!-- Desktop -->
  <ul class="nav-items nav">
    <li class="nav-item">
      <a class="nav-item-link" href="/index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-item-link" href="/about.html">About Me</a>
    </li>
    <li class="nav-item">
      <a class="nav-item-link" href="/projects.html">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-item-link" href="/privacy.html">Privacy Policy</a>
    </li>
    <li class="nav-item">
      <a class="nav-item-link" href="/contact.html">Contact</a>
    </li>
  </ul>
  <!-- mobile  -->
  <ul class="nav-items-mobile nav">
    <li class="nav-item">
      <a class="nav-item-link" href="/index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-item-link" href="/about.html">About Me</a>
    </li>
    <li class="nav-item">
      <a class="nav-item-link" href="/projects.html">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-item-link" href="/privacy.html">Privacy Policy</a>
    </li>
    <li class="nav-item">
      <a class="nav-item-link" href="/contact.html">Contact</a>
    </li>
  </ul>
  <div class="nav-buttons">
    <svg class="icon" viewBox="0 0 24 24">
      <path d="M3.8,6.6h16.4" />
      <path d="M20.2,12.1H3.8" />
      <path d="M3.8,17.5h16.4" />
    </svg>
    <div class="close">
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
</header>
`;

const footerHtml = `
      <div class="container">
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 footer-top">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="index.html">
                    <p class="edit-name"></p>
                  </a>
                </div>
                <div class="footer-text">
                  <p class="description"></p>
                </div>
                <div class="footer-social-icon">
                  <span>Follow us</span>
                  <a
                    href="https://www.facebook.com/piyush.kalsariya.963?mibextid=ZbWKwL"
                    target="_blank"
                    ><i class="fab fa-facebook-f fa-lg facebook-bg"></i
                  ></a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/mr.kalsariya492/"
                    ><i class="fab fa-instagram fa-lg insta-bg"></i
                  ></a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/piyush-kalsariya-104a79219/"
                    ><i class="fab fa-linkedin fa-lg linkedin-bg"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30 footer-links">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="/index.html">Home</a></li>
                  <li><a href="/privacy.html">Privacy Policy</a></li>
                  <li><a href="/about.html">About us</a></li>
                  <li><a href="/projects.html">Projects</a></li>
                  <li><a href="/contact.html">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="pb-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span class="address"></span>
                  </div>
                </div>
              </div>
              <div class="pb-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span class="phone-no"></span>
                  </div>
                </div>
              </div>
              <div class="pb-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span class="email"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2018, All Right Reserved
                  <a href="#">Piyush</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

// preloader

$(document).ready(() => {
  $('.header').html(headerHtml);
  $('.footer-section').html(footerHtml);
  $('.loader').delay(2000).fadeOut('slow');
  $('#overlayer').delay(2000).fadeOut('slow');

  // navbar

  const hideNav = () => {
    $('.nav-items-mobile').animate({ height: '0', padding: '0px 20px' });
    $('.icon').css('display', 'block');
    $('.close').css('display', 'none');
    $('body').removeClass('stop-scrolling');
  };

  $('.icon').click(() => {
    $('.nav-items-mobile').animate({ height: '290px', padding: '20px 20px' });
    $('.icon').css('display', 'none');
    $('.close').css('display', 'block');
    $('body').addClass('stop-scrolling');
  });

  $('.close').click(() => {
    hideNav();
  });

  $('.main').click(() => {
    hideNav();
  });

  $('.footer-section').click(() => {
    hideNav();
  });
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
    $('body').addClass('stop-scrolling');
  }
});

$('.btn-cancel').click(() => {
  location.href = './index.html';
});

$('.btn-confirm_model').click(() => {
  location.href = './index.html';
});

$('.model').click(() => {
  $('.model-wrapper').css('display', 'none');
  $('body').removeClass('stop-scrolling');
});

$('.btn-cross_model').click(() => {
  $('.model-wrapper').css('display', 'none');
  $('body').removeClass('stop-scrolling');
});

// document

$(document).ready(function () {
  $.getJSON('Data/header_content.json', (jd) => {
    jd.forEach((item) => {
      $('.contact-content_heading').text(`${item.contact.heading}`);
      $('.contact-content_desc').text(`${item.contact.content}`);
      $('.home-content_heading').text(`${item.home.heading}`);
      $('.content-home_desc').text(`${item.home.content}`);
    });
  });
  $.getJSON('Data/footer.json', (jd) => {
    jd.forEach((item) => {
      $('.edit-name').text(item.title);
      $('.description').text(item.description);
      $('.address').text(item.address);
      $('.email').text(item.email);
      $('.phone-no').text(item.phoneNo);
    });
  });

  $.getJSON('Data/skills.json', (jd) => {
    jd.forEach((item) => {
      $('.skills_container').append(`
      <div class="skill_container">
        <div class="skill">
          <div class="skill_left">
            <img class="skill_img" src=${item.icon} alt="" />
            <h6 class="skill_name">${item.name}</h6>
          </div>
          <div class="down_arrow">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <p class="description_skill">${item.description}</p>
      </div>
      `);
    });
    $('.skill').click(function () {
      $(this)
        .parent('.skill_container')
        .find('.description_skill')
        .slideToggle();
      $(this)
        .parent('.skill_container')
        .prevAll('.skill_container')
        .find('.description_skill')
        .slideUp();
      $(this)
        .parent('.skill_container')
        .nextAll('.skill_container')
        .find('.description_skill')
        .slideUp();
    });
  });

  // about page data
  $.ajax({
    type: 'GET',
    url: '/Data/about.xml',
    dataType: 'xml',
    success: function (xml) {
      $(xml)
        .find('About')
        .each(function () {
          let title = $(this).find('Title').text();
          let desc1 = $(this).find('desc1').text();
          let desc2 = $(this).find('desc2').text();
          let desc3 = $(this).find('desc3').text();
          let desc4 = $(this).find('desc4').text();
          $('.title').append(title);
          $('.desc1').append(desc1);
          $('.desc2').append(desc2);
          $('.desc3').append(desc3);
          $('.desc4').append(desc4);
        });
    },
  });

  // privacy page data
  $.ajax({
    type: 'GET',
    url: '/Data/privacy.xml',
    dataType: 'xml',
    success: function (xml) {
      $(xml)
        .find('Data')
        .each(function () {
          let desc = $(this).find('desc').text();
          $('.privacy').append(`
            <li class="my-2">${desc}</li>
          `);
        });
    },
  });

  //projects data throw ajax

  $.ajax({
    type: 'GET',
    url: '/Data/projects.json',
    dataType: 'json',
    success: function (data) {
      data.forEach((item) => {
        $('.projects').append(`
        <div class="project">
          <div class="porject_overlay_section">
            <img
              class="project_img"
              src=${item.img}
              alt=""
            />
            <div class="overlay_project">
              <p>
                ${item.desc}
              </p>
            </div>
          </div>
        </div>
      `);
      });
    },
  });
});
