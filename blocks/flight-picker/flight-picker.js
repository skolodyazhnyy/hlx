/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */
import { loadCSS } from '../../scripts/lib-franklin.js';

// eslint-disable-next-line import/no-unresolved
export default async function decorate(block) {
  const picker = document.createElement('script');
  picker.setAttribute('defer', 'true');
  picker.setAttribute('src', 'https://static.eolymp.com/adobecdn/index.a92eb863.js');

  document.querySelector('head').appendChild(picker);

  loadCSS('https://static.eolymp.com/adobecdn/index.274a6c21.css');
}
