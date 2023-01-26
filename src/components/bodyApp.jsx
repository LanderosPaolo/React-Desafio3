import { useState } from 'react';
import { dataBase } from './dataBase';
import ButtonA from './buttonA';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CloseButton from 'react-bootstrap/CloseButton';


const BodyApp = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [query, setQuery] = useState('')
    const [list, setList] = useState(dataBase)
    const [contador, setContador] = useState(4);
    const [disable, setDisable] = useState(true)

    const inactive = () => {
        setDisable(name === '' || mail === '')
    }

    const sendData = (e) => {
        e.preventDefault()
        setList([...list, { id: contador.toString(), nombre: name, correo: mail }])
        setContador(contador + 1)
        setName('')
        setMail('')
    }

    const deleted = (c) => {
        const filter = list.filter(e => e.id !== c.id)
        setList(filter)
    }

    return (
        <>
            <Navbar className="bg-dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='text-light'>Buscador de colaboradores</Navbar.Brand>
                    <Navbar.Collapse className='justify-content-end'>
                        <Form className="d-flex">
                            <Form.Control
                                onChange={e => setQuery(e.target.value)}
                                type="search"
                                placeholder="Search. . ."
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Form onSubmit={sendData}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Nombre del colaborador</Form.Label>
                    <Form.Control onChange={e => {
                                                setName(e.target.value)
                                                inactive()}} 
                                                value={name} 
                                                type="text" 
                                                placeholder="Ingrese el nombre del colaborador" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo del colaborador</Form.Label>
                    <Form.Control onChange={e => {
                                                setMail(e.target.value) 
                                                inactive()}} 
                                                value={mail} 
                                                type="email" 
                                                placeholder="Ingresa el correo del colaborador" />
                </Form.Group>
                <ButtonA disable={disable} setDisable={setDisable}/>
            </Form>
            <hr />
            <h2 className='listTitle'>Lista de colaboradores</h2>
            <ul>
                {list.filter(data => data.nombre.toLowerCase().includes(query)).map(data => <li
                    key={data.id}
                    onClick={() => console.log(data)}>
                    {data.nombre} - {data.correo}
                    <CloseButton className='pt-2 delete-button' onClick={() => deleted(data)} />
                </li>)}
            </ul>
        </>
    )
}

export default BodyApp;