import {useContext} from 'react'
import {Context} from '../../Context'

function Eduform({eduHist}) {
    const {addEdu, deleteEdu, handleChangeEdu} = useContext(Context) 
  return (
    <div>
        <div>
            <input 
                placeholder='School'
                name='School'
                type='text'
                value={eduHist.School}
                onChange={(e) =>handleChangeEdu(e, eduHist.id)}
            />
             <input 
                placeholder='Course'
                name='Course'
                type='text'
                value={eduHist.Course}
                onChange={(e) =>handleChangeEdu(e, eduHist.id)}
            />
            <input 
                placeholder='Degree'
                name='Degree'
                type='text'
                value={eduHist.Degree}
                onChange={(e) =>handleChangeEdu(e, eduHist.id)}
            />
            <input 
                placeholder='From'
                name='From'
                type='text'
                value={eduHist.From}
                onChange={(e) =>handleChangeEdu(e, eduHist.id)}
            />
            <input 
                placeholder='To'
                name='To'
                type='text'
                value={eduHist.To}
                onChange={(e) =>handleChangeEdu(e, eduHist.id)}
            />
        </div>
        
        <button onClick={() => addEdu()}>Add</button>
      <button onClick={() => deleteEdu(eduHist.id)}>Delete</button>
    </div>
  )
}

export default Eduform