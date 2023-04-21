import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Table from './components/table'
import Footer from './components/footer'

const App = () => {
  return (
    
    <div id="main">


      <Navbar />
      <h1 id="welcome">Welcome.</h1>

      <h2>New Users</h2>
      <SignUp />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h2>Returning Users</h2>
      <Login />



      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Employee List</h2>
      <Table />

        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />

    </div>


  );
};

export default App;
