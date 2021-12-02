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

  return (
    <main style={{ backgroundImage: `url(${buildabear})` }}>
      <Preview {...{ head, middle, bottom, catchPhrase }} />
      <Editor {...{ setHead, setMiddle, setBottom, setCatchPhrase }} />
    </main>
  );
}
