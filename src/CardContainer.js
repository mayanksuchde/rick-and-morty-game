import React, { Component } from 'react'
import characters from './data';
import Card from './Card';
import './Cards.scss';
export default class CardContainer extends Component {
    constructor(){
        super();
        this.state={
            characters:[]
        }
    }
    componentDidMount(){
        let shuffleArr=this.props.shuffle(characters)
        this.setState({
            characters:shuffleArr
        })
       
    }
    cardFlipper=(id)=>{

        //we need to update an array:
        //1>Copy Card array in State;
        //go throuhg the array ,find the one we want and flip its is Clicked value to true or w
        let newArr=this.state.characters;
        let foundInd=newArr.findIndex((element)=>{ return id===element.id });
        console.log(foundInd, newArr);
        newArr[foundInd].isClicked=true
        this.setState({
            characters:newArr
        })
        }
    
  render() {      
      
 
    return (
      <div >
        <h1>Cards</h1>
        <div className='card-container'>
            {this.state.characters.map((char,i)=>{ return <Card key={i} character={char} cardFlipper={this.cardFlipper} /> })}
        </div>
      </div>
    )
  }
}

// cardFlipper={this.cardFlipper}
