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
          width: var(--ma-project-modal-width, 60%);
          height: var(--ma-project-modal-height, 85%);
        }
        h1#title{
          line-height: 27px;
          text-align: center;
          margin-bottom: 10px;
          margin-top: 0;
        }
        div#projectImage{
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 85%;
          height: 56%;
          margin: 0 auto;
          margin-bottom: 10px;
        }
        iron-icon{
          height: 35px;
          width: 35px;
          cursor: pointer;
        }
        iron-icon:hover{
          fill: var(--ma-accent-color);
        }
        #dateRange{
          text-align: center;
          font-weight: 500;
          margin-top: 0px;
          position: relative;
          bottom: 6px;
        }

        #descriptionWrapper{
          margin-top: 0;
        }
        #projectDescription, #technologies{
          width: 50%;
        }

        @media (min-width: 1281px){
          div#projectImage{
            height: 56%;
          }
        }

        @media (max-width: 1400px){
          #dialog{
            width: 85%;
            height: 87%;
          }
        }

        @media (min-width: 1025px)  {
          /* div#projectImage{
            height: 42%;
          } */
          #dialog{
            height: 80%;
          }
          #projectDescription, #technologies{
            font-size: 10pt;
            line-height: 15pt;
          }
        }

        @media (min-width: 320px) and (max-width: 1024px) {
          #projectDescription, #technologies{
            font-size: 10pt;
            line-height: 15pt;
          }
          div#projectImage{
            height: 40%;
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
          #projectDescription, #technologies{
            font-size: 10pt;
          }
        }
        #descriptionWrapper{
          display: flex;
        }

        p{
          margin: 0;
        }
        ul{
          margin-top: 5px;
        }
      </style>

      <paper-dialog id="dialog" opened={{opened}}>
        <iron-icon on-tap="close" icon="icons:close"></iron-icon>
        <h1 id="title">[[title]]</h1>
        <div id="dateRange">[[startDate]] - [[endDate]]</div>
        <div id="projectImage"></div>
        <div id="descriptionWrapper">
          <div id="projectDescription">
              <p>Details:</p>
              <ul>
                <dom-repeat items="[[data]]">
                  <template>
                    <li>[[item]]</li>
                  </template>
                </dom-repeat>
              </ul>
          </div>
          <div id="technologies">
            <p>Technologies:</p>
            <ul>
                <dom-repeat items="[[technologies]]">
                  <template>
                    <li>[[item]]</li>
                  </template>
                </dom-repeat>
              </ul>
          </div>
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