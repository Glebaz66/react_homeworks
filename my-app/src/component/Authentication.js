import React, { Component } from "react";
export default class Authentication extends Component {
  constructor(props){
    super(props)
    this.handleSingInClick =this.handleSingInClick.bind(this); 
    this.handleSingupClick =this.handleSingupClick.bind(this); 
    this.state = {isSelected: false};
  }
  handleSingInClick(){
    this.setState = {isSelected: true};
    const select = document.querySelector('.sing-in')
    console.log(select.textContent);
    
  }
  handleSingupClick(){
    this.setState = {isSelected: true};
    const select = document.querySelector('.sing-up')
    console.log(select.textContent);
    
  }
  
  render() {
    
    return (
      <section className="authentication">
        <form className="auth-form">
          <div className="sing">
            <div className="btn sing-in" onClick={this.handleSingInClick}>sing in</div>
            <div className="btn sing-up" onClick={this.handleSingupClick}>sing up</div>
          </div>

          <div className="sing-in-data">
            <input type="email" name="email" placeholder="email"/>
            <input type="password" name="password" placeholder="password"/>
          </div>

          <div className="sing-up-data">
            <input type="text" name="name" placeholder="name"/>
            <input type="email" name="email" placeholder="email"/>
            <input type="tel" name="telephone" placeholder="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
            <input type="password" name="password" placeholder="password"/>
          </div>

          <button className="btn submit" type="sumbit">sumbit</button>
        </form>
      </section>
    );
  }
}
