import { useEffect } from "react";

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        console.log("__PROJECT__", __PROJECT__);
        if (__PROJECT__ !== "storybook") {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
