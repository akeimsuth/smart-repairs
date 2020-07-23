import React from 'react';
import fire from '../config/Fire';
import Alert from 'react-bootstrap/Alert';
import Table from './Table';
class UserManagement extends React.Component {
    emailRef = React.createRef();
    passwordRef = React.createRef();
    firstRef = React.createRef();
    lastRef = React.createRef();
    state = {
        show: false,
    };
    register = (e) => {
        e.preventDefault();
        this.setState({ show: true });
        fire.auth()
            .createUserWithEmailAndPassword(
                this.emailRef.current.value,
                this.passwordRef.current.value
            )
            .then((u) => {
                return u.updateProfile({
                    displayName:
                        this.firstRef.current.value + ' ' + this.lastRef.current.value,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        return (
            <div class="container">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    {/* <h1 class="h3 mb-0 text-gray-800">User Management</h1> */}
                    {/* <button
                    class="btn btn-primary"
                    href="#"
                    data-toggle="modal"
                    data-target="#userModal"
                >
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Add User
                </button> */}
                </div>
                
                <Alert show={this.state.show} variant="success">
                    <p>User added successfully</p>
                </Alert>
                
                <Table name={'User'}/>

                <div
                    class="modal fade"
                    id="userModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    Add New User
                                </h5>
                                <button
                                    class="close"
                                    type="button"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form class="user">
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                ref={this.firstRef}
                                                class="form-control form-control-user"
                                                id="exampleFirstName"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div class="col-sm-6">
                                            <input
                                                type="text"
                                                ref={this.lastRef}
                                                class="form-control form-control-user"
                                                id="exampleLastName"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="email"
                                            class="form-control form-control-user"
                                            ref={this.emailRef}
                                            id="exampleInputEmail"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="email"
                                            class="form-control form-control-user"
                                            id="exampleInputEmail"
                                            placeholder="Role"
                                        />
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="password"
                                                ref={this.passwordRef}
                                                class="form-control form-control-user"
                                                id="exampleInputPassword"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div class="col-sm-6">
                                            <input
                                                type="password"
                                                class="form-control form-control-user"
                                                id="exampleRepeatPassword"
                                                placeholder="Repeat Password"
                                            />
                                        </div>
                                    </div>
                                    <a
                                        href=""
                                        class="btn btn-primary btn-user btn-block"
                                        onClick={this.register}
                                        data-dismiss="modal"
                                    >
                                        Register New User
                                    </a>
                                </form>
                            </div>
                        </div>
                        {/* <div class="modal-footer">
      <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
      <a class="btn btn-primary" href="/login" onClick={logout}>Logout</a>
    </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default UserManagement;
