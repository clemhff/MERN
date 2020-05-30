import React, {Component} from 'react';
import './css/Card.css';

class Card extends Component {

  render () {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.quote_Object.quote}</h5>
          <p className="card-text">{this.props.quote_Object.author}</p>
          <button
            type="button"
            className="btn btn-primary btn-modify"
            onClick={() => {
              // Onclick on "Modify" button
              this.props.onClickM(this.props.num);
            }}
          >Modify</button>
          <button
            type="button"
            className="btn btn-danger btn-delete"
            onClick={() => {
              // Onclick on "Modify" button
              this.props.onClickD(this.props.num);
            }}
          >Delete</button>
        </div>
      </div>
    );
  }


}

export default Card;
