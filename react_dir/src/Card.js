import React, {Component} from 'react';
import './css/Card.css';

class Card extends Component {



  displayCard = () => {

    if(this.props.quote_Object.cardState === 'ok') {
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
    } //close if

    else if (this.props.quote_Object.cardState === 'delete') {
      return (
        null
      );//close else if delete
    }

    else if (this.props.quote_Object.cardState === 'modify') {
      return (
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor={'quoteForm'+ this.props.num}>Quote</label>
                <input
                  type="text"
                  className="form-control"
                  id={'quoteForm'+ this.props.num}
                  defaultValue={this.props.quote_Object.quote}
                  placeholder="Enter quote"
                  onChange={(event) => {
                    event.preventDefault();
                    const q = event.target;
                    //console.log(JSON.stringify(q.value));
                    this.props.changeForm(0, q.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor={'quoteForm'+ this.props.num}>Author</label>
                <input
                  type="text"
                  className="form-control"
                  id={'authorForm'+ this.props.num}
                  defaultValue={this.props.quote_Object.author}
                  placeholder="Enter author"
                  onChange={(event) => {
                    event.preventDefault();
                    const a = event.target;
                    //console.log(JSON.stringify(a.value));
                    this.props.changeForm(1, a.value);
                  }}
                />
              </div>
              <button
                className="btn btn-primary btn-modify"
                onClick={(e) => {
                  // Onclick submit form
                  e.preventDefault();
                  e.stopPropagation();
                  this.props.onClickS(this.props.num);
                }}
              >Submit</button>
              <button
                className="btn btn-danger btn-delete"
                onClick={(e) => {
                  // Onclick submit form
                  e.preventDefault();
                  e.stopPropagation();
                  this.props.onClickC(this.props.num);
                }}
              >Cancel</button>
            </form>
          </div>
        </div>
      );
    }////close else if modify

    else {
      return (
        alert('error')
      );
    }//close else error

  }//close displayCard

  render () {
    return (this.displayCard());
  } //close render


}

export default Card;
