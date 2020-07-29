/** @format */

const { reloadApp } = require("detox-expo-helpers");

describe("First test", () => {
    before(async () => {
        await reloadApp();
    });

    it("first check", async () => {
        // wait for the initial app load
        await waitFor(element(by.id("root")))
            .toBeVisible()
            .withTimeout(3000);

        await element(by.id("click-btn")).tap();
    });
});
