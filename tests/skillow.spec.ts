import { test, expect } from '@playwright/test';

test('Abrir site Skillow e validar texto principal', async ({ page }) => {
  await page.goto('https://lp.skillow.com.br/');

  await expect(page.locator('body'))
    .toContainText('Skillow');
});
