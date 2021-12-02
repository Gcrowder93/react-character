import React, { useState } from 'react';
import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import './Main.css';
import buildabear from '../../buildabear.webp';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [catchPhraseList, setCatchPhraseList] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  return (
    <main style={{ backgroundImage: `url(${buildabear})` }}>
      <Preview {...{ head, middle, bottom, catchPhrase, catchPhraseList, setCatchPhrase }} />
      <Editor
        {...{
          catchPhrase,
          setHead,
          setMiddle,
          setBottom,
          setCatchPhrase,
          setCatchPhraseList,
          setHeadCount,
          setMiddleCount,
          setBottomCount,
        }}
      />
      {!!headCount && <p>You have changed the head {headCount} times</p>}
      {!!middleCount && <p>You have changed the body {middleCount} times</p>}
      {!!bottomCount && <p>You have changed the legs {bottomCount} times</p>}
      {!!catchPhraseList && <p>{catchPhraseList}</p>}
    </main>
  );
}
