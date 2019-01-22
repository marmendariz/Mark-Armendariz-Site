
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {MaCard} from '../../util-components/ma-card/ma-card.js';

/**
 * @customElement
 * @polymer
 */


export class MaSkillProgressBar extends PolymerElement {
  
  static get template() {
    return html`
      <style>
      :host {
        display: block;
        --ma-card-padding: 0px;
        --ma-card-frame:{
          height: 45px;
        }
        font-size: 12pt;
      }
      #energyBar{
        background-color: var(--ma-skill-progress-bar-color, #0c4e8a);
      }
      #skillName{
        background-color: var(--ma-skill-progress-bar-color, #0c4e8a);
        width: 120px;
        color: white;
        font-weight: bold;
        padding-left: 10px;
        line-height:33px;
      }
      #barContainer{
        background-color: white;
      }
      .bar{
        float: left;
        height: 35px;
        padding: 5px;
      }
      #ratio{
        height: 20px;
        padding: 5px;
        padding-right: 10px;
        float: right;
        line-height:33px;
      }

      @media screen and (max-width: 640px){
        #ratio{
          display: none;
        }
        #skillName{
          width: 70px;
          font-size: 8pt;
        }
      }
      </style>

      <ma-card>
        <div id="contentSlot" slot="content">
            <div class="bar" id="skillName">[[_toUpperCase(title)]]</div>
            <div class="bar" id="energyBar"></div>
            <div id="ratio">[[_getRatio()]]</div>
        </div>
      </ma-card>

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

      

      progress:{
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
    return (parseInt(this.progress)/10) + "/10";
  }

}

window.customElements.define('ma-skill-progress-bar', MaSkillProgressBar);
