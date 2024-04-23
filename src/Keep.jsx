import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
export const Keep = () => {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow((!show) ? true : false)
    }

    const [data, setData] = useState({
        title: "",
        description: ""
    });

    const showData = (e) => {
        setData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const [task, setTask] = useState([]);

    const addTask = () => {
        setTask((prev) => [...prev, data]);
        setData({ title: "", description: "" });
    }
    return (
        <section className="mt-5">
            <Container>
                <Row className='justify-content-center flex-column align-items-lg-center '>

                    <input required type="text" name="title" className='bg-white text-dark'
                        style={{
                            width: "450px",
                            height: "60px",
                            boxShadow: "-17px 13px 36px -10px rgba(0,0,0,0.43)",
                            border: "none",
                        }}
                        placeholder="Title" onClick={toggle} onChange={showData} value={data.title} />

                    <Row className='justify-content-center align-items-lg-center '>

                        <textarea autoComplete='off' required name="description" className='bg-white text-dark' placeholder="Take a note..." {...show ? {
                            style: {
                                display: "block",
                                width: "450px",
                                height: "100px",
                                resize: "none",
                                border: "none",
                                marginTop: "10px",
                                boxShadow: "-17px 13px 36px -10px rgba(0,0,0,0.43)"
                            }
                        } : { style: { display: "none" } }} onChange={showData} value={data.description} />

                        <button className='btn btn-info mt-5'
                            {...show ? {
                                style: {
                                    display: "block",
                                    maxWidth: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    position: "absolute",
                                    right: "420px",
                                    padding: "0"
                                }
                            } : { style: { display: "none" } }} onClick={addTask}>➕</button>

                    </Row>
                </Row>
            </Container>
            <Container>
                <Row>
                    {task.map((task, index) => {
                        return (
                            <div className='list-div'>
                                <ol>
                                    <Button >🗑️</Button>
                                    <li key={index} className='text-info' style={{ fontSize: "22px" }}>{task.title}</li>
                                    <li key={index} style={{ fontSize: "16px" }}>{task.description}</li>
                                </ol>
                            </div>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}
