import { HTMLAttributeAnchorTarget } from "react";

import { useNavigate } from "react-router-dom";

import { getRouteArticleDetails } from "@/app/providers/router/config/routeConfig";
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useHover } from "@/shared/lib/hooks/useHover/useHover";
import { Button, ButtonTheme, Text } from "@/shared/ui";
import { AppImage } from "@/shared/ui/AppImage";
import { AppLink } from "@/shared/ui/AppLink";
import { Avatar } from "@/shared/ui/Avatar";
import { Card } from "@/shared/ui/Card";
import { Icon } from "@/shared/ui/Icon";
import { Skeleton } from "@/shared/ui/Skeleton";

import style from "./ArticleListItem.module.scss";
import {
    Article,
    ArticleBlockType,
    ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view, target } = props;

    const [isHover, bindHover] = useHover();
    const navigate = useNavigate();

    const types = (
        <Text text={article?.type?.join(", ")} className={style.types} />
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
                data-testid={"ArticleListItem"}
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
                    <AppImage
                        fallback={<Skeleton width={"100%"} height={250} />}
                        src={article.img}
                        className={style.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={style.textBlock}
                        />
                    )}
                    <div className={style.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                Читать далее...
                            </Button>
                        </AppLink>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            {...bindHover}
            to={getRouteArticleDetails(article.id)}
            className={classNames(style.articleListItem, {}, [
                className,
                style[view.toLowerCase()],
            ])}
            data-testid={"ArticleListItem"}
        >
            <Card>
                <div className={style.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        alt={article.img}
                        src={article.img}
                        className={style.img}
                    />
                    <Text text={article.createdAt} className={style.date} />
                </div>
                <div className={style.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={style.title} />
            </Card>
        </AppLink>
    );
};
