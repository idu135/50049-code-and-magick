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

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
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
