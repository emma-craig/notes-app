import React from "react"
import './../Note/Note.css'
const NoteBody = ({text}) => {
return (
    <div className="note__body">
{text}
    </div>
)
}
export default NoteBody