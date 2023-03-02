/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

import '../../scripts/hlx-minicart/hlx-minicart.js';

export default async function decorate(block) {
  const component = document.createElement('hlx-minicart');
  block.append(component);
}
