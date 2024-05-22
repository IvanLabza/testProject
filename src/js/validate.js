import * as Yup from 'yup';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const userName = document.querySelector('.userName');
const userLastName = document.querySelector('.userLastName');
const phone = document.querySelector('.user-phone');
const email = document.querySelector('.email');
const form = document.querySelector('.form-list');

const schema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'min 3 later')
    .max(40, 'max 40 later')
    .matches(/^[A-Za-z]+$/, 'only later')
    .required('required'),
  userLastName: Yup.string()
    .min(3, 'min 3 later')
    .max(40, 'max 40 later')
    .matches(/^[A-Za-z]+$/, 'only later')
    .required('required'),
  phone: Yup.string()
    .matches(/^\d{7,10}$/, 'min 7 max 10 numbers')
    .required('required'),
  email: Yup.string().email('error format email').required('required'),
});

let values = {
  userName: userName.value,
  userLastName: userLastName.value,
  phone: phone.value,
  email: email.value,
};

const validateFnc = (field, value) => {
  if (value === '') {
    iziToast.error({
      title: 'error',
      message: 'required',
      position: 'topCenter',
    });
  } else {
    let obj = {};
    obj[field] = value;
    schema
      .validateAt(field, obj)
      .then(() => {})
      .catch(error => {
        iziToast.error({
          title: 'error',
          message: error.errors[0],
          position: 'topCenter',
        });
      });
  }
};

userName.addEventListener('blur', e => {
  values.userName = e.target.value;
  validateFnc('userName', values.userName);
});
userLastName.addEventListener('blur', e => {
  values.userLastName = e.target.value;
  validateFnc('userLastName', values.userLastName);
});
phone.addEventListener('blur', e => {
  values.phone = e.target.value;
  validateFnc('phone', values.phone);
});
email.addEventListener('blur', e => {
  values.email = e.target.value;
  validateFnc('email', values.email);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  schema.validate(values);
});
