/* eslint-disable no-return-await */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CardSet from '../Card/CardSet';

function Train() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getSets().then((data) => setCards(data));
    }, []);

    async function getSets() {
        const url = 'http://localhost:3000';
        const endpoint = 'sets';
        const response = await fetch(`${url}/${endpoint}`);

        return await response.json();
    }

    return (
        <Row xs={1} sm={2} md={4} className="g-4">
            {cards.map(({ id, name, level, quantity, image }) => (
                <Col key={id}>
                    <CardSet id={id} name={name} level={level} quantity={quantity} image={image} />
                </Col>
            ))}
        </Row>
    );
}

export default Train;
