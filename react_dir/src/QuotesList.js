import React, {Component} from 'react';
import Card from './Card';

class QuotesList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        cards: [],
        stepNumber: 0,
        xIsNext: true
      };
  }

  componentDidMount() {
      fetch('http://localhost:8080/lastentries')
        .then(response => response.json())
        .then(data => this.setState({ cards : data }));
   }

   createCards() {
     this.state.cards.map((index) => {

       return <Card key={index}/> ;

     })
   }

  render () {
    if(this.state.cards === [] )
      {return 'null'}

    let cardList = this.state.cards.map((el, i) => (
          <Card key={i} id={JSON.stringify(el.author)} />
      ))

    return (
      <div className="title_div">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                {cardList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuotesList;
