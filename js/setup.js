'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
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

var pressEnter = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var pressEscape = function (evt) {
  return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
};

var showSetup = function () {
  setup.classList.remove('invisible');
};

var hideSetup = function () {
  setup.classList.add('invisible');
};

setupOpen.addEventListener('click', function () {
  showSetup();
});

setupClose.addEventListener('click', function () {
  hideSetup();
});

setupOpen.addEventListener('keydown', function () {
  if (pressEnter) {
    showSetup();
    document.addEventListener('keydown', function () {
      if (pressEscape) {
        hideSetup();
      }
      setupClose.addEventListener('keydown', function () {
        if (pressEnter) {
          hideSetup();
        }
      });
    });
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
