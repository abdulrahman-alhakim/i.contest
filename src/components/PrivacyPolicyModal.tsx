import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

function PrivacyPolicyModal() {
    const { t, i18n } = useTranslation('components-PrivacyPolicyModal'); // Use the PrivacyPolicyModal namespace
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // Determine the text direction based on the current language
    const isRTL = i18n.language === 'ar'; // assuming 'ar' for Arabic, adjust based on your language codes
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
