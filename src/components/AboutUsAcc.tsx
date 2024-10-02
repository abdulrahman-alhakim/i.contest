import React from 'react';
import { useTranslation } from 'react-i18next';
import "./AboutUsAcc.css";

const AboutUsAcc = () => {
    const { t, i18n } = useTranslation('components-aboutUsAcc');
    const isRTL = i18n.language === 'ar';
    const isLTR = i18n.language === 'en';

    const renderAccordionItem = (index: number, titleKey: string, contentKey: string, customContent?: React.ReactNode) => (
        <div className="accordion-item">
            <h2 className="accordion-header">
                {isRTL ? (
                    <button
                        className={`accordion-button collapsed d-flex w-100 ${isRTL ? 'flex-row-reverse' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`#flush-collapse${index}`}
                    >
                        {/* Custom dropdown icon on the far left */}
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <rect x="0" fill="none" width="24" height="24" />
                                <g>
                                    <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586" />
                                </g>
                            </svg>
                        </span>

                        {/* Text taking up the rest of the space */}
                        <span className={` ${isRTL ? 'flex-grow-1 text-end' : ''}`}>
                            {index}. {t(titleKey)}
                        </span>
                    </button>
                ) : (
                    // <button
                    //     className="accordion-button collapsed"
                    //     type="button"
                    //     data-bs-toggle="collapse"
                    //     data-bs-target={`#flush-collapse${index}`}
                    //     aria-expanded="false"
                    //     aria-controls={`flush-collapse${index}`}
                    // >
                    //     <span>{index}. {t(titleKey)}</span>
                    // </button>
                    <button
                        className={`accordion-button collapsed d-flex w-100 ${isLTR ? 'flex-row' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`#flush-collapse${index}`}
                    >
                        {/* Text taking up the rest of the space */}
                        <span className={` ${isLTR ? 'flex-grow-1 text-start' : ''}`}>
                            {index}. {t(titleKey)}
                        </span>

                        {/* Custom dropdown icon on the far left */}
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <rect x="0" fill="none" width="24" height="24" />
                                <g>
                                    <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586" />
                                </g>
                            </svg>
                        </span>
                    </button>
                )}
            </h2>
            <div id={`flush-collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    {customContent || t(contentKey)}
                </div>
            </div>
        </div>
    );

    return (
        <div className={`accordion custom-accordion ${isRTL ? 'text-end' : ''}`} id="accordionFlushExample">
            {renderAccordionItem(1, 'overviewTitle', 'overviewContent',
                <p dangerouslySetInnerHTML={{ __html: t('overviewContent') }}></p>
            )}
            {renderAccordionItem(2, 'missionTitle', 'missionContent')}
            {renderAccordionItem(3, 'visionTitle', 'visionContent')}
            {renderAccordionItem(4, 'coreServicesTitle', 'coreServicesContent',
                <ul className="list-group list-group-flush">
                    {['microgrids', 'chargingStations', 'pvSystems', 'cellTowers'].map((service, idx) => (
                        <li key={idx} className="list-group-item">
                            <ul>
                                <span className='fw-bold'>{t(`coreServicesContent.${service}.title`)}</span>
                                {((Array.isArray(t(`coreServicesContent.${service}.items`, { returnObjects: true }))
                                    ? t(`coreServicesContent.${service}.items`, { returnObjects: true })
                                    : []) as string[]).map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
            {renderAccordionItem(5, 'valuesTitle', 'valuesContent',
                <ul>
                    {((Array.isArray(t('valuesContent', { returnObjects: true }))
                        ? t('valuesContent', { returnObjects: true })
                        : []) as Array<{ title: string; content: string }>).map((value, index) => (
                            <li key={index}>
                                <span className='fw-bold'>{value.title}:</span> {value.content}
                            </li>
                        ))}
                </ul>
            )}
            {renderAccordionItem(6, 'sustainabilityTitle', 'sustainabilityContent')}
            {renderAccordionItem(7, 'innovationTitle', 'innovationContent')}
            {renderAccordionItem(8, 'customerApproachTitle', 'customerApproachContent')}
        </div>
    );
};

export default AboutUsAcc;