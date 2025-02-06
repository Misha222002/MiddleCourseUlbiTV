import { classNames } from "shared/lib/classNames/classNames";
import style from "./PageLoader.module.scss";
import { Loader } from "../Loader/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(style.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
