import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductHighlights: React.FC = () => {
  const { t } = useTranslation('pages-ProductHighlights1'); // Use the ProductHighlights namespace

  return (
    <div>
      <p className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
        {t('backgroundAndHighlights')}
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{t('highlight1')}</li>
        <li className="list-group-item">{t('highlight2')}</li>
        <li className="list-group-item">{t('highlight3')}</li>
        <li className="list-group-item">{t('highlight4')}</li>
        <li className="list-group-item">{t('highlight5')}</li>
        <li className="list-group-item">{t('highlight6')}</li>
      </ul>
    </div>
  );
}

export default ProductHighlights;
