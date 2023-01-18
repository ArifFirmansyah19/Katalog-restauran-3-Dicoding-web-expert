/* eslint-disable no-unused-vars */
const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.dontSeeElement('restaurant-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('restaurant-item');

  I.amOnPage('/');
  I.waitForElement('.restaurant__title');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant__title');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking a restaurant', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');

  I.waitForElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.dontSeeElement('restaurant-item');
  I.dontSeeElement('.restaurant__title a');
});
