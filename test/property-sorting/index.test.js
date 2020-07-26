const postcss = require('postcss');
const mod = require('../plugin');
const css = require('../noop-template');

describe('property sorting', () => {
  test('bla', async () => {
    const input = css`
      p {
        border: 1px solid var(--test);
        border-radius: var(--test);
        border-width: 0;
      }
    `;

    const res = await postcss([mod]).process(input, {
      from: 'input.css',
      to: 'output.css',
    });

    expect(res.css).toMatchInlineSnapshot(
      `"p{border-width:1px;border-radius:var(--test);border:0 solid var(--test)}"`
    );
  });
});
