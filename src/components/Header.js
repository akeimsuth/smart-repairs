import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    matchPath,
    NavLink,
    useLocation,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Table from './Table';
import Profile from './Profile';
import Settings from './Settings';
import UserManagement from './UserManagement';
import fire from '../config/Fire';
import './Header.css';
import axios from 'axios';

class Header extends React.Component {
    state = {
        record:[],
        values:[],
        repair:[],
        main:[],
        keys:[],
        assessments:[],
        users:[],
        akeys:[],
        ukeys:[],
        unlock:[],
        user:[],
        charges:[],
        parts:[]
    }
    componentDidMount(){
        
        axios.get("/users").then(res=>{
            this.setState({user:res.data})
            //console.log(res.data)
        });
        axios.get("/customers").then(res=>{
            this.setState({record:res.data})
            //console.log(res.data)
        });
        axios.get("/assessments").then(res=>{
            this.setState({assessments:res.data})
            //console.log(res.data)
        });
        axios.get("/repair").then(res=>{
            this.setState({repair:res.data})
            //console.log(res.data)
        });
        axios.get("/unlocks").then(res=>{
            this.setState({unlock:res.data})
            //console.log(res.data)
        });
    
        axios.get("/charges").then(res=>{
            this.setState({charges:res.data})
            //console.log(res.data)
        });
        axios.get("/parts").then(res=>{
            
            this.setState({parts:res.data})
            //console.log(res.data)
        });
    }
    render(){
    const year = new Date();
    const logout = () => {
        fire.auth().signOut();
    };

    /**
     * List item component
     */
    const MenuLink = ({ to, className, onClick, icon, title }) => {
        return (
            <li className={`nav-item`} style={{marginBottom:'-5px'}}>
                <NavLink className="nav-link links" activeClassName="active-link" to={to}>
                    <i className={icon}></i>
                    <span className="styled-span">{title}</span>
                </NavLink>
            </li>
        );
    };

    return (
        <Router>
            <div id="wrapper">
                <ul
                    style={{ background: '#3b688a' }}
                    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                    id="accordionSidebar"
                >
                    <Link
                        to="/dashboard"
                        style={{ backgroundColor: '3b688a' }}
                        className="sidebar-brand d-flex align-items-center justify-content-center"
                    >
                        <img src="../logosm.png" alt="" width="150" heighth="150" />
                    </Link>
                    <hr className="sidebar-divider my-0" />
                    <MenuLink
                        to={'/dashboard'}
                        icon="fas fa-fw fa-tachometer-alt"
                        title="Dashboard"
                    />
                    <hr className="sidebar-divider" />
                    <MenuLink
                        to={'/assessments'}
                        icon="fas fa-server"
                        title="Assessments"
                    />
                    <MenuLink to={'/repair'} icon="fas fa-fw fa-wrench" title="Repair" />
                    <MenuLink to={'/unlocks'} icon="fas fa-unlock" title="Unlocks" />
                    {/* <MenuLink to={'/inventory'} icon="fas fa-barcode" title="Inventory" /> */}
                    <MenuLink
                        to={'/customers'}
                        icon="fas fa-fw fa-user"
                        title="Customer"
                    />
                    <hr style={{marginTop:'15px'}}className="sidebar-divider" />
                </ul>

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button
                                id="sidebarToggleTop"
                                className="btn btn-link d-md-none rounded-circle mr-3"
                            >
                                <i className="fa fa-bars"></i>
                            </button>

                            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control bg-light border-0 small"
                                        placeholder="Search for..."
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="searchDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>

                                    <div
                                        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown"
                                    >
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control bg-light border-0 small"
                                                    placeholder="Search for..."
                                                    aria-label="Search"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        style={{ background: '#3b688a' }}
                                                        className="btn"
                                                        type="button"
                                                    >
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                <div className="topbar-divider d-none d-sm-block"></div>

                                <li className="nav-item dropdown no-arrow">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="userDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i style={{marginRight:'5px'}}className="far fa-user">   </i>
                                        <span className="mr-2 d-none d-lg-inline text-gray-600">
                                             Administrator
                                        </span> 
                                         <i style={{marginTop:'5px'}}class="fas fa-chevron-down"></i>
                                          
                                        
                                    </a>

                                    <div
                                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown"
                                    >
                                        <Link to="/profile" className="dropdown-item">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            <span>Profile</span>
                                        </Link>
                                        <Link className="dropdown-item" to="/settings">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            <span>Settings</span>
                                        </Link>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#logoutModal"
                                        >
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route
                                path="/customers"
                                render={() => {
                                    return <Table name={'Customer'} customer={this.state.record} />;
                                }}
                            />
                            <Route
                                path="/assessments"
                                render={() => {
                                    return <Table name={'Assessment'} assessment={this.state.assessments} />;
                                }}
                            />
                            <Route
                                path="/repair"
                                render={() => {
                                    return <Table name={'Repairs'} repair={this.state.repair}/>;
                                }}
                            />
                            <Route
                                path="/umanage"
                                render={() => {
                                    return <Table />;
                                }}
                            />
                            <Route
                                path="/unlocks"
                                render={() => {
                                    return <Table name={'Unlock'} unlock={this.state.unlock}/>;
                                }}
                            />
                            <Route
                                path="/inventory"
                                render={() => {
                                    return <Table name={'Inventory'} />;
                                }}
                            />
                            <Route
                                path="/dashboard"
                                render={() => {
                                    return <Dashboard />;
                                }}
                            />
                            <Route path="/profile" render={() => <Profile />} />
                            <Route path="/settings" render={() => <Settings />} />
                            <Route path="/users" render={() => <Table name={'User'} user={this.state.user} />} />
                            <Route path="/charges"  render={() => {
                                    return <Table name={'Charge'} charge={this.state.charges}/>;
                                }} />
                                <Route path="/parts"  render={() => {
                                    return <Table name={'Part'} part={this.state.parts}/>;
                                }} />
                            <Route render={() => <Redirect to="/dashboard" />} />
                        </Switch>
                    </div>

                    <footer style={{marginTop:'20px'}}className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>
                                    Copyright &copy; SMS Repairs {year.getFullYear()}
                                </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            <a className="scroll-to-top rounded" href="#wrapper">
                <i className="fas fa-angle-up"></i>
            </a>

            <div
                className="modal fade"
                id="logoutModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Ready to Leave?
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
                            Select "Logout" below if you are ready to end your current
                            session.
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <a className="btn btn-primary" href="/login" onClick={logout}>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
  }
}

export default Header;
