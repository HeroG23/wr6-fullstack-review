import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser, getUser} from '../redux/reducer';
import axios from "axios"

class Header extends Component {

    componentDidMount(){
        this.props.getUser();
    }
    
    logout = () => {
        axios.post('auth/logout');
        this.props.logoutUser();
    }

    render() {
        return (
            <header>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/feed">Bird Feeder</Link></li>
                    <li><Link to="/create_post">Creat Post</Link></li>
                </ul>
                {this.props.isLoggedIn ?
                <button onClick={this.logout}>Logout</button>
                : null}
            </header>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {logoutUser, getUser})(Header)