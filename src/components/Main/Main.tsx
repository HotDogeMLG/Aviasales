import React, { FC } from 'react';
import MyCheckbox from '../MyCheckbox/MyCheckbox.js';
import Filter from '../Filter/Filter';
import List from '../List/List.js';
import './Main.scss';

const Main: FC = () => {
  return (
    <main className='Main'>
      <MyCheckbox />
      <section className='Main__content'>
        <Filter />
        <List />
      </section>
    </main>
  );
};

export default Main;
