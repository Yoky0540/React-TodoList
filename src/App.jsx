import { useState } from 'react'
import './App.css'
import { v4 as uuid } from 'uuid';
import List from './components/List';
import Alert from './components/Alert';


function App() {

  const [name,setName] = useState("")
  const [list,setList] = useState([])

  const [alert,setAlert] = useState(
    {
      show:false,
      massage:"",
      type:""
    }
  )

  const [checkEditItem,setCheckEditItem] = useState(false)

  const [editId,setEditId] = useState('')

  const submitData = (e) =>{
    e.preventDefault()
    if(!name.trim()){
      setAlert({
        show:true,
        massage:"Please insert data!",
        type:"error"
      })
    }else if(checkEditItem && name){
      const newData = list.map((item)=>{
        if(item.id == editId){
          return {...item,title:name}
        }
        return item
      })

      setList(newData)
      setAlert({
        show:true,
        massage:"Edit data success",
        type:"success"
      })
      setEditId(null)
      setCheckEditItem(false)
      setName("")
    }else{
      const newItem = {
        id:uuid(),
        title:name
      }
      setList([...list,newItem])
      setAlert({
        show:true,
        massage:"Save data success",
        type:"success"
      })
      setName("")
    }
  }

  const removeItem = (id) =>{
    const newData = list.filter((item)=>item.id != id)
    setList(newData)
    setAlert({
      show:true,
      massage:"Delete data success",
      type:"error"
    })
  }
  
  const editItem = (id) =>{
    setCheckEditItem(true)
    const selectData = list.find((item)=>item.id==id)
    setEditId(id)
    setName(selectData.title)
  }  

  return (
    <section className='container'>
      <h1>TodoList App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
      <form className='form-group' onSubmit={submitData}>
        <div className="form-control">
          <input type="text" className='text-input' 
            onChange={(e)=>setName(e.target.value)} 
            value={name} required
          />
          
          <button type="submit" className='submit-btn'>
            {checkEditItem?"Edit List":"Add List"}
          </button>
        </div>
      </form>
      <section className='list-container'>
        {list.map((data,index)=>{
          return <List key={index} {...data} removeItem={removeItem} editItem={editItem} />
        })}
      </section>
    </section>
  )
}

export default App
