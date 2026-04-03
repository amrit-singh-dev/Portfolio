import { test, expect } from '@playwright/test';

test('Homepage loads successfully', async ({ page }) => {
  await page.goto('https://amrit-singh-dev.github.io/Portfolio/');
  await expect(page).toHaveTitle(/Portfolio/);
});

test('Navbar navigation works', async ({ page }) => {
  await page.goto('https://amrit-singh-dev.github.io/Portfolio/');

  await page.click('text=About');
  await expect(page.locator('#about')).toBeVisible();

  await page.click('text=Projects');
  await expect(page.locator('#projects')).toBeVisible();
});

test('Mobile menu toggle works', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });

  await page.goto('https://amrit-singh-dev.github.io/Portfolio/');

  await page.click('.menu-toggle');
  await expect(page.locator('.nav-links')).toBeVisible();
});

test('Project links are working', async ({ page }) => {
  await page.goto('https://amrit-singh-dev.github.io/Portfolio/');

  const links = await page.locator('.project-btn').all();

  for (const link of links) {
    await expect(link).toHaveAttribute('href', /http/);
  }
});