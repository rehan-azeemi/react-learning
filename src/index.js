import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import Profile from './Profile';
 import * as serviceWorker from './serviceWorker';
// import ConstructorExample from './ConstructorExample';
// import FormExample from './FormExample';
// import Registeration from './Registeration';
// import ListRendering from './ListRendering';
// import Todo from './Todo';
import UserRegisteration from './UserRegisteration';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Profile />,
// document.getElementById('root')
// );

// ReactDOM.render(
//   <ConstructorExample />,
// document.getElementById('root')
// );

// ReactDOM.render(
//   <FormExample />,
// document.getElementById('root')
// );

// ReactDOM.render(
//   <Registeration/>,document.getElementById('root')
// );

// ReactDOM.render(
//   <ListRendering/>,document.getElementById('root')
// );

// ReactDOM.render(
//   <Todo/>,document.getElementById('root')
// )

ReactDOM.render(
  <UserRegisteration/>,document.getElementById('root')
)


if(module.hot){
  module.hot.accept();
}

// ReactDOM.render(
//   <App2 />,
// document.getElementById('root2')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
