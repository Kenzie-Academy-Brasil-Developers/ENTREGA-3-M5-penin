import { ZodError, z } from "zod";

export const validCreateSchemaMock = z.object({
  name: z.string().min(1),
  description: z.string().min(1).nullable(),
  brand: z.string().min(1),
  year: z.number().positive(),
  km: z.number().positive()
});

export const validCreateBodyMock = {
  bodyData: {
    name: "Car name",
    description: "Car description",
    brand: "Car brand",
    year: 2023,
    km: 10000
  },
  expectedValue: {
    name: "Car name",
    description: "Car description",
    brand: "Car brand",
    year: 2023,
    km: 10000
  },
};
export const invalidCreateBodyMock = {
  bodyData: {},
  expectedValue: ZodError,
};