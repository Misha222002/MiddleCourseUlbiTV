import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Comment } from "entites/Comment/model/types/comment";

import style from "./CommentCard.module.scss";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div>
                <div className={classNames(style.commentCard, {}, [className])}>
                    <div className={style.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton
                            height={16}
                            width={100}
                            className={style.username}
                        />
                    </div>
                    <Skeleton
                        width={"100%"}
                        height={50}
                        className={style.text}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(style.commentCard, {}, [className])}>
            <div className={style.header}>
                {comment?.user.avatar && (
                    <Avatar size={30} src={comment?.user.avatar} />
                )}
                <Text
                    className={style.username}
                    title={comment?.user.username}
                />
            </div>
            <Text className={style.text} text={comment?.text} />
        </div>
    );
});
