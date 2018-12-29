
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';

/**
 * @customElement
 * @polymer
 */


export class ScSkillProgressBar extends PolymerElement {
  
  static get template() {
    return html`
      <style>
      :host {
        display: block;
        --sc-card-padding: 0px;
        --sc-card-frame:{
          height: 30px;
        }
      }
      #energyBar{
        background-color: var(--sc-skill-progress-bar-color, #0c4e8a);
      }
      #skillName{
        background-color: #0c4e8a;
        width: 100px;
        color: white;
        font-weight: bold;
        padding-left: 10px;
        font-size: 11pt;
      }
      #barContainer{
        background-color: white;
      }
      .bar{
        float: left;
        height: 20px;
        padding: 5px;
      }
      #ratio{
        height: 20px;
        padding: 5px;
        padding-right: 10px;
        float: right;
      }

      @media screen and (max-width: 500px){
        #ratio{
          display: none;
        }
        #skillName{
          width: 70px;
          font-size: 8pt;
        }
      }
      </style>

      <sc-card>
        <div id="contentSlot" slot="content">
            <div class="bar" id="skillName">[[_toUpperCase(title)]]</div>
            <div class="bar" id="energyBar"></div>
            <div id="ratio">[[_getRatio()]]</div>
        </div>
      </sc-card>

    `;
  }


  static get properties() {
    return {
      /**
       * Title of Resume Section
       */
      title:{
        type: String,
        reflectToAttribute: true
      },

      skillId: {
        type: String,
        reflectToAttribute: true
      },

      

      barProgress:{
          type: String,
          notify: true,
          observer: "_updateBarProgress"
      }
    };
  }

  _toUpperCase(string){
    return string.toUpperCase();
  }

  _updateBarProgress(barProgress){
      this.$.energyBar.style.width = barProgress + "%";
  }
  
  _getRatio(){
    return (parseInt(this.barProgress)/10) + "/10";
  }

}

window.customElements.define('sc-skill-progress-bar', ScSkillProgressBar);
