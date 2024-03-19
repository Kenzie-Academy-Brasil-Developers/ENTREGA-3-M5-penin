import { CarServices } from "../../services/car.services";
import { prismaMock } from "../__mocks__/prisma";
import { carMock, carUpdateBodyMock } from "../__mocks__/car.mocks";


describe("Unit test: update car", () => {
    test("update car should work correctly", async () => {
        const carServices = new CarServices();

        const newcarExpect = { ...carMock, ...carUpdateBodyMock };

        prismaMock.car.update.mockResolvedValue(newcarExpect);
        const data = await carServices.update(carUpdateBodyMock, carMock.id);

        expect(data).toStrictEqual(newcarExpect);
    });
}); 