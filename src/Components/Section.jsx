import React from 'react'
import './section.css'
import styled from 'styled-components'

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <div className='item-text'>
         <h1>{props.title}</h1>
         <p>{props.description}</p>
      </div>
      <div>
      <div className='button-group'>
      <button className='top-btn'>{props.topBtn}</button>
      <button className='bottom-btn'>{props.bottomBtn}</button>
      </div>
      <img className='down-arrow' src='/Images/down-arrow.png'></img>
      </div>
      </Wrap>
  )
}

export default Section

const Wrap=styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/Images/${props.bgImage}")` }
`