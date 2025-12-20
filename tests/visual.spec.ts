import { test, expect } from '@playwright/test'

test.describe('Pain Point Cards Visual Tests', () => {
  test('Lottie animations are aligned at the bottom of cards', async ({ page }) => {
    await page.goto('/')

    // Wait for the page to load and animations to appear
    await page.waitForTimeout(2000)

    // Get the pain points section by finding the heading
    const painPointsSection = page.locator('section').filter({ hasText: "Here's what that looks like:" }).first()

    // Scroll to the section
    await painPointsSection.scrollIntoViewIfNeeded()

    // Get the three pain point cards with Lottie animations
    // The cards are in a grid and contain text starting with "Leaders", "Departments", "Talented"
    const cards = painPointsSection.locator('.card-elevated')
    const cardCount = await cards.count()
    expect(cardCount).toBe(3)

    // Get bottom positions of all cards (which should now all have the same height due to flex)
    const cardBottoms: number[] = []

    for (let i = 0; i < cardCount; i++) {
      const box = await cards.nth(i).boundingBox()
      if (box) {
        cardBottoms.push(box.y + box.height)
      }
    }

    // All cards should have the same bottom position (same height due to h-full in grid)
    const tolerance = 5
    const maxBottom = Math.max(...cardBottoms)
    const minBottom = Math.min(...cardBottoms)

    console.log('Card bottom positions:', cardBottoms)
    console.log('Difference:', maxBottom - minBottom)

    expect(maxBottom - minBottom).toBeLessThanOrEqual(tolerance)
  })
})
