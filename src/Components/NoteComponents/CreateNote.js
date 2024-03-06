import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CreateNote = ({ textHandler, saveHandler, inputText }) => {
  return (
    <>
      <div>
        <textarea
          value={inputText}
          onChange={textHandler}
          cols="10"
          rows="5"
          placeholder="Type...."
          maxLength="100"
        />
      </div>

      <AddCircleOutlineIcon onClick={saveHandler} />
    </>
  );
};
export default CreateNote;
