/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const component = document.createElement('hlx-minicart');
  block.append(component);

  const picker = document.createElement('script');
  picker.setAttribute('defer', 'true');
  picker.setAttribute('src', 'https://static.eolymp.com/adobecdn/hlx-minicart.js');

  document.querySelector('head').appendChild(picker);
}
