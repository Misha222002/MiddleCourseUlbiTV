import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Comment } from "entites/Comment/model/types/comment";
import { Text } from "shared/ui";
import { CommentCard } from "../CommentCard/CommentCard";

import style from "./CommentList.module.scss";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    return (
        <div className={classNames(style.Text, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={style.comment}
                        comment={comment}
                    />
                ))
            ) : (
                <Text text="Комментарии отсутствуют" />
            )}
        </div>
    );
});
