/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */
import { loadCSS } from '../../scripts/lib-franklin.js';

// eslint-disable-next-line import/no-unresolved
export default async function decorate(block) {
  const picker = document.createElement('script');
  picker.setAttribute('defer', 'true');
  picker.setAttribute('src', 'https://343284-flightpickermfe-stage.adobeio-static.net/index.a92eb863.js');

  document.querySelector('head').appendChild(picker);

  loadCSS('https://343284-flightpickermfe-stage.adobeio-static.net/index.274a6c21.css');
}
