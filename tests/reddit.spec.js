const { test, expect } = require('@playwright/test');
// Without setting the user agent manually reddit will block the requests.
test.use({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' });

test('basic test', async ({ page }, testInfo) => {
  await page.goto('https://reddit.com');
  const loginButton = page.getByText('Log In').first()
  await expect(loginButton).toBeVisible()
});