import React from 'react';
import './../Note/Note.css';
const NoteBody = ({ text }: {text: string}) => {
  return (
    <div
      style={{
        fontSize: '18px',
        fontFamily:
          'Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace',
      }}>
      {text}
    </div>
  );
};
export default NoteBody;
