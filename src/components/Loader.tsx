import React from 'react';
import './Loader.css';

interface Props {
  message?: string;
}

const Loader: React.FC<Props> = ({ message = 'Loading...' }) => {
  return (
    <div className="loader-container">
      <div className="lds-ellipsis">
        <div style={{fontSize: 40, color: "blue"}}>.</div>
        <div style={{fontSize: 40, color: "lightblue"}}>.</div>
        <div style={{fontSize: 40, color: "salmon"}}>.</div>
        <div style={{fontSize:40, color: "olive"}}>.</div>
      </div>
      <p>{message}</p>
    </div>
  );
};

export {Loader};
