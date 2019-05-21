import React, {Component} from 'react'
import {
    Redirect
} from 'react-router-dom'

class Login extends Component{
    constructor(){
        super();

        this.state={
            loggedInStatus:false,
            email:'',
            password:''
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){

        if(e.target.name=="email"){
            this.setState({
                email:e.target.value
            })
        }

        if(e.target.name=="password"){
            this.setState({
                password:e.target.value
            })
        }

    }
    
    onSubmit(e){
        e.preventDefault();
        var body=`email=${this.state.email}&password=${this.state.password}`

        fetch('/api/users/login', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
          })
          .then(resp => resp.json())
          .then(user=> { 
            console.log(JSON.stringify(user))
            
            localStorage.setItem("token",user.token)

            this.setState({
                loggedInStatus:true
            })
          })
          .catch((err)=>{
            console.log(JSON.stringify(err))
            alert("Failed to register, Please try again");
          })
    
    }

    render(){
        if(this.state.loggedInStatus==true){
            return(<Redirect to="/"/>)
        }
        return(
            <form className="form-signin" onSubmit={this.onSubmit.bind(this)}>
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" name="email" value={this.state.email} onChange={this.onChange} id="inputEmail" className="form-control" placeholder="Email address"/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.onChange} id="inputPassword" className="form-control" placeholder="Password"/>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </form>
        )
    }
}

export default Login;