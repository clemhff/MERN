import React, {useState, useEffect}  from 'react';
import { Link, useLocation } from "react-router-dom";



const Menu = (props) => {

  let location = useLocation();
  let [pathname, setPathname] = useState("");
  let [numero, setNumero] = useState(0);

  let homeActive = null ;
  let quoteAppActive = null ;

  useEffect(
    () => {
      setPathname(location.pathname);
      console.log('path is' + location.pathname);
    }, [location]);

  /*const add = () => {
    setNumero( numero + 1);
  }*/


  if(pathname === process.env.PUBLIC_URL + '' ) {
    homeActive = "nav-item active";
    quoteAppActive = "nav-item";
  }

  if(pathname === process.env.PUBLIC_URL + '/quoteapp' ) {
    homeActive = "nav-item";
    quoteAppActive = "nav-item active";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to={process.env.PUBLIC_URL + ''}>Hoff Website</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={homeActive}>
            <Link className="nav-link" to={process.env.PUBLIC_URL + ''} >Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className={quoteAppActive}>
            <Link className="nav-link" to={process.env.PUBLIC_URL + '/quoteapp'}>Quotes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );

}

export default Menu;
