import React from 'react';
import { useTranslation } from 'react-i18next';
import foto1 from '../images/book-engineering-svgrepo-com.svg';
import foto2 from '../images/purchase-books-svgrepo-com.svg';
import foto3 from '../images/construction-machine-crane-lift-svgrepo-com.svg';
import foto4 from '../images/maintenance-warning-svgrepo-com.svg';

interface TurnKeyServiceProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const TurnKeyService: React.FC<TurnKeyServiceProps> = ({ theme, setTheme }) => {
    const { t } = useTranslation('pages-TurnKeyService'); // Use the TurnKeyService namespace

    return (
        <section id='turnkey'>
            <div>
                <div className="d-flex justify-content-center align-items-center my-5">
                    <h2>{t('sectionTitle')}</h2>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column flex-sm-row gap-5 gap-md-5'>
                        <div className="card justify-content-center align-items-center border border-2 border-black rounded" style={{ width: '100%', maxWidth: '18rem' }}>
                            <div className='d-flex flex-column gap-4 p-3 ' style={{ backgroundColor: 'rgba(32,98,98,.8)' }}>
                                <img src={foto1} width={150} height={150} className="img-fluid m-3" alt="engineer" />
                                <h4 className="text-center text-light">{t('engineering')}</h4>
                            </div>
                        </div>
                        <div className="card justify-content-center align-items-center border border-2 border-black rounded" style={{ width: '100%', maxWidth: '18rem', backgroundColor: "rgba(32,98,98,.8)" }}>
                            <div className='d-flex flex-column gap-4 p-3 '>
                                <img src={foto2} width={150} height={150} className="img-fluid m-3" alt="purchasing" />
                                <h5 className="text-center text-light">{t('procurement')}</h5>
                            </div>
                        </div>
                        <div className="card justify-content-center align-items-center border border-2 border-black rounded" style={{ width: '100%', maxWidth: '18rem', backgroundColor: "rgba(32,98,98,.8)" }}>
                            <div className='d-flex flex-column gap-4 p-3 '>
                                <img src={foto3} width={150} height={150} className="img-fluid m-3" alt="construction" />
                                <h5 className="text-center text-light">{t('construction')}</h5>
                            </div>
                        </div>
                        <div className="card justify-content-center align-items-center border border-2 border-black rounded" style={{ width: '100%', maxWidth: '18rem', backgroundColor: "rgba(32,98,98,.8)" }}>
                            <div className='d-flex flex-column gap-4 p-3 '>
                                <img src={foto4} width={150} height={150} className="img-fluid m-3" alt="maintain" />
                                <h5 className="text-center text-light">{t('maintenance')}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center m-4">
                    <p>{t('description1')}</p>
                    <p>{t('description2')}</p>
                </div>
            </div>
        </section>
    );
}

export default TurnKeyService;
