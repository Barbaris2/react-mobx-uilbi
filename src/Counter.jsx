import React from 'react';
import counter from './store/counter';
import { observer } from 'mobx-react-lite';

const Counter = observer(() => {
  return (
    <div className='counter'>
      {`Counter: ${counter.count}`}
      <div className='div'>{counter.total}</div>
      <div className='btns'>
        <button className='btn' onClick={() => counter.increment()}>
          +
        </button>
        <button className='btn' onClick={() => counter.decrement()}>
          -
        </button>
      </div>
    </div>
  );
});

export default Counter;
