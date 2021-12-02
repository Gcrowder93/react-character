import React from 'react';
import './Preview.css';

export default function Preview({ head, middle, bottom, catchPhrase }) {
  return (
    <div className={`preview ${catchPhrase}`}>
      <img atl={head} src={`${process.env.PUBLIC_URL}/${head}-head.png`} />
      <img atl={middle} src={`${process.env.PUBLIC_URL}/${middle}-middle.png`} />
      <img atl={bottom} src={`${process.env.PUBLIC_URL}/${bottom}-bottom.png`} />
      <p> {catchPhrase} </p>
    </div>
  );
}
