import React from 'react';
import fire from '../config/Fire';
class Profile extends React.Component {
    render() {
        return (
            // <div class="container">
            //     <div class="d-sm-flex align-items-center justify-content-between mb-4">
            //         <h1 class="h3 mb-0 text-gray-800">Profile</h1>
            //     </div>

            //     <div class="row">
            //         <div class="col-md-3 profile-image">
            //             <div class="profile-image-container">
            //                 <img
            //                     src="../avatar1.png"
            //                     class="img-profile rounded-circle"
            //                     alt=""
            //                     width="200"
            //                     height="200"
            //                 />
            //             </div>
            //         </div>
            //     </div>

            //     <div id="main-wrapper">
            //         <div class="row">
            //             <div class="col-md-3 user-profile">
            //                 <h3 class="text-center">Administrator</h3>
            //                 <hr />
            //                 <ul class="list-unstyled text-center">
            //                     <li>
            //                         <p>
            //                             <i class="fa fa-user m-r-xs"></i>
            //                             <a href="#"> Administrator</a>
            //                         </p>
            //                     </li>

            //                     <li>
            //                         <p>
            //                             <i class="fa fa-map-marker m-r-xs"></i> 12 Ruthven
            //                             Road, Kingston
            //                         </p>
            //                     </li>
            //                     <li>
            //                         <p>
            //                             <i class="fa fa-envelope m-r-xs"></i>
            //                             <a href="#"> {fire.auth().currentUser.email}</a>
            //                         </p>
            //                     </li>
            //                     <li>
            //                         <p>
            //                             <i class="fa fa-link m-r-xs"></i>
            //                             <a href="#"></a>
            //                         </p>
            //                     </li>
            //                 </ul>
            //                 <hr />
            //             </div>
            //             <div class="col-md-9 m-t-lg">
            //                 <div class="container">
            //                     <div class="panel-body">
            //                         <div role="tabpanel">
            //                             <ul class="nav nav-tabs" role="tablist">
            //                                 <li class="nav-item">
            //                                     <a
            //                                         id="#tab1"
            //                                         href="#tab1"
            //                                         class="nav-link active"
            //                                         role="tab"
            //                                         data-toggle="tab"
            //                                         aria-controls="tab1"
            //                                         aria-expanded="true"
            //                                         aria-selected="true"
            //                                     >
            //                                         About
            //                                     </a>
            //                                 </li>
            //                                 <li class="nav-item">
            //                                     <a
            //                                         id="#tab2"
            //                                         href="#tab2"
            //                                         class="nav-link"
            //                                         role="tab"
            //                                         data-toggle="tab"
            //                                         aria-controls="tab2"
            //                                         aria-expanded="true"
            //                                         aria-selected="false"
            //                                     >
            //                                         Change Password
            //                                     </a>
            //                                 </li>
            //                             </ul>

            //                             <div class="tab-content">
            //                                 <div
            //                                     role="tabpanel"
            //                                     class="tab-pane fade in show active"
            //                                     id="tab1"
            //                                 >
            //                                     <br />
            //                                     <div class="about-area">
            //                                         <h4>Basic Information</h4>
            //                                         <div class="table-responsive">
            //                                             <table class="table">
            //                                                 <tbody>
            //                                                     <tr>
            //                                                         <th>Full Name</th>
            //                                                         <td>
            //                                                             {
            //                                                                 fire.auth()
            //                                                                     .currentUser
            //                                                                     .displayName
            //                                                             }
            //                                                         </td>
            //                                                     </tr>
            //                                                     <tr>
            //                                                         <th>Phone</th>
            //                                                         <td></td>
            //                                                     </tr>
            //                                                     <tr>
            //                                                         <th>Email</th>
            //                                                         <td>
            //                                                             <a href="#">
            //                                                                 {
            //                                                                     fire.auth()
            //                                                                         .currentUser
            //                                                                         .email
            //                                                                 }
            //                                                             </a>
            //                                                         </td>
            //                                                     </tr>
            //                                                     <tr>
            //                                                         <th>Country</th>
            //                                                         <td>Jamaica</td>
            //                                                     </tr>
            //                                                 </tbody>
            //                                             </table>
            //                                         </div>
            //                                     </div>
            //                                 </div>

            //                                 <div
            //                                     role="tabpanel"
            //                                     class="tab-pane fade"
            //                                     id="tab2"
            //                                 >
            //                                     <div class="panel-body">
            //                                         <form
            //                                             class="form-horizontal"
            //                                             role="form"
            //                                             method="POST"
            //                                             action=""
            //                                         >
            //                                             <div class="form-group">
            //                                                 <label
            //                                                     for="password"
            //                                                     class="col-md-4 control-label"
            //                                                 >
            //                                                     Password
            //                                                 </label>

            //                                                 <div class="col-md-6">
            //                                                     <input
            //                                                         id="password"
            //                                                         type="password"
            //                                                         class="form-control"
            //                                                         name="password"
            //                                                     />

            //                                                     <span class="help-block">
            //                                                         <strong>
            //                                                             Password
            //                                                         </strong>
            //                                                     </span>
            //                                                 </div>
            //                                             </div>

            //                                             <div class="form-group">
            //                                                 <label
            //                                                     for="confirm-password"
            //                                                     class="col-md-4 control-label"
            //                                                 >
            //                                                     Confirm Password
            //                                                 </label>
            //                                                 <div class="col-md-6">
            //                                                     <input
            //                                                         id="confirm-password"
            //                                                         type="password"
            //                                                         class="form-control"
            //                                                         name="confirm-password"
            //                                                     />

            //                                                     <span class="help-block">
            //                                                         <strong>
            //                                                             Confirm Password
            //                                                         </strong>
            //                                                     </span>
            //                                                 </div>
            //                                             </div>

            //                                             <div class="form-group">
            //                                                 <div class="col-md-6 col-md-offset-4">
            //                                                     <button
            //                                                         type="submit"
            //                                                         class="btn btn-primary"
            //                                                     >
            //                                                         <i class="fa fa-btn fa-refresh"></i>{' '}
            //                                                         Update
            //                                                     </button>
            //                                                 </div>
            //                                             </div>
            //                                         </form>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            <div class="container" style={{background:'white'}}>
                 <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Profile</h1>
                 </div>
                <div class="row">
                    <div class="col-4"> 
                        <div class="profile-image-container">
                             <img
                                 src="../avatar1.png"
                                 class="img-profile rounded-circle"
                                alt=""
                                width="200"
                                 height="200"
                             />
                        </div>
                        
                    </div>
                    <div class="col-8">
                        
                            
                            <div class="row">
                                <h5>Akeim Sutherland</h5><span style={{margin:'4px 8px'}} className="text-gray-600 small">
                                <i class="fas fa-map-marker-alt"></i>   Kingston, Jamaica
                                        </span>
                            </div>
                            
                            <span class="mtitle" style={{marginLeft:'-10px'}}>Administrator</span>
                            <br/>
                            <div style={{marginTop:'100px'}}>
                            <div class="row">
                                <div style={{marginLeft:'20px'}}><i class="fa fa-user m-r-xs"></i><span style={{marginLeft:'5px'}}>About</span></div>
                                <div style={{marginLeft:'30px'}}><i class="fas fa-wrench"></i><span style={{marginLeft:'5px'}}>Update</span></div>
                            </div>
                            
                            <div class="ititle"></div>
                            </div>
                            <hr/>
                            <h5 style={{color:'#c5c9c9',fontWeight:'bold'}}class="h5 mb-0 small">CONTACT INFORMATION</h5>
                            <div style={{marginTop:'20px'}}><span>Phone: </span><span class="mtitle" style={{marginLeft:'70px'}}>+18768480010</span></div>
                            <br/>
                            <div style={{marginTop:'20px'}}><span>Address: </span><span class="mtitle" style={{marginLeft:'60px'}}>12 Ruthven Avenue</span></div>
                            <br/>
                            <div style={{marginTop:'20px'}}><span>Email: </span><span class="mtitle" style={{marginLeft:'80px'}}>akeim.sutherland@smsja.net</span></div>
                            
                       
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Profile;
