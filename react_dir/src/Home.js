import React from 'react';
import { Link } from "react-router-dom";
import './css/home.css';


const Home = (props) => {


  return (
    <div>
      <div className="container">
        <div className="row">

          <div className="col">
            <div class="card prez" >
              <Link to={process.env.PUBLIC_URL + '/quoteapp'}>
                <img src={process.env.PUBLIC_URL + '/public/logo192.png'} class="card-img-top" alt="react"/>
              </Link>
              <div class="card-body cbody">
                <h5 class="card-title">React Frontend</h5>
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
                <h5 class="card-title">Node JS backend</h5>
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
                <h5 class="card-title">Découvrir</h5>
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
                <h5 class="card-title">NGINX</h5>
                <p class="card-text">Un Web Server NGINX utilisé comme reverse proxy afin de faire matcher les ports de l'application node.js au port 80</p>
                <a href="https://www.nginx.com/" class="btn btn-primary cbutton">Découvrir</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );


} // close function

export default Home;
