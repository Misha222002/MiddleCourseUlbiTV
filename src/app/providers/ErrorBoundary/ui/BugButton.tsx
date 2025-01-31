import { Button } from "shared/ui";
import { useEffect, useState } from "react";

//Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError((prev) => !prev);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={throwError}
            // eslint-disable-next-line i18next/no-literal-string
        >
            throw Error
        </Button>
    );
};
