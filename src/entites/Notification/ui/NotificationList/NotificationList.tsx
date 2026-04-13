import { FC } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Skeleton } from "@/shared/ui/Skeleton";
import { VStack } from "@/shared/ui/Stack";

import { useGetNotificationsQuery } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";

interface NotificationListProps {
    className?: string;
}

export const NotificationList: FC<NotificationListProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading } = useGetNotificationsQuery(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack gap="16" className={classNames("", {}, [className])}>
                <Skeleton width={"100%"} border="8px" height={"80px"} />
                <Skeleton width={"100%"} border="8px" height={"80px"} />
                <Skeleton width={"100%"} border="8px" height={"80px"} />
            </VStack>
        );
    }

    return (
        <VStack gap="16" className={classNames("", {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
};
