// @ts-nocheck
/* eslint-disable */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
   className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props) => {
   const { className } = props;
   const { t } = useTranslation();

      return (
      <div className={classNames(style.articleImageBlockComponent, {}, [className])}>
      </div>
   );
};