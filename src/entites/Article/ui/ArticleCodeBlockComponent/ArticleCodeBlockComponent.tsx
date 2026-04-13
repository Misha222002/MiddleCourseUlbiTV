import { memo } from "react";

import { ArticleCodeBlock } from "@/entites/Article/model/types/article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Code } from "@/shared/ui/Code";

import style from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(style.articleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code text={block.code} />
            </div>
        );
    },
);
