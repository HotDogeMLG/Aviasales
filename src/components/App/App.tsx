import React, { FC } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
