import React from 'react'
import Button from 'react-bootstrap/Button';

export const List = (props) => {
    return (
        <div className='list-div'>
            <ol>
                <li key={props.key} className='text-info' style={{ fontSize: "22px" }}>{props.task.title}</li>
                <li key={props.key} style={{ fontSize: "16px" }}>{props.task.description}</li>
            </ol>
            <Button onClick={() => props.onDelete(props.key)}>➖</Button>
        </div>
    )
}
