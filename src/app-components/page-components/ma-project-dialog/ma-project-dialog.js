import { html, PolymerElement } from "../../../../node_modules/@polymer/polymer/polymer-element.js";
import { MaCard } from '../../util-components/ma-card/ma-card.js';
import "../../../../node_modules/@polymer/polymer/lib/elements/dom-if.js";
import "../../../../node_modules/@webcomponents/shadycss/entrypoints/apply-shim.js";
import { updateStyles } from "../../../../node_modules/@polymer/polymer/lib/mixins/element-mixin.js";
import "../../../../node_modules/@polymer/paper-dialog/paper-dialog.js";
import "../../../../node_modules/@polymer/iron-icons/iron-icons.js";
/**
 * @customElement
 * @polymer
 */

export class MaProjectDialog extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          cursor: default;
        }
        #dialog{
          border: 1px solid;
          border-color: #d2d2d2;
          width: var(--ma-project-modal-width, 45%);
          height: var(--ma-project-modal-height, 85%);
        }
        h1#title{
          line-height: 27px;
          text-align: center;
          margin-bottom: 10px;
        }
        div#projectImage{
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 85%;
          height: 56%;
          margin: 0 auto;
        }
        iron-icon{
          height: 40px;
          width: 40px;
          cursor: pointer;
        }
        iron-icon:hover{
          fill: var(--ma-accent-color);
        }
        #dateRange{
          text-align: center;
          font-weight: 500;
          margin-top: 0px;
        }

        @media (min-width: 1025px)  {
          div#projectImage{
            height: 50%;
          }
          #dialog{
            height: 72%;
          }
          #projectDescription{
            font-size: 12pt;
            line-height: 20pt;
          }
        }

        @media (min-width: 320px) and (max-width: 1024px) {
          #projectDescription{
            font-size: 13pt;
            line-height: 20pt;
          }
          div#projectImage{
            height: 30%;
          }
          #dialog{
            width: 90%;
            height: 87%;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        }

        @media (min-width: 481px) and (max-width: 767px) {
        }

        @media (min-width: 320px) and (max-width: 480px) {
          #dialog{
            width: 100%;
            max-width: none !important; 
            margin: 0;
            height: 93vh;
            top: 40px !important;
          }
          #projectDescription{
            font-size: 10pt;
          }
        }
      </style>

      <paper-dialog id="dialog" opened={{opened}}>
        <iron-icon on-tap="close" icon="icons:close"></iron-icon>
        <h1 id="title">[[title]]</h1>
        <div id="dateRange">[[startDate]] - [[endDate]]</div>
        <div id="projectImage"></div>
        <div id="projectDescription">
            <ul>
              <dom-repeat items="[[data]]">
                <template>
                  <li>[[item]]</li>
                </template>
              </dom-repeat>
            </ul>
        </div>
        <div id="projectCodeUrl"></div>
      </paper-dialog>

      `;
  }

  static get properties() {
    return {
      /**
       * Title of Resume Section
       */
      title: {
        type: String
      },
      text: {
        type: String
      },
      startDate: {
        type: String
      },
      endDate: {
        type: String
      },
      opened: {
        type: Boolean,
        notify: true,
        observer: "openDialog"
      },
      imagePath: {
        type: String,
        value: "src/images/projects/"
      },
      imageName: {
        type: String,
        observer: "_setProjectImage"
      }
    };
  }

  openDialog(opened) {
    if (opened) {
      this.$.dialog.open();
    } else {
      this.$.dialog.close();
    }
  }

  close() {
    this.$.dialog.close();
  }

  _setProjectImage(imageName) {
    this.$.projectImage.style.backgroundImage = "url(" + this.imagePath + imageName + ".png)";
  }

}
window.customElements.define('ma-project-dialog', MaProjectDialog);