import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('items');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || items state || items array of objects
  const [items, setitems]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');
  const [price, setPrice]=useState('');
  const [id, setId]=useState('');

  // form submit event
  const handleAddItemSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let item={
      title,
      price,
      id
    }
    setitems([...items,item]);
    setTitle('');
    setPrice('');
    setId('');
  }

  // delete item from LS
  const deleteItem=(id)=>{
    const filteredItems=items.filter((element,index)=>{
      return element.id !== id
    })
    setitems(filteredItems);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(items));
  },[items])

  return (
    <div className='wrapper'>
      <h1>Items</h1>
      <p>Add Items</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddItemSubmit}>
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Price</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            <br></br>
            <label>ID</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setId(e.target.value)} value={id}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {items.length>0&&<div>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View items={items} deleteItem={deleteItem}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setitems([])}>Remove All</button>
          </div>}
          {items.length < 1 && <div>No Items are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
