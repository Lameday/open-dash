import { useTranslation } from 'react-i18next';

export const OpenDashboard = () => {
    const { t } = useTranslation();
    return <h1>{t('dashboard.title')}</h1>;
};
