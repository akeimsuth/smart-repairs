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

function Header() {
    let year = new Date();
    const page = useRef('');
    let [title, setTitle] = useState(page.current);

    const logout = () => {
        fire.auth().signOut();
    };

    const menu = () => {
        page.current = '';
    };

    const dash = () => {
        page.current = 'Dashboard';
    };

    const assess = () => {
        page.current = 'Assessment';
    };

    const custom = () => {
        page.current = 'Customer';
    };
    const repair = () => {
        page.current = 'Repair';
    };
    const unlock = () => {
        console.log('Unlock');
        page.current = 'Unlock';
    };

    const invent = () => {
        console.log('Inventory');
        page.current = 'Inventory';
    };

    /**
     * List item component
     */
    const MenuLink = ({ to, className, onClick, icon, title }) => {
        return (
            <li className={`nav-item`}>
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
                        <img
                            src="../logosm.png"
                            alt=""
                            width="200"
                            heighth="200"
                            onClick={dash}
                        />
                    </Link>
                    <hr className="sidebar-divider my-0" />
                    <MenuLink
                        to={'/dashboard'}
                        onClick={dash}
                        icon="fas fa-fw fa-tachometer-alt"
                        title="Dashboard"
                    />
                    <hr className="sidebar-divider" />
                    <div className="sidebar-heading">Options</div>
                    <MenuLink
                        to={'/assessment'}
                        icon="fas fa-server"
                        title="Assessments"
                    />
                    <MenuLink
                        to={'/Repair'}
                        onClick={dash}
                        icon="fas fa-fw fa-wrench"
                        title="Repair"
                    />
                    <MenuLink to={'/unlock'} icon="fas fa-unlock" title="Unlocks" />
                    <MenuLink to={'/inventory'} icon="fas fa-barcode" title="Inventory" />
                    <MenuLink
                        to={'/customer'}
                        icon="fas fa-fw fa-user"
                        title="Customer"
                    />
                    <hr className="sidebar-divider" />
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
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                            Administrator
                                        </span>
                                        <i className="far fa-user"></i>
                                    </a>

                                    <div
                                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown"
                                    >
                                        <Link to="/profile" className="dropdown-item">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            <span onClick={menu}>Profile</span>
                                        </Link>
                                        <Link className="dropdown-item" to="/settings">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            <span onClick={menu}>Settings</span>
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
                                path="/customer"
                                render={() => {
                                    return <Table name={'Customer'} />;
                                }}
                            />
                            <Route
                                path="/assessment"
                                render={() => {
                                    return <Table name={'Assessment'} />;
                                }}
                            />
                            <Route
                                path="/repair"
                                render={() => {
                                    return <Table name={'Repairs'} />;
                                }}
                            />
                            <Route
                                path="/umanage"
                                render={() => {
                                    return <Table />;
                                }}
                            />
                            <Route
                                path="/unlock"
                                render={() => {
                                    return <Table name={'Unlock'} />;
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
                                    dash();
                                    return <Dashboard />;
                                }}
                            />
                            <Route path="/profile" render={() => <Profile />} />
                            <Route path="/settings" render={() => <Settings />} />
                            <Route path="/user" render={() => <UserManagement />} />
                            <Route render={() => <Redirect to="/dashboard" />} />
                        </Switch>
                    </div>

                    <footer className="sticky-footer bg-white">
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

export default Header;
