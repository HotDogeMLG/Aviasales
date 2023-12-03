import { CheckAction, CheckActionTypes } from '../../types/check';

export const checkNoTransfers = (): CheckAction => ({
  type: CheckActionTypes.CHECK_NO_TRANSFERS,
});
export const check1Transfer = (): CheckAction => ({
  type: CheckActionTypes.CHECK_1_TRANSFER,
});
export const check2Transfers = (): CheckAction => ({
  type: CheckActionTypes.CHECK_2_TRANSFERS,
});
export const check3Transfers = (): CheckAction => ({
  type: CheckActionTypes.CHECK_3_TRANSFERS,
});
