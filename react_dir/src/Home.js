import React from 'react';
import { Link } from "react-router-dom";
import './css/home.css';


const Home = (props) => {


  return (
    <div>

      <div className="section1">
        <div className="container">
          <div class="row justify-content-center align-items-center section1title">
            <div class="col-md-8 text-center text-shadow">
              <h1><b>Ce site est mon challenge personnel</b></h1>
              <p class="lead mb-3"> Je voulais construire un site web de bout en bout afin d'avoir une vison claire des problématiques de chaque métier.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">

      <div className="container">
        <div class="row justify-content-center align-items-center section2title">
          <div class="col-md-8 text-center text-shadow">
            <h3>Le projet est divisé en 4 parties</h3>
          </div>
        </div>
      </div>


        <div className="container ccontainer">
          <div className="row">

            <div className="col">
              <div class="card prez" >
                <Link to={process.env.PUBLIC_URL + '/quoteapp'}>
                  <img src={process.env.PUBLIC_URL + '/public/logo192.png'} class="card-img-top" alt="react"/>
                </Link>
                <div class="card-body cbody">
                  <h5 class="card-title">Un Frontend React</h5>
                  <p class="card-text">Une UI pour gérer des citations avec des appels à l'API REST </p>
                  <Link to={process.env.PUBLIC_URL + '/quoteapp'} class="btn btn-primary cbutton">Démonstration</Link>
                </div>
              </div>
            </div>


            <div className="col">
              <div class="card prez" >
                <Link to={process.env.PUBLIC_URL + ''}>
                  <img src={process.env.PUBLIC_URL + '/public/node.png'}  class="card-img-top" alt="node"/>
                </Link>
                <div class="card-body cbody">
                  <h5 class="card-title">Un Backend Node JS</h5>
                  <p class="card-text">Un backend en Node.js proposant une API REST et servant les fichiers React à l'utilisateur </p>
                  <Link to={process.env.PUBLIC_URL + ''} class="btn btn-primary cbutton">Documentation</Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card prez" >
                <a href="https://www.mongodb.com/">
                  <img  src={process.env.PUBLIC_URL + '/public/mongodb-logo.png'}  class="card-img-top" alt="MongoDB"/>
                </a>
                <div class="card-body cbody">
                  <h5 class="card-title">Une BDD MongoDB</h5>
                  <p class="card-text">Une base de données MongoDB hébergées sur mlab.com</p>
                  <a href="https://www.mongodb.com/" class="btn btn-primary cbutton">Découvrir</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card prez" >
                <a href="https://www.nginx.com/">
                  <img src={process.env.PUBLIC_URL + '/public/nginxhero.png'}  class="card-img-top" alt="NGINX"/>
                </a>
                <div class="card-body cbody">
                  <h5 class="card-title">Un WebServer NGINX</h5>
                  <p class="card-text">Un Web Server NGINX utilisé comme reverse proxy afin de faire matcher les ports de l'application node.js au port 80</p>
                  <a href="https://www.nginx.com/" class="btn btn-primary cbutton">Découvrir</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <footer class="container footer">
        <div class="row justify-content-center align-items-center footermain">
          <p className="footerp"><a href="#">Back to top </a>&copy; 2020 website made by Clément Hoff <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </div>
      </footer>

    </div>

  );


} // close function

export default Home;
