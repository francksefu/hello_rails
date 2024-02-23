import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { fetchUserData } from './redux/user/userSlice';
import Great from './components/great';

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
};

export default App;
