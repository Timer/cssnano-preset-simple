const postcss = require('postcss');
const mod = require('../plugin');
const css = require('../noop-template');

describe('calc correct', () => {
  test('should shorten calc correctly', async () => {
    const input = css`
      .text-6xl::before {
        margin-top: calc(
          -1em * ((
                  var(--ascent-scale) - var(--cap-height-scale) +
                    var(--line-gap-scale) / 2
                ) -
                (
                  (
                      (
                          var(--line-height-scale) *
                            (var(--font-size-rem) * var(--root-font-size-px)) -
                            (var(--line-height-rem) * var(--root-font-size-px)) -
                            (
                              var(--line-height-unitless) *
                                (
                                  var(--font-size-rem) *
                                    var(--root-font-size-px)
                                )
                            ) - var(--line-height-px)
                        ) / 2
                    ) / (var(--font-size-rem) * var(--root-font-size-px))
                ) + (0.05 / (var(--font-size-rem) * var(--root-font-size-px))))
        );
      }
    `;

    const res = await postcss([mod]).process(input, {
      from: 'input.css',
      to: 'output.css',
    });

    expect(res.css).toMatchInlineSnapshot(
      `".text-6xl:before{margin-top:calc(-1em * ((var(--ascent-scale) - var(--cap-height-scale) + var(--line-gap-scale) / 2) - (((var(--line-height-scale) * (var(--font-size-rem) * var(--root-font-size-px)) - (var(--line-height-rem) * var(--root-font-size-px)) - (var(--line-height-unitless) * (var(--font-size-rem) * var(--root-font-size-px))) - var(--line-height-px)) / 2) / (var(--font-size-rem) * var(--root-font-size-px))) + (.05 / (var(--font-size-rem) * var(--root-font-size-px)))))}"`
    );
  });
});
