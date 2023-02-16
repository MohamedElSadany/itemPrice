import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({items,deleteItem}) => {
    
    return items.map(item=>(
        
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td className='delete-btn' onClick={()=>deleteItem(item.id)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
