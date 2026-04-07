import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { TextSize, Text } from "@/shared/ui/Text/Text";
import { AddCommentForm } from "@/features/addCommentForm";
import { CommentList } from "@/entites/Comment";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentForArticle } from "@/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { useSelector } from "react-redux";
import { getArticleComments } from "@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "@/pages/ArticleDetailsPage/model/selectors/comments";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (
    props,
) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <div className={classNames("", {}, [className])}>
            <Text size={TextSize.L} title="Комментарий" />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
    );
};
