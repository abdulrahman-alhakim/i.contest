import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

function PrivacyPolicyModal() {
    const { t } = useTranslation('components-PrivacyPolicyModal'); // Use the PrivacyPolicyModal namespace
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="link" onClick={handleShow} id="privacy-policy-btn" style={{ color: 'white', padding: "0" }}>
                {t('buttonText')}
            </Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{t('modalTitle')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Insert your privacy policy content here */}
                    <div>
                        <p className='fs-3'>{t('privacyPolicyHeader')}</p>
                        <p>{t('lastUpdated')}</p>
                        <p>{t('intro')}</p>
                        <p>{t('usage')}</p>

                        <p className='fs-3'>{t('interpretationAndDefinitions')}</p>
                        <p className='fs-4'>{t('interpretation')}</p>
                        <p>{t('interpretationText')}</p>

                        <p className='fs-4'>{t('definitions')}</p>
                        <p>{t('definitionsText')}</p>

                        <ul>
                            <li>{t('account')}</li>
                            <li>{t('affiliate')}</li>
                            <li>{t('company')}</li>
                            <li>{t('cookies')}</li>
                            <li>{t('country')}</li>
                            <li>{t('device')}</li>
                            <li>{t('personalData')}</li>
                            <li>{t('service')}</li>
                            <li>{t('serviceProvider')}</li>
                            <li>{t('usageData')}</li>
                            <li>{t('website')}</li>
                            <li>{t('you')}</li>
                        </ul>
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

export default PrivacyPolicyModal;
