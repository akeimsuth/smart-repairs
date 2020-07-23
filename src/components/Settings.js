import React from 'react'
import {Link} from 'react-router-dom';

class Settings extends React.Component {
    render () {
        return (
            <div class="container">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Settings</h1>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Device Model Management</li>
                    <Link to="/part"><li class="list-group-item">Inventory Item Management</li></Link>
                    <Link to="/charge"><li class="list-group-item">Repair Charges Management</li></Link>
                    <li class="list-group-item">Warranty Device Management</li>
                  <Link to="/user">
                      <li class="list-group-item">User Management</li></Link>
                </ul>
            </div>
        )
    }
}

export default Settings
