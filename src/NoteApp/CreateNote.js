import React, {useRef} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CreateNote = ({ textHandler, saveHandler, inputText }) => {
const inputRef = useRef()

  return (
    <>
      <div className="note" 
      >
        <textarea
          value={inputText}
          onChange={textHandler}
          cols="10"
          rows="5"
          placeholder="Type...."
          maxLength="100"
          ref={inputRef}
          autoFocus
        />
             <div className="note__footer">
             <AddCircleOutlineIcon className= 'note__save' onClick={() =>saveHandler(inputRef)} />

      </div>
      </div>

    </>
  );
};
export default CreateNote;
