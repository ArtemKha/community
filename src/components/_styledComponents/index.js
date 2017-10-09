import styled, { keyframes } from 'styled-components'
import Background from '../../assets/bg_sign.png'

export const Logi = styled.div`
  background-image: url(${Background});
  height: 100vh;
`

export const BgSigning = styled.div`
  background-image: url(${Background});
  height: 100vh;
`

export const FlexBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`

export const FlexBoxWraped = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5%;
  opacity: 0;
  transition: opacity .35s ease;

  input {
    color: rgba(153, 38, 175, 1);
    font-size: 1.25em;
  }

  input:disabled {
    color: rgba(153, 38, 175, 0.8);
  }

  textarea:disabled {
    color: rgba(0, 0, 0, 0.7);
  }
`

export const FlexItem = styled.div`
  flex-grow: 1;
`

// desctop/mobile logic for views
export const MobileHiddenBox = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`
export const MobileHiddenNoteView = styled.div`
  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    display: none;
  }
`
export const DesktopHiddenBox = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`
export const NoteListHideMobileBox = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`

// NoteList component
export const NoteListBox = styled.div`
  min-width: 300px;
  width: 100%;
  overflow-x: scroll;
  height: calc(100vh - 36px);

  @media (min-width: 700px) {
    width: 360px;
	}

  ::-webkit-scrollbar-track {
	  background-color: rgba(220, 220, 220, 0.5);
    width: 8px;
  }

  ::-webkit-scrollbar {
    width: 8px;
	  background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(220, 220, 220);
  }
`

// AnimatedBox keyframe
const floating = keyframes`
  from { transform: rotateY(-15deg); }
  50% { transform: rotateY(15deg) rotateX(20deg); }
  to { transform: rotateY(-15deg); }
`

// greeting and 404 components
export const AnimatedBox = styled.div`
  animation: ${floating} 15s infinite;
`

// notebar component
export const AlignedRightBox = styled.div`
  margin-left: auto;
`

//sign in-out froms
export const linkStyle = {textDecoration: 'none', color: '#7b1fa2'}


export const AnimatedEnter = styled.div`
  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  .fade-appear {
    opacity: 0;
  }

  .fade-appear.fade-appear-active{
   opacity: 1;
   transition: opacity 0.5s ease-in;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active{
   opacity: 1;
   transition: opacity 0.5s ease-in;
  }
`
