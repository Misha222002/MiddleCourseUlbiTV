/* eslint-disable i18next/no-literal-string */
import { FC, useCallback, useState } from "react";

import { BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui";
import { Card } from "@/shared/ui/Card";
import { Drawer } from "@/shared/ui/Drawer";
import { Input } from "@/shared/ui/Input";
import { Modal } from "@/shared/ui/Modal";
import { HStack, VStack } from "@/shared/ui/Stack";
import { StarRating } from "@/shared/ui/StarRating";
import { Text } from "@/shared/ui/Text";

import style from "./Rating.module.scss";

interface RatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const Rating: FC<RatingProps> = (props) => {
    const {
        className,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
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
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount);
    }, [onAccept, starsCount]);

    const modalContent = (
        <VStack gap="32">
            <Text title={feedbackTitle} />
            <Input
                data-testid="Rating.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={"Ваш отзыв"}
            />
            <HStack gap="16" justify="end">
                <Button
                    data-testid="Rating.Close"
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                >
                    Закрыть
                </Button>
                <Button data-testid="Rating.Send" onClick={acceptHandle}>
                    Отправить
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card
            data-testid="RatingCard"
            max
            className={classNames(style.rating, {}, [className])}
        >
            <VStack align={"center"} gap="8">
                <Text title={starsCount ? "Спасибо за оценку!" : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
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
