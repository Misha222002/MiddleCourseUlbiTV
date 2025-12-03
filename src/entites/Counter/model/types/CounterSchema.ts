export interface CounterSchema {
    value: number;
}

export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};

export type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
