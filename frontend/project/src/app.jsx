import React, { Component } from 'react';
import './App.css';
import './styles/font.css';
import Login from './pages/login/Login';

class App extends Component {
   state = {
      posts: [],
   };

   // rest api 테스트 코드
   async componentDidMount() {
      try {
         const res = await fetch('http://127.0.0.1:8000/api/');
         const posts = await res.json();
         this.setState({
            posts,
         });
      } catch (e) {
         console.log(e);
      }
   }

   render() {
      return (
         <>
            <Login />
            <div>
               {this.state.posts.map(item => (
                  <div key={item.id}>
                     <h1>{item.title}</h1>
                     <span>{item.content}</span>
                  </div>
               ))}
            </div>
         </>
      );
   }
}

export default App;
