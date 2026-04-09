import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import style from "./StarRating.module.scss";
import StarIcon from "../../assets/icons/star.svg";
import { Icon } from "../Icon/Icon";

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const start = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = (props) => {
    const { className, size = 30, onSelect, selectedStars = 0 } = props;
    const { t } = useTranslation();

    //  const [isHovered, setIsHovered] = useState(false);
    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(!!selectedStars);

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(style.starRating, {}, [className])}>
            {start.map((starNumber) => (
                <Icon
                    className={classNames(style.starIcon, {
                        [style.hovered]: currentStarCount >= starNumber,
                        [style.normal]: !(currentStarCount >= starNumber),
                        [style.selected]: isSelected,
                    })}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave()}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
