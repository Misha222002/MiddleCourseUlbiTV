import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", () => {
    test("one param", () => {
        const params = getQueryParams({
            test: "value",
        });
        expect(params).toBe("?test=value");
    });
    test("multiply params", () => {
        const params = getQueryParams({
            test: "value",
            second: "2",
        });
        expect(params).toBe("?test=value&second=2");
    });
    test("d undefined", () => {
        const params = getQueryParams({
            test: "value",
            second: undefined,
        });
        expect(params).toBe("?test=value");
    });
});
