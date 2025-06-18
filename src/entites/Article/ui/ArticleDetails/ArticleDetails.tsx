/* eslint-disable */
import { FC, memo, useEffect } from "react";
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
import { Text, TextAlign } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

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
    console.log("style", style);
    useEffect(() => {
        dispatch(fetchArticleById(id));
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
        content = <div>ARTICLE DETAILS</div>;
    }
    return (
        <DynamicModelLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(style.articleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModelLoader>
    );
});
