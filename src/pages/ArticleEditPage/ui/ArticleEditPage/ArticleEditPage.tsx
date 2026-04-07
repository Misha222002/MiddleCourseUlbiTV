import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import Page from "@/widgets/Page/Page";
import { useParams } from "react-router-dom";

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    const isEdit = Boolean(id);

    return (
        <Page>
            {isEdit
                ? "Редактирование статии с ID = " + id
                : "Создание новой статьи"}
        </Page>
    );
};

export default ArticleEditPage;
