import React, {Component} from 'react';

class Card extends Component {

  render () {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Panel title</h5>
          <p className="card-text">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
          <a className="card-link">Card link</a>
          <a className="card-link">Another link</a>
        </div>
      </div>
    );
  }


}

export default Card;
