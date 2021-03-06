import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/registration', state: 'registrationMenuOpen'},
      {path:'/depository', state:'depositoryMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../assets/images/logo.svg")} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../assets/images/logo-mini.svg" )} alt="logo" /></a>
        </div>
        <ul className="nav">

          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          
          <li className={ this.isPathActive('/registration') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.registrationMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('registrationMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-folder-plus menu-icon"></i>
              <span className="menu-title">Dataset Registry</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.registrationMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/registration/search-registry') ? 'nav-link active' : 'nav-link' } to="/registration/search-registry">Search</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/registration/register-dataset') ? 'nav-link active' : 'nav-link' } to="/registration/register-dataset">Register</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/registration/dataset-correction') ? 'nav-link active' : 'nav-link' } to="/registration/dataset-correction">Correction</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/registration/schema-update') ? 'nav-link active' : 'nav-link' } to="/registration/schema-update">Update Schema</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/registration/cancel-dataset') ? 'nav-link active' : 'nav-link' } to="/registration/cancel-dataset">Cancel Registry</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/registration/manage-polling-dataset') ? 'nav-link active' : 'nav-link' } to="/registration/manage-polling-dataset">Manage Polling</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/depository') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.depositoryMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('depositoryMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-folder-multiple menu-icon"></i>
              <span className="menu-title">Dataset Depository</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.depositoryMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/depository/ad-hoc') ? 'nav-link active' : 'nav-link' } to="/depository/ad-hoc">Ad-Hoc</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/depository/create-subscription') ? 'nav-link active' : 'nav-link' } to="/depository/create-subscription">Create</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/depository/update-subscription') ? 'nav-link active' : 'nav-link' } to="/depository/update-subscription">Update</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/depository/delete-subscription') ? 'nav-link active' : 'nav-link' } to="/depository/delete-subscription">Delete</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/depository/dataset-data-profile') ? 'nav-link active' : 'nav-link' } to="/depository/dataset-data-profile">Data Profiles</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/depository/dataset-data-quality') ? 'nav-link active' : 'nav-link' } to="/depository/dataset-data-quality">Data Quality</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">Basic UI Elements</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons">Buttons</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns">Dropdowns</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography">Typography</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/form-elements/basic-elements">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">Form Elements</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/tables/basic-table">
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">Tables</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/charts/chart-js">
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title">Charts</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/user-pages/blank-page">Blank Page</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1">Login</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1">Register</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/user-pages/error-404">404</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/user-pages/error-500">500</Link></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);