import { expect, test } from '@playwright/test';

test('has titles', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h1').innerText()).toContain('Chad Lefort');
  expect(await page.locator('h2').innerText()).toContain('Senior Frontend Engineer');
});
