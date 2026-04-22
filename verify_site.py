import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 720}, record_video_dir="verification/videos")
        page = await context.new_page()

        if not os.path.exists("verification"):
            os.makedirs("verification")

        # Start dev server
        print("Starting dev server...")
        process = await asyncio.create_subprocess_shell(
            "npm run dev",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        # Wait for server
        await asyncio.sleep(5)

        try:
            # Home Page
            print("Verifying Home Page...")
            await page.goto("http://localhost:3000")
            await page.wait_for_selector("text=Oncall IT Support")
            await page.screenshot(path="verification/home.png")

            # Interaction for Smoke Effect
            await page.mouse.move(100, 100)
            await asyncio.sleep(0.5)
            await page.mouse.move(500, 500)
            await asyncio.sleep(0.5)
            await page.screenshot(path="verification/home_interaction.png")

            # Services Page
            print("Verifying Services Page...")
            await page.goto("http://localhost:3000/services")
            await page.wait_for_selector("text=Our Services")
            await page.screenshot(path="verification/services.png")

            # About Page
            print("Verifying About Page...")
            await page.goto("http://localhost:3000/about")
            await page.wait_for_selector("text=About Oncall IT")
            await page.screenshot(path="verification/about.png")

            # Contact Page
            print("Verifying Contact Page...")
            await page.goto("http://localhost:3000/contact")
            await page.wait_for_selector("text=Get in Touch")
            await page.screenshot(path="verification/contact.png")

            print("Verification screenshots captured.")

        finally:
            process.kill()
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
