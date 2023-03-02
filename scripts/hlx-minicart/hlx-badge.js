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
import { customElement } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let HlxBadgeElement = class HlxBadgeElement extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
HlxBadgeElement.styles = css `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      top: -6px;
      right: -8px; 
      border-radius: 50%;
      position: absolute;
      color: white;
      font-weight: bold;
      background: var(--badge-color, red);
      font-size: 12px;
    }
  `;
HlxBadgeElement = __decorate([
    customElement('hlx-badge')
], HlxBadgeElement);
export { HlxBadgeElement };
//# sourceMappingURL=hlx-badge.js.map