import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { TextSize } from "shared/ui/Text/Text";
import { ArticleList } from "entites/Article";
import { VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { useGetArticleRecommendationsListQuery } from "../../api/articleRecommendationApi";

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const { isLoading, data: articles } =
            useGetArticleRecommendationsListQuery(3);

        if (isLoading) return <Text text={t("Загрузка")} />;

        return (
            <VStack gap="8" className={classNames("", {}, [className])}>
                <Text size={TextSize.L} title={t("Рекомендуем")} />
                <ArticleList articles={articles || []} target="_blank" />
            </VStack>
        );
    },
);
