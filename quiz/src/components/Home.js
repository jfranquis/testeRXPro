import React, { Fragment } from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

const Home = () => (
  <Fragment>
    <Helmet><title>RX Quiz</title></Helmet>
     <div id="home">
          <section>
            <div>
                
            </div>
                <h1> RX Quiz</h1>
                <div className="play-button-container">
                  <ul>

                    <li><Link className="play-button" to ="/play/instructions">Play</Link></li> 
                  </ul>         
                </div>
                <div className="auth-container">
                  <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                  <Link to="/cadastro" className="auth-buttons" id="cadastro-button">Cadastre-se</Link>
                </div>
          </section>
    </div>
  </Fragment>
  ); 

export default Home;
