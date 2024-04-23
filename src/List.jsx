import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const List = (props) => {

    return (
        <div className='list-div'>
            <ol>
                <li id={props.id} className='text-info' style={{ fontSize: "22px" }}>{props.task.title}</li>
                <li id={props.id} style={{ fontSize: "16px" }}>{props.task.description}</li>
            </ol>
            <DeleteIcon onClick={() => props.remove(props.id)} style={{ width: "40px", height: "40px", padding: "0" }}>➖</DeleteIcon>
        </div>
    )
}
