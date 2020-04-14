import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link,Redirect} from 'react-router-dom';
import Dashboard from './Dashboard';
import Table from './Table';
import Profile from './Profile';
import Settings from './Settings';
import UserManagement from './UserManagement';
import { useState } from 'react';
import fire from '../config/Fire';


function Header() {
  
  let year = new Date();
  let [style,setStyle] = useState("nav-item");
  let [cstyle, csetStyle] = useState("nav-item");
  let [astyle, asetStyle] = useState("nav-item");
  let [rstyle, rsetStyle] = useState("nav-item");
  let [ustyle, usetStyle] = useState("nav-item");
  let [istyle, isetStyle] = useState("nav-item");
  let [title, setTitle] = useState("Customer");
  const set = () =>{
    //const sty = state.style;
    setStyle("nav-item active");
    csetStyle("nav-item");
    asetStyle("nav-item");
    rsetStyle("nav-item");
    usetStyle("nav-item");
    isetStyle("nav-item");
    console.log(style);
  }
  const logout =() =>{
    fire.auth().signOut();
  }
  const menu = () =>{
    //const sty = state.style;
    setStyle("nav-item");
    csetStyle("nav-item");
    asetStyle("nav-item");
    rsetStyle("nav-item");
    usetStyle("nav-item");
    isetStyle("nav-item");
    console.log(style);
  }
  const cset = () =>{
    //const sty = state.style;
    csetStyle("nav-item active");
    setStyle("nav-item");
    asetStyle("nav-item");
    rsetStyle("nav-item");
    usetStyle("nav-item");
    isetStyle("nav-item");
    console.log(style);
  }
  const assess = () =>{
    asetStyle("nav-item active");
    setTitle("Assessments");
    setStyle("nav-item");
    csetStyle("nav-item");
    rsetStyle("nav-item");
    usetStyle("nav-item");
    isetStyle("nav-item");
  }
  const custom = () =>{
    cset();
    setTitle("Customers");
  }
  const repair = () =>{
    rsetStyle("nav-item active");
    setTitle("Repairs");
    setStyle("nav-item");
    csetStyle("nav-item");
    asetStyle("nav-item");
    usetStyle("nav-item");
    isetStyle("nav-item");
  }
  const unlock = () =>{
    usetStyle("nav-item active");
    setTitle("Unlock");
    setStyle("nav-item");
    csetStyle("nav-item");
    asetStyle("nav-item");
    rsetStyle("nav-item");
    isetStyle("nav-item");
  }
  const invent = () =>{
    isetStyle("nav-item active");
    setTitle("Inventory");
    setStyle("nav-item");
    csetStyle("nav-item");
    asetStyle("nav-item");
    rsetStyle("nav-item");
    usetStyle("nav-item");
  }

  return (
    <Router>
    
  <div id="wrapper">

    
    <ul style={{background: "#3b688a"}} class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      
      <a style={{background: "#3b688a"}}class="sidebar-brand d-flex align-items-center justify-content-center" href="">

        <Link to='/dashboard'><img src="../logosm.png" alt="" width="200" heighth="200" onClick={set}/></Link>
      </a>

     
      <hr class="sidebar-divider my-0"/>

      
      <li className={style}>
        <a class="nav-link links" href="">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <Link to='/dashboard'><span style={{color:"white",textDecoration:"none"}} onClick={set}>Dashboard</span></Link></a>
      </li>

     
      <hr class="sidebar-divider"/>

     
      <div class="sidebar-heading">
        Options
      </div>

      <li className={astyle}>
        <a class="nav-link" href="">
          <i class="fas fa-server"></i>
          <Link to='/assessment'><span style={{color:"white",textDecoration:"none"}} onClick={assess}>Assessments</span></Link>
        </a>
      </li>

      <li className={rstyle}>
        <a class="nav-link" href="">
          <i class="fas fa-fw fa-wrench"></i>
          <Link to='/repair'><span style={{color:"white",textDecoration:"none"}} onClick={repair}>Repairs</span></Link>
        </a>
      </li>

      <li className={ustyle}>
        <a class="nav-link" href="">
          <i class="fas fa-unlock"></i>
          <Link to='/unlock'><span style={{color:"white",textDecoration:"none"}} onClick={unlock}>Unlocks</span></Link>
        </a>
      </li>
     
      <li className={istyle}>
        <a class="nav-link" href="">
          <i class="fas fa-barcode"></i>
          <Link to='/inventory'><span style={{color:"white",textDecoration:"none"}} onClick={invent}>Inventory</span></Link>
        </a>
      </li>

      <li className={cstyle}>
      <a class="nav-link" href="">
          <i class="fas fa-fw fa-user"></i>
          <Link to='/customer'><span style={{color:"white",textDecoration:"none"}} onClick={custom}>Customers</span></Link>
            
           
        </a>
      </li>

      
      <hr class="sidebar-divider"/>


    </ul>
    

   
    <div id="content-wrapper" class="d-flex flex-column">

     
      <div id="content">

      
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

        
          <ul class="navbar-nav ml-auto">

            
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
            
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                      <button style={{background:"#3b688a"}}class="btn" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

           
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Administrator</span>
               <i class="far fa-user"></i>
              </a>
             
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  <Link to='/profile'><span onClick={menu}>Profile</span></Link>
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  <Link to='/settings'><span onClick={menu}>Settings</span></Link>
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>

        </nav>
     
          
          <Switch>
          
          <Route path="/customer" render={() => <Table name={title} />}/>
          <Route path="/assessment" render={() => <Table name={title} />}/>
          <Route path="/repair" render={() => <Table name={title} />}/>
          <Route path="/umanage" render={() => <Table/>}/>
          <Route path="/unlock" render={() => <Table name={title} />}/>
          <Route path="/inventory" render={() => <Table name={title} />}/>
          <Route path="/dashboard" render={() => <Dashboard />}/>
          <Route path="/profile" render={() => <Profile  />}/>
          <Route path="/settings" render={() => <Settings  />}/>
          <Route path="/user" render={() => <UserManagement />}/>
          
          </Switch>
        
      </div>
      

      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; SMS Repairs {year.getFullYear()}</span>
          </div>
        </div>
      </footer>
     

    </div>
 

  </div>
  
    <a class="scroll-to-top rounded" href="#wrapper">
      <i class="fas fa-angle-up"></i>
    </a>

    
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="/login" onClick={logout}>Logout</a>
          </div>
        </div>
      </div>
    </div>
  </Router>

  );
}

export default Header;
