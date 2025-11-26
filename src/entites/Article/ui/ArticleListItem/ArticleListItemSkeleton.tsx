import { ArticleView } from "entites/Article/model/types/article";

import style from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (
    props: ArticleListItemSkeletonProps,
) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div
                className={classNames(style.articleListItem, {}, [
                    className,
                    style[view.toLowerCase()],
                ])}
            >
                <Card>
                    <div className={style.header}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton
                            width={150}
                            height={16}
                            className={style.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={style.date}
                        />
                    </div>
                    <Skeleton width={250} height={24} className={style.title} />
                    <Skeleton height={200} className={style.img} />

                    <div className={style.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(style.articleListItem, {}, [
                className,
                style[view.toLowerCase()],
            ])}
        >
            <Card>
                <div className={style.imageWrapper}>
                    <Skeleton width={200} height={200} className={style.img} />
                </div>
                <div className={style.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} />
            </Card>
        </div>
    );
};
