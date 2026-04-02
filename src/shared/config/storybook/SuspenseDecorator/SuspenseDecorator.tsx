import React, { FC, Suspense } from "react";

interface Props {
    children?: React.ReactNode;
}

export const SuspenseDecorator: FC<Props> = ({ children }) => (
    <Suspense>{children}</Suspense>
);
