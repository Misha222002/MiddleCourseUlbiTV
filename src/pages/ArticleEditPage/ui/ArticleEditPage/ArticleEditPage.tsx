import { FC } from "react";

import { useParams } from "react-router-dom";

import Page from "@/widgets/Page/Page";

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
