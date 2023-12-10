import { CheckState, CheckAction, CheckActionTypes } from '../../types/check';

const checkDefaultState: CheckState = {
  noTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
  checkboxValue: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
};

export const checkReducer = (
  state: CheckState = checkDefaultState,
  action: CheckAction
): CheckState => {
  const newState: CheckState = {
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
    checkboxValue: action.payload,
  };
  switch (action.type) {
    case CheckActionTypes.CHECK_CHANGE:
      for (const option of action.payload) {
        switch (option) {
          case 'Без пересадок':
            newState.noTransfers = true;
            break;
          case '1 пересадка':
            newState.oneTransfer = true;
            break;
          case '2 пересадки':
            newState.twoTransfers = true;
            break;
          case '3 пересадки':
            newState.threeTransfers = true;
            break;
        }
      }
      return newState;
    default:
      return state;
  }
};
