const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page", async () => {
    await browser.url("https://www.newegg.com");
});

When("I close promo banner if it appears", async () => {
    const banner = await $('.modal-content');
    const bannerButton = await $('.close')
    try {
        await banner.waitUntil(async () => {
            return await banner.isDisplayed();
        }, {
            timeout: 3000,
            timeoutMsg: 'banner waiting timeout reached'
        })
        await bannerButton.click();
    } catch (error) {
        console.log('Banner is not displayed.')
    }
});

When("I enter the word {word} in the search bar", async (word) => {
    const searchBar = await $('input[type="search"]');
    await searchBar.setValue(word);
});

When("I click the search button", async () => {
    const searchButton = await $('.ico-search');
    await searchButton.click();
});

Then("I see list with at least one item", async () => {
    const item = await $('.item-cell');
    await expect(item).toBeExisting();
});

When("I click on the Today's Best Deals tab", async () => {
    const tab = await $('#trendingBanner_720202');
    await tab.click();
});

When("I am on the Today's Best Deals page", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/todays-deals?cm_sp=Head_Navigation-_-Under_Search_Bar-_-Today%27s+Best+Deals&icid=720202");
});

When("I click on the Internet shop logo", async () => {
    const logo = await $('.header2021-logo');
    await logo.click();
});

Then("I am on the main page", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/");
});
