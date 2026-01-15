import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import style from "./ArticleCreatePage.module.scss";

interface ArticleCreatePageProps {
    className?: string;
}

const ArticleCreatePage: FC<ArticleCreatePageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(style.articleCreatePage, {}, [className])}>
            ArticleCreatePage
        </div>
    );
};

export default ArticleCreatePage;
