import { CheckState, CheckAction, CheckActionTypes } from '../../types/check';

const checkDefaultState: CheckState = 'no transfers';

export const checkReducer = (
  state: CheckState = checkDefaultState,
  action: CheckAction
): CheckState => {
  switch (action.type) {
    case CheckActionTypes.CHECK_NO_TRANSFERS:
      return 'no transfers';
    case CheckActionTypes.CHECK_1_TRANSFER:
      return '1 transfer';
    case CheckActionTypes.CHECK_2_TRANSFERS:
      return '2 transfers';
    case CheckActionTypes.CHECK_3_TRANSFERS:
      return '3 transfers';
    default:
      return state;
  }
};
