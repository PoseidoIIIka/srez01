import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import s from './Card.module.css'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Cards({ image, name, price, description, count }) {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('ФИО:', fullName);
        handleClose();
    };
    return (
        <>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image} className={s.img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <br />
                        {price} руб.
                    </Card.Text>
                    <div className="block">
                        {
                            count > 0 ? (
                                <Button variant="primary">В корзину</Button>
                            ) : (
                                <Button onClick={handleShow} variant="primary">Заказать</Button>
                            )
                        }
                        <p>Кол-во: {count}</p>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Форма заказа</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Введите ваш Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formFullName">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите ваше ФИО"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Отправить
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
