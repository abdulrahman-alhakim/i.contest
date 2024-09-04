import React from 'react';
import { useTranslation } from 'react-i18next';
import "./AboutUsAcc.css";

const AboutUsAcc = () => {
    const { t } = useTranslation('components-aboutUsAcc');

    return (
        <div className="accordion custom-accordion" id="accordionFlushExample">
            {/* Overview Section */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <div>
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                            bs-accordion-color="secondary"
                        >
                            1. {t('overviewTitle')}
                        </button>
                    </div>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p dangerouslySetInnerHTML={{ __html: t('overviewContent') }}></p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        2. {t('missionTitle')}
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        {t('missionContent')}
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        3. {t('visionTitle')}
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        {t('visionContent')}
                    </div>
                </div>
            </div>

            {/* Core Services Section */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                        4. {t('coreServicesTitle')}
                    </button>
                </h2>
                <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
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
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                        5. {t('valuesTitle')}
                    </button>
                </h2>
                <div id="flush-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul>
                            {((Array.isArray(t('valuesContent', { returnObjects: true }))
                                ? t('valuesContent', { returnObjects: true })
                                : []) as Array<{ title: string; content: string }>).map((value, index) => (
                                    <li key={index}>
                                        <span className='fw-bold'>{value.title}:</span> {value.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sustainability Section */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                        6. {t('sustainabilityTitle')}
                    </button>
                </h2>
                <div id="flush-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        {t('sustainabilityContent')}
                    </div>
                </div>
            </div>

            {/* Innovation Section */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                        7. {t('innovationTitle')}
                    </button>
                </h2>
                <div id="flush-collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        {t('innovationContent')}
                    </div>
                </div>
            </div>

            {/* Customer-Centric Approach Section */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                        8. {t('customerApproachTitle')}
                    </button>
                </h2>
                <div id="flush-collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        {t('customerApproachContent')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsAcc;
