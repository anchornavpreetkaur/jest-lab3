const {
    addJob,
    jobArray,
    update,
} = require("./jobManager3");

test("update() should updates a job’s details.", () => {
    const job = addJob("PMP", "PWC", "$2500", "USA");
    const updatedPet = update(1, { title: "Manager", company: "KPMG", company: "$2020", location: "USA" });

    expect(updatedPet).toEqual({
        id: 1,
        title: "Manager", company: "KPMG", company: "$2020", location: "USA"
    });

    expect(jobArray[0]).toEqual(updatedPet); // Ensure the pet in jobArray is updated
});

test("update() should returns false when given an invalid ID.", () => {
    expect(update(999, { make: "Nonexistent Pet" })).toBe(false); // Invalid ID
});