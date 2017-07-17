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
  min-width: 360px;
  overflow: scroll;
  height: calc(100vh - 56px);
  margin-bottom: 56px;

  ::-webkit-scrollbar-track {
	  background-color: #F5F5F5;
    width: 8px;
  }

  ::-webkit-scrollbar {
    width: 8px;
	  background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: lightgrey;
  }
`
