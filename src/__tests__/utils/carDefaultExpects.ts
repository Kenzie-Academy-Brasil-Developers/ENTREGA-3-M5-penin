import { TCar, TCarCreateBody } from "../../schemas/car.schemas";

export const carDefaultExpects = (data: TCar, expectData: TCarCreateBody) => {
   expect(data.name).toBe(expectData.name);
   expect(data.description).toBe(expectData.description);
   expect(data.brand).toBe(expectData.brand);
   expect(data.year).toBe(expectData.year);
   expect(data.km).toBe(expectData.km);
};