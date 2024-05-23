import './App.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from './Constant/constant';
import Login from './Components/Login';
import Finished from './Components/Finished';
import Connected from './Components/Connected';

function App() {
  return (
    <div className="App">
      <div>Hello World</div>
    </div>
  );
}

export default App;