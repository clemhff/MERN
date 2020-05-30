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
        .then(data => {
          var dataState = data.map( x => {
            x.cardState = 'ok'; // ok modify delete
            return x
          })
          //console.log(JSON.stringify(data));
          return data; //dataState;

        })
        .then(data => this.setState({ cards : data }))

        ;
   }

   createCards() {
     this.state.cards.map((index) => {

       return <Card key={index}/> ;

     })
   }

   modifyCard = (i) => {
     const temp = this.state.cards.slice();
     temp[i].cardState ='modify';
     console.log(JSON.stringify(temp[i].cardState));
     this.setState({ cards: temp });

     return ;
   }

   deleteCard = (i) => {
     const temp = this.state.cards.slice();
     temp[i].cardState ='delete';
     console.log(JSON.stringify(temp[i].cardState));
     this.setState({ cards: temp });

     return ;
   }

  render () {
    if(this.state.cards === [] )
      {return 'null'}

    let cardList = this.state.cards.map((el, i) => (
          <Card
            key={i}
            num={i}
            quote_Object={this.state.cards[i]}
            onClickM={(i) => this.modifyCard(i)}
            onClickD={(i) => this.deleteCard(i)}
          />
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
