import React from 'react'
import{useState} from 'react'
import { nanoid } from 'nanoid'

const Context = React.createContext()

function Contextcomp(props) {
    const [personaldata, setpersonalData] =useState({
        firstname:'',
        lastname:'',
        headline:'',
        phoneNo:'',
        email:'',
        linkedIn:'',
        summary:'',
        skills:'',
    })
    const [eduData, setEdudata] = useState([
        {
            id: nanoid(),
            School:'',
            Course:'',
            Degree:'',
            From:'',
            To:'',
        }
    ])
    const [ExperienceData, setExpData] = useState([
        {
            id:nanoid(),
            Company:'',
            Position:'',
            From:'',
            To:'',
            Description:'',

        }
    ])
    function handleChangeExp(e, id){
        const {name, value} = e.target

        const newData =  ExperienceData.map(prev => {
         if(prev.id === id){
             return {...prev, [name]:value}
         }
         return prev
        })
        setExpData(newData)
       }
    
    function deleteExp(id){
        if(ExperienceData.length === 1){
            return
        }
        setExpData(prevData => prevData.filter(data => data.id !== id))
    }
    function addExp(){
        const newExp = {
            id:nanoid(),
            Company:'',
            Position:'',
            From:'',
            To:'',
            Description:'',
        }
        setExpData(prevData => [...prevData, newExp])
      }
    
    function handleChangepersonal(e){
        const {name, value} = e.target
        setpersonalData((prev) => (
            {
                ...prev,
                [name]:value
            }
        ))
      }
      function addEdu(){
        const newEdu = {
            id: nanoid(),
            Course:'',
            School:'',
            Degree:'',
            From:'',
            To:'',
        }
        setEdudata(prevData => [...prevData, newEdu])
      }

      function deleteEdu(id){
        if(eduData.length === 1){
            return
        }
        setEdudata(prevData => prevData.filter(data => data.id !== id))
      }

      function handleChangeEdu(e, id){
        const {name, value} = e.target

       const newData =  eduData.map(prev => {
        if(prev.id === id){
            return {...prev, [name]:value}
        }
        return prev
       })
       setEdudata(newData)
      }
  return (
    <Context.Provider value={{personaldata, handleChangepersonal, eduData, ExperienceData,
                                addEdu, deleteEdu, handleChangeEdu, addExp, deleteExp, handleChangeExp
                            }}>
        {props.children}
    </Context.Provider>
  )
}

export {Contextcomp, Context}