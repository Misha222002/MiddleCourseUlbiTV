import { useEffect } from "react";

export function useInitialEffect(callback: () => void, p0: never[]) {
    useEffect(() => {
        console.log("__PROJECT__", __PROJECT__);
        if (__PROJECT__ !== "storybook") {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
