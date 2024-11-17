import React from 'react'
import { Link } from 'react-router-dom'

 function Navbar (props) {

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${props.navblack}`} style={{height:'70px', width:'100%'}}>
      <div className="container-fluid">
        <Link className="navbar-brand my-auto" to="/">News Ocean</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${props.navblack} collapse navbar-collapse  w-100`} style={{marginLeft:'-12px', marginRight:'-12px', marginTop:'5px'}} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item m-auto">
              <Link className="nav-link active my-auto" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item m-auto">
              <Link className="nav-link my-auto" to="/">About Us</Link>
            </li>
            <li className="nav-item dropdown m-auto">
              <Link className="nav-link dropdown-toggle my-auto" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item m-auto" onClick={props.theme} to="/business">Business</Link></li>
                <li><Link className="dropdown-item m-auto" onClick={props.theme2} to="/sports">Sports</Link></li>
                <li><Link className="dropdown-item m-auto" onClick={props.theme3} to="/entertainment">Entertainment</Link></li>
                <li><Link className="dropdown-item m-auto" onClick={props.theme4} to="/science">Science</Link></li>
                <li><Link className="dropdown-item m-auto" onClick={props.theme5} to="/technology">Technology</Link></li>
              </ul>
            </li>
          </ul>
          <button style={props.navblack==='navbar-dark bg-dark'?{backgroundColor:'white', color:'black'}:{backgroundColor:'black', color:'white'}} type="button" class="btn btn-outline-dark m-3" onClick={props.darkmode}>{props.navblack==='navbar-dark bg-dark'?"Light Mode":"Dark Mode"}</button>
          <form className="d-flex" role="search">
            <input onChange={props.handlesearch} value={props.searchedvalue} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button style={props.navblack==='navbar-dark bg-dark'?{backgroundColor:'white', color:'black'}:{backgroundColor:'white', color:'black'}} className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
}

export default Navbar
