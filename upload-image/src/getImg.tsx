
import axios from 'axios'
import React, { useState } from 'react'

const GetImg = () => {

    const [img, setImg] = useState<String | null>(null)
    const [id, setId] = useState<String>()

    async function getImg() {

        try{
            console.log(id)
            const response = await axios.get("http://localhost:3000/get-img",{params:{id},responseType:"blob"})
            console.log(response.data)
            const url = URL.createObjectURL(response.data)
            // console.log(url)
            setImg(url)

        }
        catch(error){
            console.log(error)
        }
    }
    
  return (
    <div>
      <input type='text' placeholder='img id' onChange={(e)=>setId(e.target.value)}/>
      <div className='div' onClick={getImg} >get img</div>
      <img src={img as string} />
    </div>
  )
}

export default GetImg
