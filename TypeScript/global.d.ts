import "jest-extended-snapshot";

declare global {
    namespace jest {
        interface Matchers<R> {
            toVerifyAllCombinations(expected: string[], [], []): R;
        }
    }
}

export {};
