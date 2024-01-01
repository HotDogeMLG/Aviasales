import {
  TicketAction,
  TicketActionTypes,
  TicketState,
} from '../../types/ticket';

const ticketDefaultState: TicketState = {
  id: null,
  page: 1,
  loading: true,
  error: null,
  tickets: [],
};

export const ticketReducer = (
  state: TicketState = ticketDefaultState,
  action: TicketAction
): TicketState => {
  switch (action.type) {
    case TicketActionTypes.CHANGE_TICKET_PAGE:
      return { ...state, page: state.page + 1 };
    case TicketActionTypes.GET_SEARCH_ID:
      return { ...state, loading: false, error: null, id: action.payload };
    case TicketActionTypes.REQUEST_TICKETS:
      return { ...state, loading: true };
    case TicketActionTypes.TICKETS_ERROR:
      if (state.tickets.length === 0)
        return { ...state, loading: false, error: action.payload };
      else
        return {
          ...state,
          loading: false,
          tickets: [...state.tickets],
        };
    case TicketActionTypes.ADD_TICKETS:
      return {
        ...state,
        loading: false,
        tickets: [...state.tickets, ...action.payload],
      };
    default:
      return state;
  }
};
