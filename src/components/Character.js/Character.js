import React from 'react';
import './Character.css';
// import data from '../../data'

export default function Character(props) {
  return (
    <>
      <div
        className="character"
        style={{ head: props.head, middle: props.middle, bottom: props.bottom }}
      >
        <img height="100" src={`${process.env.PUBLIC_URL}/character/${props.Character}.svg`} />
        <span className="name">{props.head}</span>
        <span>{props.says}</span>
      </div>
    </>
  );
}
