import React, { ChangeEvent, RefObject, useRef } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface CreateNoteProps {
  textHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  saveHandler: (inputRef: RefObject<HTMLTextAreaElement>) => void;
  inputText: string;
}
const CreateNote = ({
  textHandler,
  saveHandler,
  inputText,
}: CreateNoteProps) => {
  const inputRef: RefObject<HTMLTextAreaElement> = useRef(null);

  return (
    <form onSubmit={()=>saveHandler(inputRef)}>
      <div className="note">
        <textarea
          value={inputText}
          onChange={textHandler}
          cols={10}
          rows={5}
          placeholder="Type...."
          maxLength={100}
          ref={inputRef}
          autoFocus
        />
        <div className="note__footer">
          <AddCircleOutlineIcon
            className="note__save"
            onClick={() => saveHandler(inputRef)}
          />
        </div>
      </div>
    </form>
  );
};
export default CreateNote;
