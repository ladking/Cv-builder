import React from 'react'
import {Context} from '../Context'
import {useContext} from 'react'

function Header() {
  const {personaldata} =useContext(Context)
  return (
    <div className='head'>
        <h1 className='name'> {personaldata.firstname} {personaldata.lastname}</h1>
        <p className='headline'>{personaldata.headline}</p>
    </div>
  )
}

export default Header