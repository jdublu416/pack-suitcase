import React from 'react';

const Suitcase = ({ suitcase, unpack }) => {
  return (
    <div>
      <ul>
        {suitcase.map(item => {
          return (
            <>
              <li key={item.id}>{item.type}</li>
              <button onClick={() => unpack(item)}>UnPack</button>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Suitcase;
