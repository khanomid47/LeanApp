import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';
import Header from './Components/Header';
import ReactGA from 'react-ga';
import $ from 'jquery';
import About from './Components/About';
Amplify.configure(aws_exports);


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
      document.title = "Lean Kitchen"
  
  }

  render(){
  return (
    <div className="App">
      <Header data={this.state.resumeData.main}/>
      <About data={this.state.resumeData.main}/>
    </div>
  );
  }
}

export default withAuthenticator(App,true);
