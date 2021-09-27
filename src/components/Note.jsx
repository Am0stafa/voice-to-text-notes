/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import {v4 as uuid} from 'uuid';
import {NoteContext} from '../context/NotesContext'

const Note = () => {
    const {isListing, setIsListing,note, setNote,saveNote, setSaveNote} = useContext(NoteContext)

    return (
        <div className="box">
            <h2>Notes</h2>
            
            {
           saveNote.map(note =>(
            <p key={uuid()}>{note}</p>
            ))
            }
            
        </div>
    )
}

export default Note
