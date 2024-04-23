import React from 'react'
import Button from 'react-bootstrap/Button';

export const List = (props) => {

    return (
        <div className='list-div'>
            <ol>
                <li id={props.id} className='text-info' style={{ fontSize: "22px" }}>{props.task.title}</li>
                <li id={props.id} style={{ fontSize: "16px" }}>{props.task.description}</li>
            </ol>
            <Button onClick={() => props.remove(props.id)} style={{ width: "40px", height: "40px", padding: "0" }}>➖</Button>
        </div>
    )
}
