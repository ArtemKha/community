import styled, { keyframes } from 'styled-components'

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
  overflow-x: scroll;
  height: calc(100vh - 36px);
  margin-bottom: 36px;

  @media (min-width: 600px) {
    max-width: 360px;
	}

  ::-webkit-scrollbar-track {
	  background-color: #F5F5F5;
    width: 8px;
  }

  ::-webkit-scrollbar {
    width: 8px;
	  background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
  }
`
const floating = keyframes`
  from { transform: rotateY(-15deg); }
  50% { transform: rotateY(15deg) rotateX(20deg); }
  to { transform: rotateY(-15deg); }
`

export const AnimatedBox = styled.div`
  animation: ${floating} 15s infinite;
`

export const AlignedRightBox = styled.div`
  margin-left: auto;
`
export const linkStyle = {textDecoration: 'none', color: '#7b1fa2'}
