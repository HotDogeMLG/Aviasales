import React, { FC } from 'react';
import Ticket from '../Ticket/Ticket';
import './List.scss';

const List: FC = () => {
  return (
    <div className='List'>
      <Ticket />
      <Ticket />
      <Ticket />
      <button className='btn more'>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
    </div>
  );
};

export default List;
