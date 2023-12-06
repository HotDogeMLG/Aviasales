import React from 'react';
import { Radio } from 'antd';
import './Filter.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const Filter: React.FC = () => {
  const sortValue = useTypedSelector((state) => state.sort);

  const {
    sortCheapestAction,
    sortFastestAction,
    sortOptimalAction,
  } = useActions();

  return (
    <div className='Filter'>
      <Radio.Group defaultValue={sortValue} buttonStyle='solid'>
        <Radio.Button
          onClick={sortCheapestAction}
          className='filter__button'
          value='cheapest'
        >
          САМЫЙ ДЕШЕВЫЙ
        </Radio.Button>
        <Radio.Button
          onClick={sortFastestAction}
          className='filter__button'
          value='fastest'
        >
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button
          onClick={sortOptimalAction}
          className='filter__button'
          value='optimal'
        >
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Filter;
