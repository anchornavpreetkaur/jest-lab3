const {
    addCar,
    carArray,
    update,
} = require("./carManager3");

test("update() should updates a car’s details.", () => {
    const car = addCar("Citroen", "XJ Saloons", 1992, "Red");
    const updatedPet = update(1, { make: "BMW", model: "X500", year: "2020", color: "Golden" });

    expect(updatedPet).toEqual({
        id: 1,
        make: "BMW",
        model: "X500",
        year: "2020",
        color: "Golden"
    });

    expect(carArray[0]).toEqual(updatedPet); // Ensure the pet in carArray is updated
});

test("update() should returns false when given an invalid ID.", () => {
    expect(update(999, { make: "Nonexistent Pet" })).toBe(false); // Invalid ID
});