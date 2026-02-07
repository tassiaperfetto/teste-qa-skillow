import { test, expect } from '@playwright/test';

test('Buscar skillow no Google e validar texto do site', async ({ page }) => {
  await page.goto('https://www.google.com');

  // pesquisa no google
  await page.fill('input[name="q"]', 'skillow');
  await page.press('input[name="q"]', 'Enter');

  // clica no resultado do site
  await page.click('a:has-text("Skillow")');

  // valida texto da página
  await expect(page.locator('body')).toContainText('Skillow é a plataforma');
});
