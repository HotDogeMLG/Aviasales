import { FC } from 'react';
import './Ticket.scss';
import { addMinutes } from 'date-fns';

export interface TicketProps {
  display: boolean;
  price: number;
  carrier: string;
  ticket: {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
  };
  backTicket: {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
  };
}

const Ticket: FC<TicketProps> = ({ price, carrier, ticket, backTicket }) => {
  function getTransferCount(count: number): string {
    if (count === 1) {
      return '1 ПЕРЕСАДКА';
    } else if (count > 1 && count < 5) {
      return count + ' ПЕРЕСАДКИ';
    } else return count + ' ПЕРЕСАДОК';
  }

  function getTransferCities(stops: string[]): string {
    if (stops.length === 0) return '---';
    return stops.join(', ');
  }

  function getDuration(duration: number) {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    return `${hours}ч ${minutes}м`;
  }

  function getTime(time: string, duration: number) {
    const departureDate = new Date(time);
    const arrivalTime = addMinutes(departureDate, duration);

    function formatTime(time: number): string {
      return time < 10 ? '0' + time.toString() : time.toString();
    }

    return `${formatTime(departureDate.getHours())}:${formatTime(
      departureDate.getMinutes()
    )} - ${formatTime(arrivalTime.getHours())}:${formatTime(
      arrivalTime.getMinutes()
    )}`;
  }

  return (
    <div className='Ticket'>
      <div className='Ticket__header'>
        <span className='Ticket__price'>{price} Р</span>
        <img
          className='Ticket__img'
          src={`https://pics.avs.io/99/36/${carrier}.png`}
        ></img>
      </div>
      <div className='Ticket__content'>
        <div className='Ticket__text'>
          <span className='Ticket_light'>
            {ticket.origin} - {ticket.destination}
          </span>
          <span className='Ticket_dark'>
            {getTime(ticket.date, ticket.duration)}
          </span>
        </div>
        <div className='Ticket__text'>
          <span className='Ticket_light'>В ПУТИ</span>
          <span className='Ticket_dark'>{getDuration(ticket.duration)}</span>
        </div>
        <div className='Ticket__text'>
          <span className='Ticket_light'>
            {getTransferCount(ticket.stops.length)}
          </span>
          <span className='Ticket_dark'>{getTransferCities(ticket.stops)}</span>
        </div>

        <div className='Ticket__text'>
          <span className='Ticket_light'>
            {backTicket.origin} - {backTicket.destination}
          </span>
          <span className='Ticket_dark'>
            {getTime(backTicket.date, backTicket.duration)}
          </span>
        </div>
        <div className='Ticket__text'>
          <span className='Ticket_light'>В ПУТИ</span>
          <span className='Ticket_dark'>
            {getDuration(backTicket.duration)}
          </span>
        </div>
        <div className='Ticket__text'>
          <span className='Ticket_light'>
            {getTransferCount(backTicket.stops.length)}
          </span>
          <span className='Ticket_dark'>
            {getTransferCities(backTicket.stops)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
