import React,{Component} from 'react';
import InputField from './InputFile';


class FormExample extends Component{

clickMe = (values)=>{
    values.preventDefault();

    const user = values.target.username.value;
    const pass = values.target.password.value;

    if(user === 'rehan19' && pass === '12345'){
        alert("Login Success");
    }
    else{
        alert("Login Failed");
    }
}

render(){
    return (
        <form onSubmit={this.clickMe}> 
        <InputField name='username' placeholder={'user'} type={'text'} />
        <br/>
        <InputField name='password' placeholder={'password'} type={'passwords'} />
       <br/>
            <button type="submit">Click Me</button>
        </form>
    )
}

}

export default FormExample;