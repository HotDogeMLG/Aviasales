import {
  TicketAction,
  TicketActionTypes,
  TicketState,
} from '../../types/ticket';

const ticketDefaultState: TicketState = {
  id: null,
  page: 1,
  loading: false,
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
      return { ...state, loading: false, error: action.payload };
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
