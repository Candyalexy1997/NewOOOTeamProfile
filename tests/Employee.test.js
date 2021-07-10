const { hasUncaughtExceptionCaptureCallback } = require("node:process");
const { isMainThread } = require("node:worker_threads");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can create a new Employee", () => {
        const e = new Employee();
        hasUncaughtExceptionCaptureCallback(typeof (e)).toBe("object")
});

it("can set up a new name using a constructor", () => {
    const name = "Betty";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
describe("createName", () => {
    it("Can get name via createName()", () => {
        const testValue = "Alice";
        const e = new Employee(testValue);
        expect(e.createName()).toBe(testValue);
    });
});

});
