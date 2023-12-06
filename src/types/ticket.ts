export type TicketType = {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
};

export enum TicketActionTypes {
  GET_SEARCH_ID = 'GET_SEARCH_ID',
  REQUEST_TICKETS = 'REQUEST_TICKETS',
  TICKETS_ERROR = 'REQUEST_TICKETS_ERRROR',
  ADD_TICKETS = 'ADD_TICKETS',
  CHANGE_TICKET_PAGE = 'CHANGE_TICKET_PAGE',
}

interface AddTicketsAction {
  type: TicketActionTypes.ADD_TICKETS;
  payload: TicketType[];
}

interface RequestTicketsAction {
  type: TicketActionTypes.REQUEST_TICKETS;
}

interface RequestTicketsErrorAction {
  type: TicketActionTypes.TICKETS_ERROR;
  payload: string;
}

interface GetSearchIdAction {
  type: TicketActionTypes.GET_SEARCH_ID;
  payload: string;
}

interface ChangeTicketPageAction {
  type: TicketActionTypes.CHANGE_TICKET_PAGE;
}

export type TicketAction =
  | AddTicketsAction
  | RequestTicketsAction
  | RequestTicketsErrorAction
  | GetSearchIdAction
  | ChangeTicketPageAction;

export interface TicketState {
  id: null | string;
  page: number;
  loading: boolean;
  error: null | string;
  tickets: TicketType[];
}
