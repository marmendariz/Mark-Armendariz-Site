
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {MaCard} from '../ma-card/ma-card.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';



/**
 * @customElement
 * @polymer
 */


export class MaIcon extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --ma-card-background-color: var(--ma-icon-background-color, white);
          --ma-card-style:{
            display: inline-block;
          }
          --ma-card-frame:{
            box-shadow: var(--ma-icon-box-shadow);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            border-radius: var(--ma-icon-border-radius);
          }
        }
        div[slot="content"]{
          @apply --ma-icon-style;
        }
        #icon{
          text-align: center;
        }
        #iconText{
          /* width: 234px; */
          text-align: center;
          font-size: 13pt;
          margin-top: 5px;
        }
        #title{
          @apply --ma-icon-title;
          font-weight: bold;
          font-size: 15pt;
        }

      </style>

      <div id="icon">

        <ma-card class="centeredCard">
          <div slot=content>
          </div>
        </ma-card>

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
    this.updateStyles({"--ma-card-background-image": "url("+this.iconPath + iconName +".png)"});
  }


}

window.customElements.define('ma-icon', MaIcon);
