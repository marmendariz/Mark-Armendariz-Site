
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {MaCard} from '../../util-components/ma-card/ma-card.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-icons/iron-icons.js';


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
        paper-dialog{
          border: 2px solid;
          border-color: var(--ma-main-theme-color);
          width: var(--ma-project-modal-width, 65%);
          height: var(--ma-project-modal-height, 75%);
        }
        h2#title{
          text-align: center;
          margin-bottom: 10px;
        }
        div#projectImage{
          background-image: url('src/images/projects/databaseProject.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 85%;
          height: 56%;
          margin: 0 auto;
        }
      </style>

      <paper-dialog id="dialog" opened={{opened}}>
        <h2 id="title">[[title]]</h2>
        <div id="projectImage"></div>
        <div id="projectDescription"></div>
        <div id="projectCodeUrl"></div>
      </paper-dialog>

      `;
    }

  static get properties() {
    return {
      /**
       * Title of Resume Section
       */
      title:{
        type: String,
        //observer: "_titleProcess"
      },
      text:{
        type: String
      },
      opened:{
        type: Boolean,
        notify: true,
        observer: "openDialog"
      },
      iconPath:{
        type: String,
        value: "src/images/"
      },
      iconName:{
        type: String,
        observer: "_setIconImage"
      }
      
    };
  }

  openDialog (opened){
    if(opened){
      this.$.dialog.open();
    }
    else{
      this.$.dialog.close();
    }
  }

  _setIconImage(iconName){
    this.updateStyles({"--ma-card-background-image": "url("+this.iconPath + iconName +".png)"});
  }

}

window.customElements.define('ma-project-dialog', MaProjectDialog);
