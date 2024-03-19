import { CarServices } from "../../services/car.services";
import { prismaMock } from "../__mocks__/prisma";
import { carListMock, carMock } from "../__mocks__/car.mocks";


describe("Unit test: get one car", () => {
    test("get one car should work correctly", async () => {
        prismaMock.car.findFirst.mockResolvedValue(carListMock[0]);
        const carServices = new CarServices();

        const data = await carServices.getOne(carMock.id);

        expect(data?.id).toBe(carListMock[0].id);
        expect(data?.name).toBe(carListMock[0].name);
        expect(data?.description).toBe(carListMock[0].description);
        expect(data?.brand).toBe(carListMock[0].brand);
        expect(data?.year).toBe(carListMock[0].year);
        expect(data?.km).toBe(carListMock[0].km);
    });
    test("get one car should work correctly", async () => {
        prismaMock.car.findFirst.mockResolvedValue(carListMock[1]);
        const carServices = new CarServices();

        const data = await carServices.getOne(carMock.id);

        expect(data?.id).toBe(carListMock[1].id);
        expect(data?.name).toBe(carListMock[1].name);
        expect(data?.description).toBe(carListMock[1].description);
        expect(data?.brand).toBe(carListMock[1].brand);
        expect(data?.year).toBe(carListMock[1].year);
        expect(data?.km).toBe(carListMock[1].km);
    });
});