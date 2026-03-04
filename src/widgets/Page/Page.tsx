import { FC, memo, ReactNode, RefObject, useRef, UIEvent } from "react";

import style from "./Page.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getSaveScrollByPath, saveScrollActions } from "features/saveScroll";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef(null) as unknown as RefObject<HTMLDivElement>;
    const triggerRef = useRef(null) as unknown as RefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(getSaveScrollByPath(pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            saveScrollActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(style.page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? (
                <div className={style.trigger} ref={triggerRef} />
            ) : null}
        </section>
    );
};

export default memo(Page);
