import React, { useState } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import './MyCheckbox.scss'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const defaultCheckedList = ['Без пересадок'];

const MyCheckbox: React.FC = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
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