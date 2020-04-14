import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import fire from '../config/Fire';
class Login extends React.Component {
   emailRef = React.createRef();
   passwordRef = React.createRef();
    state = {
        email: '',
        password:''
    }
   year = new Date();

   login=(e)=>{
         e.preventDefault();
        console.log(this.emailRef.current.value);
        // this.setState({email:this.emailRef.current.value});
        // this.setState({password:this.passwordRef.current.value});
         fire.auth().signInWithEmailAndPassword(this.emailRef.current.value,this.passwordRef.current.value).then((u)=>{
         }).catch((error)=>{
             console.log(error);
         });
     }
  //    emailChange=(e)=>{
         
  //        this.setState({email:'e.target.value'})
  //        console.log(this.state.email);
  //    }
  //    passwordChange=(e)=>{
  //     //console.log(e.target);
  //     this.setState({password:e.target.value})
  // }

    render () {

        return (
            <Router>
            <div class="container">


    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">
      
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
          
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
              <img src="../bg.jpg" alt="" width="400" height="500"/>
              </div>
              <div class="col-lg-6">
                  
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" >
                    <div class="form-group">
                      <input type="email" ref={this.emailRef} class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                    </div>
                    <div class="form-group">
                      <input type="password"  ref={this.passwordRef} class="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck"/>
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <a class="btn btn-primary btn-user btn-block" href="/" onClick={this.login}>
                      <Link to="/"><span style={{color:"white",textDecoration:"none"}}>Login</span></Link>
                    </a>
                    {/* <hr/> */}
                    {/* <a href="index.html" class="btn btn-google btn-user btn-block">
                      <i class="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                      <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                    </a> */}
                  </form>
                  <hr/>
                  <div class="text-center">
                    <a class="small" href="">Forgot Password?</a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="">Create an Account!</a>
                  </div>
                </div>
                <div class="copyright text-center my-auto">
            <span>Copyright &copy; SMS Repairs {this.year.getFullYear()}</span>
            </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
  </Router>
        )
    }
}

export default Login
