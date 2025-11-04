/* eslint-disable */
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleTextBlockComponent.module.scss";
import { ArticleTextBlock } from "entites/Article/model/types/article";
import { Text } from "shared/ui";

interface ArticleTextBlockComponentProps {
    className?: string;
    block?: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
    memo((props) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(style.articleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block?.title && (
                    <Text title={block.title} className={style.title} />
                )}
                {block?.paragraphs.map((paragraph, index) => (
                    <Text
                        key={index}
                        text={paragraph}
                        className={style.paragraph}
                    />
                ))}
            </div>
        );
    });
