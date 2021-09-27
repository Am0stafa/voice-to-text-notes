/* eslint-disable no-unused-vars */
import React, {createContext, useState} from 'react'

export const  NoteContext = createContext()

const NoteContextProvidor = ({children}) => {
    const [isListing, setIsListing] = useState(false)
    const [note, setNote] = useState(null)
    const [saveNote, setSaveNote] = useState([])
    return (
        <NoteContext.Provider value={{isListing, setIsListing,note, setNote,saveNote, setSaveNote}}>
        {children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvidor
