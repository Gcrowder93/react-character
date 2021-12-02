import React from 'react';
import './Editor.css';

export default function Editor({ setHead, setMiddle, setBottom, setCatchPhrase }) {
  return (
    <>
      <div className="editor">
        <div className="form-control">
          <select onChange={(e) => setHead(e.target.value)}>
            <option value="bird-head">Bird Head</option>
            <option value="dog-head">Dog Head</option>
            <option value="duck-head">Duck Head</option>
            <option value="horse-head">Horse Head</option>
          </select>
        </div>
        <div className="form-control">
          <select onChange={(e) => setMiddle(e.target.value)}>
            <option value="blue-middle">Blue Middle</option>
            <option value="red-middle">Red Middle</option>
            <option value="dress-middle">Dress Middle</option>
            <option value="pink-middle">Pink Middle</option>
          </select>
        </div>
        <div className="form-control">
          <select onChange={(e) => setBottom(e.target.value)}>
            <option value="blue-pants">Blue Pants</option>
            <option value="leg-pants">Leg Pants</option>
            <option value="white-pants">White Pants</option>
            <option value="dog-pants">Dog Pants</option>
          </select>
        </div>
      </div>
      <div className="form-control">
        <label>Catch Phrase: </label>
        <input
          type="text"
          // value={setCatchPhrase}
          onChange={(e) => setCatchPhrase(e.target.value)}
          name="catch-phrase"
        />
        <button>Add !</button>
      </div>
    </>
  );
}
