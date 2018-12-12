import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles, createStyles } from '@material-ui/styles'
import Divider from '@material-ui/core/Divider'
import { UsersRef } from '../../firebase'
import { FlexItem } from '../_styledComponents'

const styleSheet = theme =>
  createStyles({
    eventBox: {
      padding: '10px',
      maxWidth: '90%'
    },
    title: {
      fontWight: 700
    }
  })

const useNoteGetter = ({ userId, noteId }) => {
  const [note, setNote] = useState({
    title: ' ',
    text: 'Connecting...'
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
      <Typography variant="h4" gutterBottom>
        {note.title}
      </Typography>
      <Divider />
      <br />
      <Typography variant="body1" gutterBottom>
        {note.text}
      </Typography>
    </FlexItem>
  )
}

export default withStyles(styleSheet)(EventFields)
