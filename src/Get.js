import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Get extends Component {

  constructor(props){
    super(props);
    this.state = {product:{}};
  }

  onIdChange = (e)=>{
    this.setState({id:e.target.value});
  }

    getProduct(){
      const axios = require('axios');
      axios.get("http://localhost:8080/BrickOrderingApplication/customer-orders/"+this.state.id)
      .then(res=>{
       console.log(res);
       
        this.setState({product:res.data});
      })
    }

    render() {
      return (
        <div>
          Enter ReferenceId ID:<input onChange={this.onIdChange}/>
          <button onClick={this.getProduct.bind(this)}>Get Order Details</button>
          <br/>
          CustomerId: {this.state.product.cutomerId}
          <br/>
          Order ReferenceId: {this.state.product.orderReferenceId}
          <br/>
          NumberofBricks: {this.state.product.numberofBricks}
        
        </div>
      );
    }
  }

export default Get;
