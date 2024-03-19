import { ZodError, z } from "zod";

export const validUpdateSchemaMock = z.object({
    name: z.string().min(1),
    description: z.string().min(1).nullable(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().positive()
});

export const validUpdateBodyMock = {
    bodyData: {
        name: "Car name updated",
        description: "Car description updated",
        brand: "Car brand updated",
        year: 2022,
        km: 20000
    },
    expectedValue: {
        name: "Car name updated",
        description: "Car description updated",
        brand: "Car brand updated",
        year: 2022,
        km: 20000
    },
};
export const invalidUpdateBodyMock = {
    bodyData: {},
    expectedValue: ZodError,
};