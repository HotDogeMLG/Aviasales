import React, { FC, useEffect, useMemo } from 'react';
import Ticket from '../Ticket/Ticket';
import './List.scss';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TicketType } from '../../types/ticket';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const List: FC = () => {
  const { getSearchId, addTickets, changeTicketPage } = useActions();
  const id = useTypedSelector((state) => state.tickets.id);
  const page = useTypedSelector((state) => state.tickets.page);

  useEffect(() => {
    if (id === null) getSearchId();
    else addTickets(id);
  }, [id]);

  const tickets = useTypedSelector((state) => state.tickets.tickets);

  const sort = useTypedSelector((state) => state.sort);
  const check = useTypedSelector((state) => state.check);

  function sortFunc(prev: JSX.Element, next: JSX.Element): number {
    switch (sort) {
      case 'cheapest':
        if (prev.props.price < next.props.price) return -1;
        else if (prev.props.price === next.props.price) return 0;
        else return 1;
      case 'fastest':
        if (
          prev.props.ticket.duration + prev.props.backTicket.duration <
          next.props.ticket.duration + next.props.backTicket.duration
        )
          return -1;
        else if (
          prev.props.ticket.duration + prev.props.backTicket.duration ===
          next.props.ticket.duration + next.props.backTicket.duration
        )
          return -1;
        else return 1;
      default:
        return 0;
    }
  }

  function countStops(ticket: TicketType) {
    return ticket.segments[0].stops.length + ticket.segments[1].stops.length;
  }

  function filterFunc(ticket: JSX.Element) {
    if (check.noTransfers && ticket.props.stops === 0) return true;
    if (check.oneTransfer && ticket.props.stops === 1) return true;
    if (check.twoTransfers && ticket.props.stops === 2) return true;
    if (check.threeTransfers && ticket.props.stops === 3) return true;
    return false;
  }

  let ticketList: JSX.Element[] = [];

  ticketList = useMemo(() => {
    if (id) {
      return tickets.map((ticket, ind) => {
        return (
          <Ticket
            stops={countStops(ticket)}
            key={ind}
            price={ticket.price}
            carrier={ticket.carrier}
            ticket={ticket.segments[0]}
            backTicket={ticket.segments[1]}
          />
        );
      });
    }
    return [];
  }, [tickets]);

  ticketList = useMemo(() => {
    if (id) {
      return ticketList.sort((prev, next) => sortFunc(prev, next));
    }
    return [];
  }, [tickets, sort]);

  if (id)
    ticketList = ticketList
      .slice(0, 30 * page)
      .filter((ticket) => filterFunc(ticket));

  function showMore() {
    if ((page + 1) * 30 > tickets.length) addTickets(id);
    changeTicketPage();
  }

  const loading = useTypedSelector((state) => state.tickets.loading);
  const error = useTypedSelector((state) => state.tickets.error);

  let displayElement: JSX.Element[] | JSX.Element;
  let disabled: boolean = false;

  if (loading) displayElement = <Loader />;
  else if (error) {
    displayElement = <Error />;
    disabled = true;
  } else if (ticketList.length === 0)
    displayElement = (
      <div className='no-tickets'>
        По заданным фильтрам отсутствуют билеты, попробуйте изменить фильтры или
        отобразите больше билетов
      </div>
    );
  else displayElement = ticketList;

  return (
    <div className='List'>
      {displayElement}
      <button disabled={disabled} onClick={showMore} className='btn more'>
        ПОКАЗАТЬ ЕЩЕ
      </button>
    </div>
  );
};

export default List;
