import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DE, EN, ES, PL } from './translate';

const resources = {
  en: {
    translation: EN,
  },
  de: {
    translation: DE,
  },
  es: {
    translation: ES,
  },
  pl: {
    translation: PL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

// const select = localStorage.getItem('lang');

// const sel = Array.from(document.getElementById('sel1').children);

// sel.map(child, () => {
//   if (child.value === select) {
//     child.selected = true;
//   } else {
//     child.selected = false;
//   }
// });

const joinNow = i18n.t('joinNow');

const discover = i18n.t('discover');

const fullName = i18n.t('fullName');

const lastName = i18n.t('lastName');

const emailAddress = i18n.t('emailAddress');

const phoneNumber = i18n.t('phoneNumber');

const signUp = i18n.t('signUp');

const byRegistering = i18n.t('byRegistering');

const restAssuredSp = i18n.t('restAssuredSpan');

const restAssuredText = i18n.t('restAssuredText');

const netCurrentRevenue = i18n.t('netCurrentRevenue');

const commonProfitsToday = i18n.t('commonProfitsToday');

const hurry = i18n.t('hurry');

const achieveYourFinancialTriumph = i18n.t('achieveYourFinancialTriumph');
const currentRevenue = document.querySelector('.currentRevenue');

const formContentText = document.querySelector('.form-content-text');

const formRegisterText = document.querySelector('.form-register-text');

const userName = document.querySelector('.userName');

const userLastName = document.querySelector('.userLastName');

const email = document.querySelector('.email');

const inputPhone = document.querySelector('.input-phone');

const formRegisterBtn = document.querySelector('.form-register-btn');

const Registering = document.querySelector('.Registering');

const restAssuredTextCn = document.querySelector('.restAssuredText');

const restAssuredSpan = document.querySelector('.restAssuredSpan');

const profitsToday = document.querySelector('.profitsToday');

const hurrySpots = document.querySelector('.hurrySpots');

const yourFinancialTriumph = document.querySelector('.yourFinancialTriumph');

// element value

yourFinancialTriumph.textContent = achieveYourFinancialTriumph;

hurrySpots.textContent = hurry;

profitsToday.textContent = commonProfitsToday;

currentRevenue.textContent = netCurrentRevenue;

restAssuredSpan.textContent = restAssuredSp;

restAssuredTextCn.textContent = restAssuredText;

Registering.textContent = byRegistering;

formContentText.textContent = joinNow;

formRegisterBtn.textContent = signUp;

formRegisterText.textContent = discover;

userName.placeholder = fullName;

userLastName.placeholder = lastName;

email.placeholder = emailAddress;

inputPhone.placeholder = phoneNumber;

document.getElementById('sel1').addEventListener('change', e => {
  const selectedLanguage = e.target.value;

  i18n.changeLanguage(selectedLanguage);

  const joinNow = i18n.t('joinNow');

  const discover = i18n.t('discover');

  const fullName = i18n.t('fullName');

  const lastName = i18n.t('lastName');

  const emailAddress = i18n.t('emailAddress');

  const phoneNumber = i18n.t('phoneNumber');

  const signUp = i18n.t('signUp');

  const byRegistering = i18n.t('byRegistering');

  const restAssuredSp = i18n.t('restAssuredSpan');

  const restAssuredText = i18n.t('restAssuredText');

  const netCurrentRevenue = i18n.t('netCurrentRevenue');

  const commonProfitsToday = i18n.t('commonProfitsToday');

  const hurry = i18n.t('hurry');

  const achieveYourFinancialTriumph = i18n.t('achieveYourFinancialTriumph');

  const currentRevenue = document.querySelector('.currentRevenue');

  const formContentText = document.querySelector('.form-content-text');

  const formRegisterText = document.querySelector('.form-register-text');

  const userName = document.querySelector('.userName');

  const userLastName = document.querySelector('.userLastName');

  const email = document.querySelector('.email');

  const inputPhone = document.querySelector('.input-phone');

  const formRegisterBtn = document.querySelector('.form-register-btn');

  const Registering = document.querySelector('.Registering');

  const restAssuredTextCn = document.querySelector('.restAssuredText');

  const restAssuredSpan = document.querySelector('.restAssuredSpan');

  const profitsToday = document.querySelector('.profitsToday');

  const hurrySpots = document.querySelector('.hurrySpots');

  const yourFinancialTriumph = document.querySelector('.yourFinancialTriumph');

  // element value

  yourFinancialTriumph.textContent = achieveYourFinancialTriumph;

  hurrySpots.textContent = hurry;

  profitsToday.textContent = commonProfitsToday;

  currentRevenue.textContent = netCurrentRevenue;

  restAssuredSpan.textContent = restAssuredSp;

  restAssuredTextCn.textContent = restAssuredText;

  Registering.textContent = byRegistering;

  formContentText.textContent = joinNow;

  formRegisterBtn.textContent = signUp;

  formRegisterText.textContent = discover;

  userName.placeholder = fullName;

  userLastName.placeholder = lastName;

  email.placeholder = emailAddress;

  inputPhone.placeholder = phoneNumber;
});
