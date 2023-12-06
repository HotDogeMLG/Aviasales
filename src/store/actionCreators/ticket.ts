import { Dispatch } from 'react';
import {
  TicketType,
  TicketAction,
  TicketActionTypes,
} from '../../types/ticket';
import axios from 'axios';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const addTickets = (id: string | null) => {
  return async (dispatch: Dispatch<TicketAction>) => {
    try {
      dispatch({ type: TicketActionTypes.REQUEST_TICKETS });

      const res = await axios.get<{ tickets: TicketType[]; stop: boolean }>(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`
      );

      dispatch({
        type: TicketActionTypes.ADD_TICKETS,
        payload: res.data.tickets,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: TicketActionTypes.TICKETS_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};

export const getSearchId = () => {
  return async (dispatch: Dispatch<TicketAction>) => {
    try {
      const res = await axios.get<{ searchId: string }>(
        `https://aviasales-test-api.kata.academy/search`
      );

      dispatch({
        type: TicketActionTypes.GET_SEARCH_ID,
        payload: res.data.searchId,
      });
    } catch (e) {
      dispatch({
        type: TicketActionTypes.TICKETS_ERROR,
        payload: 'Не удалось получить ID',
      });
    }
  };
};

export const changeTicketPage = () => ({
  type: TicketActionTypes.CHANGE_TICKET_PAGE,
});
