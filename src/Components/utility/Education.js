import React, { useContext } from 'react'
import {Context} from '../../Context'
import Eduform from './Eduform'

function Education() {
  const {eduData} = useContext(Context) 
  const education = eduData.map((data) => (
    <Eduform  key={data.id} eduHist={data} />
  )) 
  return (
    <div>
      <h3>Education</h3>
        {education}
    </div>
  )
}

export default Education