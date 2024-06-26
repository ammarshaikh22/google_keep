import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { List } from './List';
import AddBoxIcon from '@mui/icons-material/AddBox';
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
    const remove = (id) => {
        setTask((pre) => {
            return pre.filter((task, index) => {
                return index !== id
            })
        })
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

                        <AddBoxIcon
                            {...show ? {
                                style: {
                                    fontSize: "60px",
                                    display: "block",
                                    position: "absolute",
                                    right: "410px",
                                    bottom: "240px",
                                }
                            } : { style: { display: "none" } }} onClick={addTask} />

                    </Row>
                </Row>
            </Container>
            <Container style={{ margin: "20px auto" }}>
                <Row>
                    {task.map((task, index) => {
                        return <List key={index} task={task} id={index} remove={remove} />
                    })}
                </Row>
            </Container>
        </section>
    )
}
