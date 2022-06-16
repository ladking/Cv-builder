import React from 'react'
import {Context} from '../Context'
import {useContext} from 'react'

function Preview() {
  const {personaldata, eduData, ExperienceData} = useContext(Context)

  const eduhistory = eduData.map(eduhist => (
    <div className='edudetails' key={eduhist.id}>
      <p className='edudetails'>{eduhist.School}</p>
      <p className='edudetails'>{eduhist.Course}</p>
      <p className='edudetails'>{eduhist.Degree}</p>
      <span className='edudetails'>{eduhist.From} - {eduhist.To}</span>
      <hr />
    </div>
))

const exphistory = ExperienceData.map(exphist => (
  <div key={exphist.id}>
    <div>
      <h4>{exphist.Company}</h4>
      <span><strong>{exphist.Position}</strong></span>
    </div>
    <span>{exphist.From} - {exphist.To}</span>
    <p>{exphist.Description}</p>
  </div>
))

 return (
    <div className='main'>
        <div className='skill-edu'>
        <div className='contact'>
          <h3>Contact</h3>
          <i class="fa-solid fa-phone"></i>
            <p className='min-screen'>{personaldata.phoneNo}</p>
            <i class="fa-solid fa-envelope"></i>
            <p className='min-screen'>{personaldata.email}</p>
            <i class="fa-brands fa-linkedin"></i>
            <p className='min-screen'>{personaldata.linkedIn}</p>
        </div> 
        <hr />
            <h3>Skills</h3>
            <div className='text'>{personaldata.skills}</div>
            <br />
            <br />
            <h3><i class="fa-solid fa-school"></i> Education </h3>
            {eduhistory}
        
        </div>
        <div className='right-col'>
         <div className='summary'> 
            <h3>Professional Summary</h3>
            <p>{personaldata.summary}</p>
        </div>
        <hr />
            <h3>Experience</h3>
            {exphistory}
            
        </div>
    </div>
  )
}

export default Preview