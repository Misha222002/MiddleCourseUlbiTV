import { useState } from "react";
import * as classes from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    console.log(classes); // Добавьте это для отладки

    return (
        <div className={classes.btn}>
            {count}
            <button onClick={increment}>increment</button>
        </div>
    );
};