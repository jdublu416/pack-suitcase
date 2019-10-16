import React from 'react';

const Container = ({ list, move, buttonName }) => {
  return (
    <div className='col-6-sm ulStyle'>
      <ul>
        <h3>{buttonName} Clothes</h3>
        {list.map(item => {
          return (
            <>
              <li key={item.id}>{item.type}</li>
              <button className='btn' onClick={() => move(item)}>
                {buttonName}
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Container;
