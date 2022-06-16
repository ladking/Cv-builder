import React from 'react'
import {useContext} from 'react'
import {Context} from '../../Context'
import Expform from './Expform'

function Experience() {
  const {ExperienceData} = useContext(Context)

  const experience = ExperienceData.map(exphist => (
    <Expform key={exphist.id} exphist={exphist} />
  ))
  return (
    <div>{experience}</div>
  )
}

export default Experience