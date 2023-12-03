import React, { FC } from 'react';
import airlinesLogo from '../../img/airlines.png';
import './Ticket.scss';

const Ticket: FC = () => {
  return (
    <div className='Ticket'>
      <div className='Ticket__header'>
        <span className='Ticket__price'>13400 Р</span>
        <img className='Ticket__img' src={airlinesLogo}></img>
      </div>
      <div className='Ticket__content'>
        <div className='Ticket__text'>
          <span className='Ticket_light'>MOW - HKT</span>
          <span className='Ticket_dark'>10:45 – 08:00</span>
        </div>
        <div className='Ticket__text'>
          <span className='Ticket_light'>В ПУТИ</span>
          <span className='Ticket_dark'>21ч 15м</span>
        </div>
        <div className='Ticket__text'>
          <span className='Ticket_light'>2 ПЕРЕСАДКИ</span>
          <span className='Ticket_dark'>HKG, JNB</span>
        </div>
        <div className='Ticket__text'>
          <span className='Ticket_light'>MOW - HKT</span>
          <span className='Ticket_dark'>11:20 – 00:50</span>
        </div>
        <div className='Ticket__text'>
          <span className='Ticket_light'>В ПУТИ</span>
          <span className='Ticket_dark'>13ч 30м</span>
        </div>
        <div className='Ticket__text'>
          <span className='Ticket_light'>1 ПЕРЕСАДКА</span>
          <span className='Ticket_dark'>HKG</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
