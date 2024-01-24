import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrivacyPolicyModal() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="link" onClick={handleShow} id="privacy-policy-btn" style={{ textDecoration: 'none', color: 'white' }}>
                Privacy Policy
            </Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Insert your privacy policy content here */}
                    <p>
                        Privacy Policy
                        General Use
                        The use of our website www.i-contest.eu is possible without providing personal data. We do not collect personal data (such as names, addresses, email addresses) from our users. We emphasize that data transmission over the Internet can generally have security gaps. Complete protection of data from third-party access is not possible.

                        Use of Cookies
                        Our website does not use cookies. Therefore, we do not store any information in the form of cookies on your device that could relate to your browsing behavior.

                        No Use of Google Analytics
                        We do not use Google Analytics or any other web analytics services. Therefore, no collection or processing of data about your usage behavior on our website takes place.

                        No Social Media Plugins
                        Our website does not include plugins for social networks such as Facebook, Twitter, Google+, or similar services. No data is transmitted to these networks by visiting our pages.

                        No Data Transfer to Third Parties
                        We do not transfer personal data to third parties and use your data exclusively for providing our services on www.i-contest.eu.

                        Your Rights: Access, Deletion, Blocking
                        You have the right to free information about your stored personal data, its origin and recipient, and the purpose of data processing. You also have the right to correction, blocking, or deletion of this data. For further questions on the subject of personal data, you can always contact us at the address given in the imprint.

                        Objection to Promotional Emails
                        The use of contact data published in the imprint for the transmission of unsolicited advertising and information materials is hereby rejected. We reserve the right to take legal action in case of unsolicited promotional information, such as spam emails.


                    </p>
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

export default PrivacyPolicyModal;
