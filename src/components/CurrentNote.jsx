/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import {NoteContext} from '../context/NotesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone} from '@fortawesome/free-solid-svg-icons'
import { faMicrophoneSlash} from '@fortawesome/free-solid-svg-icons'

const micicon = <FontAwesomeIcon icon={faMicrophone} />
const mutemicicon = <FontAwesomeIcon icon={faMicrophoneSlash} />

const CurrentNote = () => {
    const {isListing, setIsListing,note, setNote,saveNote, setSaveNote} = useContext(NoteContext)
    const handelSave = () => {
        setSaveNote([...saveNote, note])
        setNote('')
    }
    
    
    return (
        <div className="box">
        {
        isListing? (<span>{micicon}</span>) : (<span>{mutemicicon}</span>)
        }
            <h2>Current Notes</h2>
            <button onClick={handelSave} disabled={!note}>Save note</button>
            <button onClick={() => setIsListing(prev => !prev)} >Start/Stop the mic</button>
            <p>{note}</p>
        </div>
    )
}

export default CurrentNote
