import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { Button } from "@/shared/ui";

import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useCounterActions } from "../model/slice/counterSlice";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { add, decremented, incremented } = useCounterActions();

    const { t } = useTranslation();

    const increment = () => {
        incremented();
    };

    const decriment = () => {
        decremented();
    };

    const addFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={addFive} data-testid="increment-btn">
                {t("add 5")}
            </Button>
            <Button onClick={increment} data-testid="increment-btn">
                {t("increment")}
            </Button>
            <Button onClick={decriment} data-testid="decriment-btn">
                {t("decriment")}
            </Button>
        </div>
    );
};
