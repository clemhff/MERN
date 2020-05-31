import React, {Component} from 'react';
import Card from './Card';
import AddQuote from './AddQuote';

class QuotesList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        cards: [],
        formInput: [],
        formState: false,
        addQuote : false
      };
  }

  //API call
  componentDidMount() {
      fetch(process.env.REACT_APP_API_URL + '/lastentries')
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

   //Créer les cards
   createCards() {
     this.state.cards.map((index) => {

       return <Card key={index}/> ;

     })
   }

   //Supprimer l'affichage de la card
   modifyCard = (i) => {
     const temp = this.state.cards.slice();
     temp.map( (x) => {
       if (x.cardState === 'modify'){
         x.cardState ='ok'
       }
       return x ;
     });
     temp[i].cardState ='modify';
     console.log(JSON.stringify(temp[i].cardState));
     this.setState({ cards: temp, formInput: [], formState: false, addQuote : false });

     return ;
   }

   //Supprimer la card
   deleteCard = (i) => {
     const temp = this.state.cards.slice();
     temp[i].cardState ='delete';
     console.log(JSON.stringify(temp[i].cardState));
     //this.setState({ cards: temp });
     fetch(process.env.REACT_APP_API_URL + '/quote/' +  temp[i]["_id"] , {method: 'DELETE'})
     .then( () => this.setState({ cards: temp }) ) ;

     return ;
   }

   //fonstion qui prend les valeurs de formInput et qui l'insert dans cards props
   submitForm = (i) => {
     console.log('submitting ' + i);

     if(this.state.formState){
       const temp = this.state.cards.slice();
       temp[i].cardState ='ok';
       if (this.state.formInput[1] != null && this.state.formInput[1] != ""){
         temp[i].author = this.state.formInput[1];
       }
       if (this.state.formInput[0] != null && this.state.formInput[0] != ""){
         temp[i].quote = this.state.formInput[0];
       }
       const obj = {
           'quote' : temp[i].quote,
           'author' : temp[i].author }

       fetch(process.env.REACT_APP_API_URL + '/quote/' + temp[i]["_id"] , {
         method: 'PUT',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(obj)
       })
        //mettre un contrôle erreur API
        .then (() => this.setState({ cards: temp, formInput: [], formState: false, addQuote : false }));


     }
     else {
       const temp = this.state.cards.slice();
       temp[i].cardState ='ok';
       console.log(JSON.stringify(temp[i].cardState));
       this.setState({ cards: temp, formInput: [], formState: false, addQuote : false });
     }
   }

   cancelForm = (i) => {
     const temp = this.state.cards.slice();
     temp[i].cardState ='ok';
     this.setState({ cards: temp, formInput: [], formState: false });
   }


   onClickAdd = () => {
     const temp = this.state.cards.slice();
     temp.map( (x) => {
       if (x.cardState === 'modify'){
         x.cardState ='ok'
       }
       return x ;
     });
     this.setState({ cards: temp, formInput: [], formState: false, addQuote : true });
   }

   //submit for addquote form ( à refactorer un jour avec celle du dessus)
   submitFormAddQuote = () => {
     const temp = this.state.cards.slice();
     if (this.state.formInput[1] != null && this.state.formInput[1] != "" && this.state.formInput[0] != null && this.state.formInput[0] != "") {
       const obj = {
           'quote' : this.state.formInput[0],
           'author' : this.state.formInput[1] }

       fetch(process.env.REACT_APP_API_URL + '/quote', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(obj)
       })
        .then(response => response.json())
        .then(response => {
          temp.unshift(response);
          temp[0].cardState = 'ok';
          this.setState({ cards: temp, formInput: [], formState: false, addQuote : false });
        } );
      }
      else {
        this.setState({ cards: temp, formInput: [], formState: false, addQuote : false });
      }
     }


   cancelFormAddQuote = () => {
     this.setState({formInput: [], formState: false , addQuote: false });
   }

   //fonction qui alimente formInput props pour les input du formaulaire
   dataForm = (cas, value) => {
     this.setState({ formState: true });
     if (cas === 0){
       const q = this.state.formInput.slice();
       q[0]=value;;
       this.setState({ formInput: q });
     }
     else if (cas === 1){
       const q = this.state.formInput.slice();
       q[1]=value;;
       this.setState({ formInput: q });
     }
     else {
       console.log('pas d\'input error');
     }
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
            onClickS={(i) => this.submitForm(i)}
            onClickC={(i) => this.cancelForm(i)}
            changeForm={(cas, value) => this.dataForm(cas, value)}
          />
      ))

    return (
      <div className="title_div">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <AddQuote
                  addQuote={this.state.addQuote}
                  onClickAdd={() => this.onClickAdd()}
                  onClickS={() => this.submitFormAddQuote()}
                  onClickC={() => this.cancelFormAddQuote()}
                  changeForm={(cas, value) => this.dataForm(cas, value)}
                />
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
