import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

function ImpressumModal() {
    const { t, i18n } = useTranslation('components-ImpressumModal'); // Use the ImpressumModal namespace
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // Determine the text direction based on the current language
    const isRTL = i18n.language === 'ar'; // assuming 'ar' for Arabic, update this according to your language codes
    const direction = isRTL ? 'rtl' : 'ltr';

    return (
        <>
            <Button variant="link" onClick={handleShow} id="privacy-policy-btn" style={{ color: 'white', padding: "0" }}>
                {t('buttonText')}
            </Button>

            <Modal show={show} onHide={handleClose} size="lg" dir={direction}>
                <Modal.Header>
                    <Modal.Title>{t('modalTitle')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div dir={direction}>
                        <h3>{t('companyName')}</h3>
                        
                        <ul className="list-unstyled">
                            <li>{t('addressLine1')}</li>
                            <li>{t('addressLine2')}</li>
                            <li>{t('addressLine3')}</li>
                        </ul>

                        <p>{t('phone')}</p>
                        <p>{t('email')}</p>

                        <p>{t('ceo')}</p>

                        <p>{t('tradeRegister')}</p>
                        <p>{t('disputeResolution')} <a href={t('disputeLink')} target="_blank" rel="noopener noreferrer">{t('disputeLink')}</a> </p>
                        <p>{t('disputeNote')}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t('closeButton')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ImpressumModal;
