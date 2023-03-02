/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let HlxMinicartElement = class HlxMinicartElement extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The number of times the button has been clicked.
         */
        this.count = 4;
    }
    render() {
        return html `<button @click=${this._onClick}>
          <slot name="icon">
            <hlx-shoppingcart-icon>Cart</hlx-shoppingcart-icon>
          </slot>
          <slot name="badge">
            <hlx-badge>${this.count}</hlx-badge>
          </slot>
      </button>`;
    }
    _onClick() {
        this.count++;
        this.dispatchEvent(new CustomEvent('count-changed'));
    }
};
HlxMinicartElement.styles = css `
    :host {
      display: flex;
      border: solid 1px #e0e0e0;
    }
    
    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 1px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      position: relative;
    }
    
    button:active {
      margin: 2px 0 0 2px;
    }
  `;
__decorate([
    property({ type: Number })
], HlxMinicartElement.prototype, "count", void 0);
HlxMinicartElement = __decorate([
    customElement('hlx-minicart')
], HlxMinicartElement);
export { HlxMinicartElement };
//# sourceMappingURL=hlx-minicart.js.map