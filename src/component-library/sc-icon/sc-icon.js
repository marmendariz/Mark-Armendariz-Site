
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../sc-card/sc-card.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';



/**
 * @customElement
 * @polymer
 */


export class ScIcon extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --sc-card-background-color: var(--sc-icon-background-color, white);
          --sc-card-style:{
            display: inline-block;
          }
          --sc-card-frame:{
            box-shadow: var(--sc-icon-box-shadow);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            border-radius: var(--sc-icon-border-radius);
          }
        }
        div[slot="content"]{
          @apply --sc-icon-style;
        }
        #icon{
          text-align: center;
        }
        #iconText{
          text-align: center;
          font-size: 13pt;
        }
        #title{
          @apply --sc-icon-title;
          font-weight: bold;
          font-size: 15pt;
        }

      </style>

      <div id="icon">

        <sc-card class="centeredCard">
          <div slot=content>
          </div>
        </sc-card>

        <div id="iconText">
          <div id="title">[[title]]</div>
          <div id="text">[[text]]</div>
        </div>

      </div>



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

  _titleProcess(title){
    var temp = title.split(' ');
    if(temp.length > 1){
      console.log(temp);
      this.$.title.innerHTML =  temp[0] + "<br>" + temp[1];
    }
    else{
    this.$.title.innerHTML= temp[0];
    }
  }

  _setIconImage(iconName){
    this.updateStyles({"--sc-card-background-image": "url("+this.iconPath + iconName +".png)"});
  }


}

window.customElements.define('sc-icon', ScIcon);
