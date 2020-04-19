import React from 'react'

class Modal extends React.Component {
    render () {
        return (
            <>
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

            </div>
        </div>
        {/*Assessment Modal*/}
        <div
            class="modal fade"
            id="AssessmentModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Add New Assessment
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
                            {/* <div class="form-group row">
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
                            </div> */}
                            <a
                                href=""
                                class="btn btn-primary btn-user btn-block"
                                onClick={this.register}
                                data-dismiss="modal"
                            >
                                Register Assessment
                            </a>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        </>
        )
    }
}

export default Modal
