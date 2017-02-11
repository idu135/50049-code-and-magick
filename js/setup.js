'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var setupSave = setup.querySelector('.setup-submit');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var randomColorNumber = function (array) {
  return Math.floor(Math.random() * array.length);
};
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var showSetup = function () {
  setup.classList.remove('invisible');
};

var hideSetup = function () {
  setup.classList.add('invisible');
  setup.setAttribute('role', 'aria-hidden');
};

setupOpen.addEventListener('click', function () {
  showSetup();
  setupSave.addEventListener('click', hideSetup);
  setupSave.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      hideSetup();
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      hideSetup();
      setup.setAttribute('role', 'aria-hidden');
    }
  });
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    showSetup();
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESCAPE_KEY_CODE) {
        hideSetup();
      }
    });
  }
});

setupClose.addEventListener('click', function () {
  hideSetup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    hideSetup();
  }
});

setupUserName.required = true;
setupUserName.maxLength = 50;

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[randomColorNumber(wizardCoatColors)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[randomColorNumber(wizardEyesColors)];
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.background = fireballColors[randomColorNumber(fireballColors)];
});
