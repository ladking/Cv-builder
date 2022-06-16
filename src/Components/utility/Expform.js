import React from 'react'
import {useContext} from 'react'
import { Context } from '../../Context'

function Expform({exphist}) {
    const {addExp, deleteExp, handleChangeExp} = useContext(Context)
  return (
         <div>
        <div>
            <input 
                placeholder='Company'
                name='Company'
                type='text'
                value={exphist.Company}
                onChange={(e) =>handleChangeExp(e, exphist.id)}
            />
             <input
                placeholder='Position'
                name='Position'
                type='text'
                value={exphist.Position}
                onChange={(e) =>handleChangeExp(e, exphist.id)}
            />
            <input
                placeholder='From'
                name='From'
                type='text'
                value={exphist.From}
                onChange={(e) =>handleChangeExp(e, exphist.id)}
            />
            <input 
                placeholder='To'
                name='To'
                type='text'
                value={exphist.To}
                onChange={(e) =>handleChangeExp(e, exphist.id)}
            />
             <textarea
                placeholder='Description'
                name='Description'
                value={exphist.Description}
                onChange={(e) =>handleChangeExp(e, exphist.id)}
                />
        </div>
        
        <button onClick={() => addExp()}>Add</button>
      <button onClick={() => deleteExp(exphist.id)}>Delete</button>
    </div>
  )
}

export default Expform