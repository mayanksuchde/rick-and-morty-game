import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class startPage extends Component {
  render() {
    return (
      <div>
        <Link to='/cardGame'>
            <h1>START GAME</h1>
        </Link> 
      </div>
    )
  }
}
