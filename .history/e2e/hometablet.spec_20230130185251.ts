import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height:1180}
})

test.describe("Testing for home tablet", () => {
    test("Testing for colours on tablet", async ({}))
})