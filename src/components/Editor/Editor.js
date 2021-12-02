import React from 'react';
import './Editor.css';

export default function Editor({
  head,
  middle,
  bottom,
  catchPhrase,
  setHead,
  setMiddle,
  setBottom,
  setCatchPhrase,
  setCatchPhraseList,
  setHeadCount,
  setMiddleCount,
  setBottomCount,
  // handleHeadCount,
  // handleMiddleCount,
  // handleBottomCount,
  // handleClick,
}) {
  const handleClick = () => {
    setCatchPhraseList((prevState) => [...prevState, catchPhrase]);
    setCatchPhrase('');
  };
  const handleHeadCount = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };
  const handleMiddleCount = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevState) => prevState + 1);
  };
  const handleBottomCount = (e) => {
    setBottom(e.target.value);
    setBottomCount((prevState) => prevState + 1);
  };

  return (
    <>
      <div className="editor">
        <div className="form-control"></div>
        <label>Choose Head </label>
        <div className="form-control">
          <select value={head} onChange={handleHeadCount}>
            {/* <select onChange={(e) => setHead(e.target.value)}> */}
            <option value="bird">Bird Head</option>
            <option value="dog">Dog Head</option>
            <option value="duck">Duck Head</option>
            <option value="horse">Horse Head</option>
          </select>
        </div>
        <label> Choose Body </label>
        <div className="form-control">
          <select value={middle} onChange={handleMiddleCount}>
            {/* <select onChange={(e) => setMiddle(e.target.value)}> */}
            <option value="blue">Blue Middle</option>
            <option value="red">Red Middle</option>
            <option value="dress">Dress Middle</option>
            <option value="pink">Pink Middle</option>
          </select>
        </div>
        <label> Choose Legs </label>
        <div className="form-control">
          {/* <select onChange={(e) => setBottom(e.target.value)}> */}
          <select value={bottom} onChange={handleBottomCount}>
            <option value="blue">Blue Pants</option>
            <option value="leg">Leg Pants</option>
            <option value="white">White Pants</option>
            <option value="dog">Dog Pants</option>
          </select>
        </div>
      </div>
      <label>Create a Catch Phrase</label>
      <div className="form-control">
        <input
          type="text"
          value={catchPhrase}
          // value={setCatchPhrase}
          onChange={(e) => setCatchPhrase(e.target.value)}
        />
        <button onClick={handleClick}>Create</button>
      </div>
    </>
  );
}
