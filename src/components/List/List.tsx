import React, { FC, useEffect } from 'react';
import Ticket from '../Ticket/Ticket';
import './List.scss';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const List: FC = () => {
  const { getSearchId, addTickets, changeTicketPage } = useActions();
  const id = useTypedSelector((state) => state.tickets.id);
  const page = useTypedSelector((state) => state.tickets.page);

  useEffect(() => {
    if (id === null) getSearchId();
    else addTickets(id);
  }, [id]);

  let tickets = useTypedSelector((state) => state.tickets.tickets);

  return (
    <div className='List'>
      {id &&
        tickets.slice(0, 5 * page).map((ticket, ind) => {
          return (
            <Ticket
              key={ind}
              price={ticket.price}
              carrier={ticket.carrier}
              ticket={ticket.segments[0]}
              backTicket={ticket.segments[1]}
            />
          );
        })}
      <button onClick={changeTicketPage} className='btn more'>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
      </button>
    </div>
  );
};

export default List;
