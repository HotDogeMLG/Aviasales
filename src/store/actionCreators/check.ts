import { CheckAction, CheckActionTypes } from '../../types/check';

export const checkChange = (payload: string[]): CheckAction => ({
  type: CheckActionTypes.CHECK_CHANGE,
  payload: payload,
});
