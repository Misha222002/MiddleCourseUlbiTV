// @ts-nocheck
/* eslint-disable */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
   className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props) => {
   const { className } = props;
   const { t } = useTranslation();

      return (
      <div className={classNames(style.articleCodeBlockComponent, {}, [className])}>
      </div>
   );
};