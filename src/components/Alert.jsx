import React, { useEffect } from 'react'

const Alert = (props) => {
    const {massage,type,setAlert,list} = props

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setAlert({
                show:false,
                massage:"",
                type:""
            })
        },2000)
        return()=>clearTimeout(timeOut)
    },[list])

  return (
    <p className={`alert ${type}`}>{massage}</p>
  )
}

export default Alert