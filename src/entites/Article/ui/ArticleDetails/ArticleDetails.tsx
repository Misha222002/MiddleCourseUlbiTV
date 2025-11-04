/* eslint-disable */
import { FC, memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetails.module.scss";
import {
    DynamicModelLoader,
    ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import { articleDetailsReducer } from "../../model/slice/ArticleDetailsSlice";
import { fetchArticleById } from "entites/Article/model/services/fetchArticleById/fetchArticleById";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "entites/Article/model/selectors/ArticleDetails";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import CalendarIcon from "shared/assets/icons/calendar-20-20.svg";
import { Icon } from "shared/ui/Icon/Icon";
import {
    ArticleBlock,
    ArticleBlockType,
} from "entites/Article/model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={style.block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={style.block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        className={style.block}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={style.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={style.title} width={300} height={32} />
                <Skeleton className={style.skeleton} width={600} height={24} />
                <Skeleton
                    className={style.skeleton}
                    width="100%"
                    height={200}
                />
                <Skeleton
                    className={style.skeleton}
                    width="100%"
                    height={200}
                />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title="Произошла ошиюка при загрузке сети"
            />
        );
    } else {
        content = (
            <>
                <div className={style.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={style.avatar}
                    />
                </div>

                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    className={style.title}
                    size={TextSize.L}
                />
                <div className={style.articleInfo}>
                    <Icon Svg={EyeIcon} className={style.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={style.articleInfo}>
                    <Icon Svg={CalendarIcon} className={style.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }
    return (
        <DynamicModelLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(style.articleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModelLoader>
    );
});
