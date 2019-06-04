import {LitElement, html, css, property} from 'lit-element';

/**
 * proportional-height-box
 * 
 * A block-level element that resizes proportionally, based on code from fitvids.js (http://fitvidsjs.com/)
 *
 * The `width` and `height` parameters specify a proportional ratio, **not the exact size**.
 *
 * @demo demo/index.html
 */
class ProportionalHeightBox extends LitElement {
  /* The width proportion of the desired aspect ratio */
  @property({type: Number})
  public width = 4;

  /* The height proportion of the desired aspect ratio */
  @property({type: Number})
  public height = 3;

  static styles = [
    css`
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
    `
  ];

  protected render() {
    return html`
    <div id="proportional" style="${this.computeStyle(this.width, this.height)}">
      <slot></slot>
    </div>
    `;
  }

  /**
    * Computes the CSS styling
    * @param {number} width The width portion of the aspect ratio
    * @param {number} height The height portion of the aspect ratio
    */
  private computeStyle(width: number, height: number) {
    var ratio = (height / width) * 100;
    return `padding-top: ${ratio}%`;
  }
}

customElements.define('proportional-height-box', ProportionalHeightBox);
