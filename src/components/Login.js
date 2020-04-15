import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from 'react-router-dom';
import fire from '../config/Fire';
import Alert from 'react-bootstrap/Alert';
class Login extends React.Component {
    emailRef = React.createRef();
    passwordRef = React.createRef();

    state = {
        show: false,
        error: '',
    };
    year = new Date();

    login = (e) => {
        e.preventDefault();

        console.log(this.emailRef.current.value);
        // this.setState({email:this.emailRef.current.value});
        // this.setState({password:this.passwordRef.current.value});
        fire.auth()
            .signInWithEmailAndPassword(
                this.emailRef.current.value,
                this.passwordRef.current.value
            )
            .then((u) => {
                let history = useHistory();
                history.push('/dashboard');
            })
            .catch((err) => {
                this.setState({ show: true, error: err.message });
                console.log(err);
            });
        console.log(this.state.error);
    };
    //    emailChange=(e)=>{

    //        this.setState({email:'e.target.value'})
    //        console.log(this.state.email);
    //    }
    //    passwordChange=(e)=>{
    //     //console.log(e.target);
    //     this.setState({password:e.target.value})
    // }

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block">
                                            <img
                                                src="../bg.jpg"
                                                alt=""
                                                width="400"
                                                height="500"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">
                                                        Welcome Back!
                                                    </h1>
                                                </div>
                                                <form className="user">
                                                    <Alert
                                                        show={this.state.show}
                                                        variant="danger"
                                                    >
                                                        <p>{this.state.error}</p>
                                                    </Alert>
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            ref={this.emailRef}
                                                            className="form-control form-control-user"
                                                            id="exampleInputEmail"
                                                            aria-describedby="emailHelp"
                                                            placeholder="Enter Email Address..."
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            ref={this.passwordRef}
                                                            className="form-control form-control-user"
                                                            id="exampleInputPassword"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customCheck"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                for="customCheck"
                                                            >
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <a
                                                        className="btn btn-primary btn-user btn-block"
                                                        href="/"
                                                        onClick={this.login}
                                                    >
                                                        <Link to="/">
                                                            <span
                                                                style={{
                                                                    color: 'white',
                                                                    textDecoration:
                                                                        'none',
                                                                }}
                                                            >
                                                                Login
                                                            </span>
                                                        </Link>
                                                    </a>

                                                    {/* <hr/> */}
                                                    {/* <a href="index.html" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                    </a> */}
                                                </form>
                                                <hr />
                                                <div className="text-center">
                                                    <a className="small" href="">
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                                <div className="text-center">
                                                    <a className="small" href="">
                                                        Create an Account!
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="copyright text-center my-auto">
                                                <span>
                                                    Copyright &copy; SMS Repairs{' '}
                                                    {this.year.getFullYear()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Login;
