import React from 'react';
import { useTranslation } from 'react-i18next';
import "./AboutUsAcc.css";

const AboutUsAcc = () => {
    const { t, i18n } = useTranslation('components-aboutUsAcc');
    const isRTL = i18n.language === 'ar';

    const renderAccordionItem = (index: number, titleKey: string, contentKey: string, customContent?: React.ReactNode) => (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button 
                    className={`accordion-button collapsed ${isRTL ? 'flex-row-reverse justify-content-start' : ''}`}
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#flush-collapse${index}`}
                    aria-expanded="false" 
                    aria-controls={`flush-collapse${index}`}
                >
                    <span className={isRTL ? 'ms-2' : ''}>{index}. {t(titleKey)}</span>
                </button>
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