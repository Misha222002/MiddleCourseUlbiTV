import { useTranslation } from "react-i18next";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.incremented());
    };

    const decriment = () => {
        dispatch(counterActions.decremented());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                {t("increment")}
            </Button>
            <Button onClick={decriment} data-testid="decriment-btn">
                {t("decriment")}
            </Button>
        </div>
    );
};
