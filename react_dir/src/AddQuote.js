import React, {Component} from 'react';
import './css/AddQuote.css';

class AddQuote extends Component {

  quoteCard = () => {
    if (this.props.addQuote === false) {
      return (
        <div className="card cardq">
          <div className="card-body">
            <button
              className="btn btn-primary btn-modify"
              onClick={(e) => {
                // Onclick submit form
                e.preventDefault();
                e.stopPropagation();
                this.props.onClickAdd();
              }}
            >Add a quote</button>
          </div>
        </div>
      )
    }
    else if (this.props.addQuote === true) {
      return (
        <div className="card cardq">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor={'quoteFormAddQuote'}>Quote</label>
                <input
                  type="text"
                  className="form-control"
                  id={'quoteFormAddQuote'}
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
                <label htmlFor={'authorFormaddQuote'}>Author</label>
                <input
                  type="text"
                  className="form-control"
                  id={'authorFormaddQuote'}

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
                  this.props.onClickS();
                }}
              >Submit</button>
              <button
                className="btn btn-danger btn-delete"
                onClick={(e) => {
                  // Onclick submit form
                  e.preventDefault();
                  e.stopPropagation();
                  this.props.onClickC();
                }}
              >Cancel</button>
            </form>
          </div>
        </div>
      );
    }

  }

  render () {
    return (this.quoteCard());
  } //close render

}// close class

export default AddQuote;
