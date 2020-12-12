import { fixture, assert, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import { DataGenerator } from '@advanced-rest-client/arc-data-generator';
import '../cookie-details.js';
import { SessionCookieEventTypes } from '@advanced-rest-client/arc-events';

/** @typedef {import('@advanced-rest-client/arc-types').Cookies.ARCCookie} ARCCookie */

describe('CookieDetailsElement', () => {
  async function basicFixture(cookie) {
    return (fixture(html`
      <cookie-details
      .cookie="${cookie}"></cookie-details>`));
  }

  const generator = new DataGenerator();

  let cookie = /** @type ARCCookie */ (null);
  before(() => {
    const data = /** @type ARCCookie[] */ (generator.generateCookiesData({
      size: 1
    }));
    data[0].httpOnly = true;
    data[0].secure = true;
    data[0].session = true;
    [cookie] = data;
  });

  it('dispatches delete event', async () => {
    const element = await basicFixture(cookie);
    const spy = sinon.spy();
    element.addEventListener(SessionCookieEventTypes.delete, spy);
    const node = /** @type HTMLElement */ (element.shadowRoot.querySelector('[data-action="delete-action"]'));
    node.click();
    assert.isTrue(spy.called);
  });

  it('dispatches edit event', async () =>  {
    const element = await basicFixture(cookie);
    const spy = sinon.spy();
    element.addEventListener('edit', spy);
    const node = /** @type HTMLElement */ (element.shadowRoot.querySelector('[data-action="edit-action"]'));
    node.click();
    assert.isTrue(spy.called);
  });

  it('can be initialized without a cookie', async () =>  {
    await basicFixture();
  });
});
