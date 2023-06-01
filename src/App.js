import React from "react";
import validationForm from './validation.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      btn: false,
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      emailError: '',
      passwordError: '',
      firstnameError: '',
      lastnameError: '',
    }
  }

  validationError = () => {
    const emailError = validationForm.validateEmail(this.state.email);
    const passwordError = validationForm.validatePassword(this.state.password);
    const firstnameError = validationForm.validateFirstname(this.state.firstname);
    const lastnameError = validationForm.validateLastname(this.state.lastname);
    this.setState({
      emailError,
      passwordError,
      firstnameError,
      lastnameError,
      btn: !emailError && !passwordError && !firstnameError && !lastnameError
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validationError);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Регистрация прошла успешно');
    this.setState({
       btn: false,
       email: '',
       password: '',
       firstname: '',
       lastname: ''
      });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
          <p>{this.state.emailError}</p>
        </div>
        <div>
          <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
          <p>{this.state.passwordError}</p>
        </div>
        <div>
          <input type="text" placeholder="firstname" name="firstname"  value={this.state.firstname} onChange={this.handleInputChange}/>
          <p>{this.state.firstnameError}</p>
        </div>
        <div>
          <input type="text" placeholder="lastname" name="lastname" value={this.state.lastname}  onChange={this.handleInputChange}/>
          <p>{this.state.lastnameError}</p>
        </div>
        <button type="submit" disabled={!this.state.btn}>Отправить</button>
      </form>
    )
  }
}

export default App;
