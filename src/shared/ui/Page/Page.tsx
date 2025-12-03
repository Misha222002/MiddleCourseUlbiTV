import { FC, memo, ReactNode, RefObject, useRef } from "react";

import style from "./Page.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef() as RefObject<HTMLDivElement>;
    const triggerRef = useRef() as RefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(style.page, {}, [className])}
        >
            {children}
            <div
                ref={triggerRef}
                style={{ height: "10px", background: "red" }}
            />
        </section>
    );
};

export default memo(Page);
