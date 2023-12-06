import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import './MyCheckbox.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const MyCheckbox: React.FC = () => {
  const checkedList = useTypedSelector(state => state.check.checkboxValue)

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const {checkChange} = useActions()

  const onChange = (list: any[]) => {
    checkChange(list)
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    checkChange(e.target.checked ? plainOptions : [])
  };

  return (
    <div className='MyCheckbox'>
      <span className='checkbox-title'>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} className='MyCheckbox__inside'/>
    </div>
  );
};

export default MyCheckbox;