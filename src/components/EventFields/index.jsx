import React, { useState, useEffect } from 'react'
import Input from '@material-ui/core/Input/Input'
import { withStyles, createStyles } from '@material-ui/styles'
import { UsersRef } from '../../firebase'
import { FlexItem } from '../_styledComponents'

const styleSheet = theme =>
  createStyles({
    input: {
      width: '100%'
    },
    eventBox: {
      padding: '10px'
    },
    title: {
      fontWight: 700
    }
  })

const useNoteGetter = ({ userId, noteId }) => {
  const [note, setNote] = useState({
    title: '',
    text: ''
  })

  useEffect(
    () => {
      UsersRef.child(userId)
        .child('/Notes')
        .child(noteId)
        .on('value', snap => {
          setNote(snap.val())
        })
    },
    [noteId]
  )

  return note
}

const EventFields = ({ params, classes }) => {
  const note = useNoteGetter(params)

  return (
    <FlexItem className={classes.eventBox}>
      <Input
        className={classes.title}
        name="title"
        placeholder=""
        value={note.title}
        disableUnderline
        className={classes.input}
      />
      <br />
      <Input
        name="text"
        placeholder=""
        rows="6"
        value={note.text}
        multiline
        rowsMax="20"
        disableUnderline
        className={classes.input}
      />
    </FlexItem>
  )
}

export default withStyles(styleSheet)(EventFields)
