const { test, expect } = require('@playwright/test');
test('basic test', async ({ page }) => {
  await page.goto('https://reddit.com');
  const singupButton = page.getByText('Sign Up').first()
  await expect(singupButton).toBeVisible()
});