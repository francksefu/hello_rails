import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUserData } from './redux/user/userSlice.js';
import Great from './components/great.js';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

 const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUserData());
    }, [dispatch]);
  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<Great />} />
      </Routes>
    </Router>

  );
}

export default App;