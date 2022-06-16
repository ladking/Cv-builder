import React from 'react'
import {Context} from '../../Context'
import {useContext} from 'react'
function Personal() {
    const {personaldata, handleChangepersonal} =useContext(Context)
   
  return (
    <div>
         <form>
            <h3>Personal Info</h3>
            <div>
                <input type='text' 
                    value={personaldata.firstname}
                    name='firstname' 
                    onChange={handleChangepersonal}
                    placeholder='First name' 
                />
            </div>
            <div>
                <input type='text' 
                    value={personaldata.lastname} 
                    name='lastname'  
                    onChange={handleChangepersonal}
                    placeholder='Last name' 
                />
            </div>

            <div>
                <input type='text'
                     value={personaldata.headline} 
                     name='headline'  
                     onChange={handleChangepersonal}
                     placeholder='Headline'
                />
            </div>
            <div>
                <input type='text'
                     value={personaldata.phoneNo} 
                     name='phoneNo'  
                     onChange={handleChangepersonal}
                     placeholder='Phone Number'
                />
            </div>
            <div>
                <input type='Email' 
                    value={personaldata.email} 
                    name='email' 
                    onChange={handleChangepersonal}
                    placeholder='Email' 
                />
            </div>
            <div>
                <input type='text'
                     value={personaldata.linkedIn}
                     name='linkedIn'  
                     onChange={handleChangepersonal}
                     placeholder='LinkedIn' 
                />
            </div>
            <div> 
                 <textarea name='summary' 
                    value={personaldata.summary}  
                    onChange={handleChangepersonal}
                    placeholder='A summary of yourself/career'
                />   
            </div>
            <div>
                  <input type='text' 
                  value={personaldata.skills} 
                  name='skills' 
                  onChange={handleChangepersonal}
                  placeholder='skills'
                />
            </div>
        </form>
    </div>
  )
}

export default Personal