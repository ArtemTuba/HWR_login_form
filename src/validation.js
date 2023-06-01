const validationForm = {

  validateEmail: (email) => {
    const regEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;
    if (!email) {
      return 'Введите email';
    } else if (!regEmail.test(email)) {
      return 'Некорректный email';
    } else {
      return '';
    }
  },
  validatePassword: (password) => {
    const regPassword = /^(?=.*[A-Z])(?=.*\d).{6,10}$/;
    if (!password) {
      return 'Введите пароль';
    } else if (!regPassword.test(password)) {
      return 'Минимум 6 символов, включая 1 заглавную букву и 1 цифру';
    } else {
      return '';
    }
  },
  validateFirstname: (firstname) => {
    const regFirstname = /^[a-zA-Z]+$/;
    if (!firstname || firstname.length < 2) {
      return 'Введите имя';
    }  else if (!regFirstname.test(firstname)) {
      return 'Имя введено не корректно';
    } else {
      return '';
    }
  },
  validateLastname: (lastname) => {
    const regLastname = /^[a-zA-Z]+$/;
    if (!lastname || lastname.length < 2) {
      return 'Введите фамилию';
    }  else if (!regLastname.test(lastname)) {
      return 'Фамилия введена не корректно';
    } else {
      return '';
    }
  }
}

export default validationForm;