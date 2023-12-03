import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Radio } from 'antd';
import './Filter.scss';
import * as sortActions from '../../store/actionCreators/sort';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Filter: React.FC = () => {
  const sortValue = useTypedSelector((state) => state.sort);

  const dispatch = useDispatch();
  const {
    sortCheapestAction,
    sortFastestAction,
    sortOptimalAction,
  } = bindActionCreators(sortActions, dispatch);

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
