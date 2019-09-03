import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';
import Awards from './Awards';


class App extends Component{
    render (){
      return (
        <div class = 'App'>
          <Header/>
          <Summary />
          <Education />
          <Experience/>
          <Awards/>
        </div>
      );
    }
}


export default App;
