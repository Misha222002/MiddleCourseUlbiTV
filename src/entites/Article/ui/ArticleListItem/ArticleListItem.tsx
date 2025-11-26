import {
    Article,
    ArticleBlockType,
    ArticleView,
} from "entites/Article/model/types/article";

import style from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme, Text } from "shared/ui";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import { Card } from "shared/ui/Card/Card";
import { useHover } from "shared/lib/hooks/useHover/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view } = props;

    const [isHover, bindHover] = useHover();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [navigate, article.id]);

    const types = (
        <Text text={article.type.join(", ")} className={style.types} />
    );

    const views = (
        <>
            <Text text={String(article.views)} className={style.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        );
        return (
            <div
                className={classNames(style.articleListItem, {}, [
                    className,
                    style[view.toLowerCase()],
                ])}
            >
                <Card>
                    <div className={style.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            text={article.user.username}
                            className={style.username}
                        />
                        <Text text={article.createdAt} className={style.date} />
                    </div>
                    <Text title={article.title} className={style.title} />
                    {types}
                    <img src={article.img} className={style.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={style.textBlock}
                        />
                    )}
                    <div className={style.footer}>
                        <Button
                            onClick={onOpenArticle}
                            theme={ButtonTheme.OUTLINE}
                        >
                            Читать далее...
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            {...bindHover}
            className={classNames(style.articleListItem, {}, [
                className,
                style[view.toLowerCase()],
            ])}
        >
            <Card onClick={onOpenArticle}>
                <div className={style.imageWrapper}>
                    <img src={article.img} className={style.img} />
                    <Text text={article.createdAt} className={style.date} />
                </div>
                <div className={style.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={style.title} />
            </Card>
        </div>
    );
};
