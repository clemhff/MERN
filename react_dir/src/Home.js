import React from 'react';
import { Link } from "react-router-dom";
import './css/home.css';


const Home = (props) => {


  return (
    <div>

      <div className="section1">
        <div className="container">
          <div className="row justify-content-center align-items-center section1title">
            <div className="col-md-8 text-center text-shadow">
              <h1><b>Ce site est mon challenge personnel</b></h1>
              <p className="lead mb-3"> Je voulais construire un site web de bout en bout afin d'avoir une vison claire des problématiques de chaque métier.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">

      <div className="container">
        <div className="row justify-content-center align-items-center section2title">
          <div className="col-md-8 text-center text-shadow">
            <h3>Le projet est divisé en 4 parties</h3>
          </div>
        </div>
      </div>


        <div className="container ccontainer">
          <div className="row">

            <div className="col">
              <div className="card prez" >
                <Link to={process.env.PUBLIC_URL + '/quoteapp'}>
                  <img src={process.env.PUBLIC_URL + '/public/logo192.png'} className="card-img-top" alt="react"/>
                </Link>
                <div className="card-body cbody">
                  <h5 className="card-title">Un Frontend React</h5>
                  <p className="card-text">Une UI pour gérer des citations avec des appels à l'API REST </p>
                  <Link to={process.env.PUBLIC_URL + '/quoteapp'} className="btn btn-primary cbutton">Démonstration</Link>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card prez" >
                <Link to={process.env.PUBLIC_URL + ''}>
                  <img src={process.env.PUBLIC_URL + '/public/node.png'}  className="card-img-top" alt="node"/>
                </Link>
                <div className="card-body cbody">
                  <h5 className="card-title">Un Backend Node JS</h5>
                  <p className="card-text">Un backend en Node.js proposant une API REST et servant les fichiers React à l'utilisateur </p>
                  <Link to={process.env.PUBLIC_URL + ''} className="btn btn-primary cbutton">Documentation</Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card prez" >
                <a href="https://www.mongodb.com/">
                  <img  src={process.env.PUBLIC_URL + '/public/mongodb-logo.png'}  className="card-img-top" alt="MongoDB"/>
                </a>
                <div className="card-body cbody">
                  <h5 className="card-title">Une BDD MongoDB</h5>
                  <p className="card-text">Une base de données MongoDB hébergées sur mlab.com</p>
                  <a href="https://www.mongodb.com/" className="btn btn-primary cbutton">Découvrir</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card prez" >
                <a href="https://www.nginx.com/">
                  <img src={process.env.PUBLIC_URL + '/public/nginxhero.png'}  className="card-img-top" alt="NGINX"/>
                </a>
                <div className="card-body cbody">
                  <h5 className="card-title">Un WebServer NGINX</h5>
                  <p className="card-text">Un Web Server NGINX utilisé comme reverse proxy afin de faire matcher les ports de l'application node.js au port 80</p>
                  <a href="https://www.nginx.com/" className="btn btn-primary cbutton">Découvrir</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <footer className="container footer">
        <div className="row justify-content-center align-items-center footermain">
          <p className="footerp"><a href="#">Back to top </a>&copy; 2020 website made by Clément Hoff <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </div>
      </footer>

    </div>

  );


} // close function

export default Home;
