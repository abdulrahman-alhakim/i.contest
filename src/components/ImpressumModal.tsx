import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImpressumModal() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="link" onClick={handleShow} id="privacy-policy-btn" style={{ textDecoration: 'none', color: 'white' }}>
                Impressum
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Impressum</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Insert your privacy policy content here */}
                    <div>
                        <h3>I-CONTEST UG</h3>
                            <hr/>


                        <p>Hauptstraße 30a</p>
                        <p>38446 Wolfsburg</p>
                        <p>Germany</p>

                        <p>Tel: +49 157 5171551</p>
                        <p>Email: info@i-contest.eu</p>

                        <p>CEO: Dr.-Eng. Wolfgang Hanoun</p>

                        {/* <p>VAT id number: xxxxxxxxx</p> */}

                        <p>Handelsregister: Amtsgericht Hildesheim HRB 204599</p>
                        <p>EU Commission platform for online dispute resolution: <a href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a> </p>
                        <p>We are neither obliged nor willing to participate in a dispute resolution procedure before a consumer arbitration board.</p>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ImpressumModal;

