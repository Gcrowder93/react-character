import React from 'react';
import './Preview.css';

export default function Preview({ head, middle, bottom, catchPhrase }) {
  return (
    <div className="clothes">
      <img alt={head} height="75" src={`${process.env.PUBLIC_URL}/outfits/${head}-head.png`} />
      <img
        alt={middle}
        height="75"
        src={`${process.env.PUBLIC_URL}/outfits/${middle}-middle.png`}
      />
      <img alt={bottom} height="75" src={`${process.env.PUBLIC_URL}/outfits/${bottom}-pants.png`} />
      <p> {catchPhrase} </p>
    </div>
  );
}
