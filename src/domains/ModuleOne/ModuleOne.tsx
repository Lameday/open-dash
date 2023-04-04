import { useTranslation } from 'react-i18next';

export const ModuleOne = () => {
    const { t } = useTranslation();
    return <div>{t('moduleOne.title')}</div>;
};
