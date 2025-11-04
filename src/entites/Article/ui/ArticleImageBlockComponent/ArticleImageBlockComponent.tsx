/* eslint-disable */
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleImageBlockComponent.module.scss";
import { ArticleImageBlock } from "entites/Article/model/types/article";
import { Text } from "shared/ui";
import { TextAlign } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
    memo((props) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(style.articleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img alt={block.title} src={block.src} className={style.img} />
                {block.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        );
    });
