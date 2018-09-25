import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * proportional-height-box
 * 
 * A block-level element that resizes proportionally, based on code from fitvids.js (http://fitvidsjs.com/)
 *
 * The `width` and `height` parameters specify a proportional ratio, **not the exact size**.
 *
 * @demo demo/index.html
 */
class ProportionalHeightBox extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        width: 100%;
      }
      #proportional {
        position: relative;
        display: block;
        height: 0;
      }
      #proportional > ::slotted(*) {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
      }
    </style>

    <div id="proportional" style\$="[[_heightStyle]]">
      <slot></slot>
    </div>
`;
  }

  static get is() { return 'proportional-height-box'; }

  static get properties() {
    return {
      /* The width proportion of the desired aspect ratio */
      width: {
        type: Number,
        value: 4
      },
      /* The height proportion of the desired aspect ratio */
      height: {
        type: Number,
        value: 3
      },
      /* The CSS styling to ensure proporitonality */
      _heightStyle: {
        type: String,
        computed: '_computeStyle(width, height)'
      }
    };
  }

  /**
    * Computes the CSS styling for _heightStyle
    * @param {Number} width The width portion of the aspect ratio
    * @param {Number} height The height portion of the aspect ratio
    */
  _computeStyle(width, height) {
    var ratio = (height / width) * 100;
    return `padding-top: ${ratio}%`;
  }
}

customElements.define(ProportionalHeightBox.is, ProportionalHeightBox);
