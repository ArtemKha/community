import styled from 'styled-components'

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`
export const FlexBoxWraped = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const FlexItem = styled.div`
  flex-grow: 1;
`

export const MobileHiddenBox = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`
export const DesktopHiddenBox = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`

export const NoteListBox = styled.div`
  padding-bottom: 60px;
`
