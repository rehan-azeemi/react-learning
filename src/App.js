import React,{Component} from 'react';
import './App.css';
import Product from './product'

// var name = "Rehan";
// var element = <div>{name}</div>
// var a = 5;

// function App(prop) {
//   return (
//     prop.number
//   );
// }

// function App2(){
//   return (element);
// }

// function App3(){
//   return <React.Fragment><App number = {a} /><App2/></React.Fragment>
// }
//export default App3;


class App extends Component{
  render(){
    const myName = [{name:"Rehan",age:26},{name:"Ali",age:25},{name:"Azeemi",age:28}];
    return (
      <React.Fragment>
          <Product names={myName}></Product>
      </React.Fragment>
    );
  } 
}

export default App;