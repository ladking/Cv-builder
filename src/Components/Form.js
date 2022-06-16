import Personal from "./utility/Personal"
import Education from "./utility/Education"
import Experience from "./utility/Experience"


function Form() {

  return (
    <div className='form'>
        <Personal />
        <Education />
        <Experience />
        <br />
        
    </div>
  )
}

export default Form