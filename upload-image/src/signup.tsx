import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function Signup() {
  const [img, setImg] = useState<File | null>(null)
  const formdata = new FormData()
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    if(e.target.files && e.target.files[0])
    {

      setImg(e.target.files[0])
      console.log("true 1")
      
    }
  }
  useEffect(()=>{
    console.log("img - ")
    console.log(img)
    if(img){
      formdata.append("profile", img)
    }
  },[img, formdata])
  
  
  async function handleSubmit(e){
    e.preventDefault()
    try{
      if(formdata){
        console.log("formdata exists- ")
        const response = await axios.post("http://localhost:3000/signup", formdata, {
          headers: {"Content-Type": "multipart/form-data"}
        })
        console.log(response)
      }

    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <form>
        <input type='file' accept='image/*' onChange={handleChange}></input>
        <button type='submit' onClick={handleSubmit}> submit</button>
      </form>
    </div>
  )
}
export default Signup
