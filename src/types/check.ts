export enum CheckActionTypes {
  CHECK_NO_TRANSFERS = 'CHECK_NO_TRANSFERS',
  CHECK_1_TRANSFER = 'CHECK_1_TRANSFER',
  CHECK_2_TRANSFERS = 'CHECK_2_TRANSFERS',
  CHECK_3_TRANSFERS = 'CHECK_3_TRANSFERS',
}

interface CheckNoTransfers {
  type: CheckActionTypes.CHECK_NO_TRANSFERS;
}

interface Check1Transfer {
  type: CheckActionTypes.CHECK_1_TRANSFER;
}

interface Check2Transfers {
  type: CheckActionTypes.CHECK_2_TRANSFERS;
}

interface Check3Transfers {
  type: CheckActionTypes.CHECK_3_TRANSFERS;
}

export type CheckAction =
  | CheckNoTransfers
  | Check1Transfer
  | Check2Transfers
  | Check3Transfers;

export type CheckState =
  | 'no transfers'
  | '1 transfer'
  | '2 transfers'
  | '3 transfers';
