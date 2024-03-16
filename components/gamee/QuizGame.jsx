import React, { Component } from 'react';
import { connect } from "react-redux"
import { mapDispatchToProps, mapStateToProps } from './redux/index'
import Start from './containers/Start';
import MathQuiz from './containers/MathQuiz';
import Footer from './components/Footer';

class QuizGame extends Component {
  

  gameStart = () => {
    this.props.onStartGame();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            !this.props.isStarted ? (
              <Start startPressed={this.gameStart} />
            ) : (
              <MathQuiz { ...this.props} gameStart={this.gameStart}/>
            )
          }
        </header>
        <Footer></Footer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizGame);
