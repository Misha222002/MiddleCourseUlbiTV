/* eslint-disable i18next/no-literal-string */
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import style from "./Rating.module.scss";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonTheme } from "@/shared/ui";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const Rating: FC<RatingProps> = (props) => {
    const { className, feedbackTitle, hasFeedback, onAccept, onCancel, title } =
        props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState("");

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(startCount, feedback);
    }, [feedback, onAccept, startCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(startCount);
    }, [onAccept, startCount]);

    const modalContent = (
        <VStack gap="32">
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={"Ваш отзыв"}
            />
            <HStack gap="16" justify="end">
                <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                    Закрыть
                </Button>
                <Button onClick={acceptHandle}>Отправить</Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={classNames(style.rating, {}, [className])}>
            <VStack align={"center"} gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen}>{modalContent}</Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
};
