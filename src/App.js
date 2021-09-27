/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './index.css';
import React, {useContext,useEffect} from 'react'
import {NoteContext} from './context/NotesContext'
import CurrentNote from './components/CurrentNote';
import Note from './components/Note';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import NoteContextProvidor from './context/NotesContext'



const App = () => {
  const {isListing, setNote} = useContext(NoteContext) ;
  
  
  useEffect(() => {
    handleListen()
  }, [isListing])

  const handleListen = () => {
    if (isListing) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }


   
  }

  return (
  <NoteContextProvidor>
<h1 className='title'>Voice Notes</h1>
   <div className="container">
      <CurrentNote/>
      <Note/>
   </div>
    </NoteContextProvidor>
  )
}

export default App
