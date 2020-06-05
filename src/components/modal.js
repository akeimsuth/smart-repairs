import React from 'react'
import axios from 'axios';

class Modal extends React.Component {
    firstRef = React.createRef();
    emailRef = React.createRef();
    chargeRef = React.createRef();
    state = {
        name:'',
        email:'',
        cname:'',
        cprice:'',
        charge:'',
        cselect: '',
        role:''
    }
    add = (event) =>{
        event.preventDefault();
        var num = 0;
        num = this.props.value.length + 1;
        axios.get("/User/"+this.state.name+"/email/"+this.state.email+"/id/"+parseInt(num)).then(res=>{
            //this.setState({parts:res.data})
        console.log("Success")
        window.location.reload(false);
        });
       
    }
    
    charge = (e) =>{
        e.preventDefault();
        axios.get('/Charge/'+this.state.cname+" "+
        this.state.cselect+'/price/'+this.state.cprice+
        '/charge/'+this.state.charge).then(res=>{
        
       // this.chargeRef.reset()
        console.log(this.chargeRef);
        window.location.reload(false);
    })
       
    }
    render () {
        return (
            <>
            <div
            className="modal fade"
            id="UserModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Add New User
                        </h5>
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="user">
                            <div className="form-group row">
                                <div className="col-sm-12 mb-8 mb-sm-0">
                                    <input
                                        type="text"
                                        ref={this.firstRef}
                                        className="form-control"
                                        id="exampleFirstName"
                                        placeholder="First Name"
                                        onChange={(e)=>this.setState({name:e.target.value})}
                                    />
                                </div>
                                {/* <div class="col-sm-6">
                                    <input
                                        type="text"
                                        ref={this.lastRef}
                                        class="form-control"
                                        id="exampleLastName"
                                        placeholder="Last Name"
                                    />
                                </div> */}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    ref={this.emailRef}
                                    onChange={(e)=>this.setState({email:e.target.value})}
                                    id="exampleInputEmail"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">Role</label>
                                <select multiple class="form-control" id="exampleFormControlSelect2"
                                >
                                <option >Administrator</option>
                                <option >Customer Service Representative</option>
                                <option >Technician</option>
                                <option >admin</option>
                                
                                </select>
                            </div>
                            <div className="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input
                                        type="password"
                                        ref={this.passwordRef}
                                        
                                        className="form-control"
                                        id="exampleInputPassword"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleRepeatPassword"
                                        placeholder="Repeat Password"
                                    />
                                </div>
                            </div>
                            <a
                                href="/#"
                                class="btn btn-primary btn-user btn-block"
                                data-dismiss="modal"
                                onClick={this.add}
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
                                <div class="col-sm-12 mb-8 mb-sm-0">
                                    <input
                                        type="text"
                                        ref={this.firstRef}
                                        class="form-control"
                                        id="exampleFirstName"
                                        placeholder="Customer Full Name"
                                    />
                                </div>
                                {/* <div class="col-sm-6">
                                    <input
                                        type="text"
                                        ref={this.lastRef}
                                        class="form-control"
                                        id="exampleLastName"
                                        placeholder="Last Name"
                                    />
                                </div> */}
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    ref={this.emailRef}
                                    id="received"
                                    placeholder="Received By"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    ref={this.emailRef}
                                    id="device"
                                    placeholder="Device"
                                />
                            </div>
                            {/* <div class="form-group">
                                <input
                                    type="email"
                                    class="form-control form-control-user"
                                    id="exampleInputEmail"
                                    placeholder="Role"
                                />
                            </div> */}
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
                                Create Assessment
                            </a>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        {/*Charge Modal*/}
        <div
            class="modal fade"
            id="ChargeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Add New Charge
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
                        <form className="user" ref={this.chargeRef}>
                            <div class="form-group row">
                                <div class="col-sm-12 mb-8 mb-sm-0">
                                    <input
                                        type="text"
                                        onChange={(e)=>this.setState({cname:e.target.value})}
                                        class="form-control"
                                        id="exampleFirstName"
                                        placeholder="Name"
                                    />
                                </div>
                        
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    onChange={(e)=>this.setState({cprice:e.target.value})}
                                    id="comission"
                                    placeholder="Technician Comission"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    onChange={(e)=>this.setState({charge:e.target.value})}
                                    id="charge"
                                    placeholder="Charge to Customer"
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">Level</label>
                                <select multiple class="form-control" id="exampleFormControlSelect2"
                                onClick={(e)=>this.setState({cselect:e.target.value})}>
                                <option >Level 1</option>
                                <option >Level 2</option>
                                <option >(High Tier)</option>
                                <option >(Low Tier)</option>
                                
                                </select>
                            </div>
                            {/* <div class="form-group">
                                <input
                                    type="email"
                                    class="form-control form-control-user"
                                    id="exampleInputEmail"
                                    placeholder="Role"
                                />
                            </div> */}
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
                                onClick={this.charge}
                                data-dismiss="modal"
                            >
                                Create Charge
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
