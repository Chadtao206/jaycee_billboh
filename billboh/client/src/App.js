import React, {useState, Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginSignup from './components/LoginSignup';
import Member from './pages/Member';
import { Header, Layout, Drawer, Navigation, Content } from 'react-mdl';

function App() {
  const [user,setUser] = useState(null)
  return (
    <div className="App">
      <div style={{height: '450px', position: 'relative'}}>
    <Layout style={{background: 'url(https://www.hobbitontours.com/media/1174/hobbiton-movie-set-30.jpg) bottom / cover'}}>
        <Header transparent title="Billboh" style={{color: 'white'}}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
    </div>
    <div>
      <Router>
        <Route exact path="/" component={()=>user? <Member/> : <LoginSignup setUser={setUser}/>}/>
      </Router>
      
    </div>
    </div>
  );
}

export default App;
