import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            banner: 'Bijan\'s Page',
            isOpen: false,
        };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    console.log(this.props)
    }


  buttonHandler() {
    this.setState({
        isOpen: !this.state.isOpen,
    });

  }

  textHandler(e) {
      this.setState({
          banner: e.target.value,
      });
  }

  render() {
      let myBanner;
      if(this.state.isOpen) {
        myBanner = <Header banner={this.state.banner}/>
      }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h2>👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit</h2>
          </p>
            {myBanner}
            <input value={this.state.banner} onChange={this.textHandler}/>
            <button onClick={this.buttonHandler}> CLICK ME </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
