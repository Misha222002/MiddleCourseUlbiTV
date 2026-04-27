import "@testing-library/jest-dom";
import { jest } from "@jest/globals";
import "@testing-library/react";
import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextDecoder, TextEncoder });
jest.mock("axios", () => ({
    create: () => ({
        get: jest.fn(),
        post: jest.fn(),
        put: jest.fn(),
        patch: jest.fn(),
        delete: jest.fn(),
        interceptors: {
            request: {
                use: jest.fn(),
                eject: jest.fn(),
            },
            response: {
                use: jest.fn(),
                eject: jest.fn(),
            },
        },
    }),
}));

// Мок для fetchBaseQuery (чтобы убрать предупреждение)
jest.mock("@reduxjs/toolkit/query/react", () => ({
    ...(jest.requireActual("@reduxjs/toolkit/query/react") as object),
    fetchBaseQuery: jest.fn(() => jest.fn()),
}));
