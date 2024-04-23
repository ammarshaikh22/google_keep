import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const List = (props) => {
    return (
                <div className='list-div'>
                    <ol>
                        <li key={props.key} className='text-info' style={{ fontSize: "22px" }}>{props.task.title}</li>
                        <li key={props.key} style={{ fontSize: "16px" }}>{props.task.description}</li>
                    </ol>
                    <Button className='btn btn-danger'>➖</Button>
                </div>
    )
}
