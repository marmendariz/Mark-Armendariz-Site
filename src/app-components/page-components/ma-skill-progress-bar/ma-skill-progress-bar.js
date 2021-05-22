
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
          height: 30px;
        }
        font-size: 12pt;
      }
      #energyBar{
        width: 80%;
        left: -1px;
        position: relative;
      }
      #energyBar>#fillInArea{
        background-color: var(--ma-skill-progress-bar-color, #0c4e8a);
        height: 30px; 
      }
      #skillName{
        background-color: var(--ma-skill-progress-bar-color, #0c4e8a);
        width: 150px;
        font-weight: bold;
        padding: 0px 0px 0px 10px;
        line-height: 33px;
        color: white;
        height: 30px;
      }
      #barContainer{
        background-color: white;
        display: flex;
        flex-wrap: nowrap;
        height: 30px;
        font-size: 11pt;
        border: 1px solid #d8d8d8;
      }
      .bar{
        float: left;
        height: 35px;
      }
      #ratio{
        height: 20px;
        padding: 6px;
        padding-right: 0px;
        float: right;
        width: 55px;
        line-height:20px;
        font-weight: bold;
      }

      @media screen and (max-width: 800px){
        #skillName, #ratio{
          font-size: 10pt;
        }
        #skillName{
          width: 180px;
        }
      }
      @media (min-width: 320px) and (max-width: 480px) {
        #skillName{
          width: 120px;
        }
      }
      </style>

      <ma-card>
        <div id="contentSlot" slot="content">
          <div id="barContainer">
            <div class="bar" id="skillName">[[_toUpperCase(title)]]</div>
            <div class="bar" id="energyBar">
              <div id="fillInArea"></div>
            </div>
            <div id="ratio">[[_getRatio()]]</div>
          </div>
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
     this.$.fillInArea.style.width = barProgress + "%";
  }
  
  _getRatio(){
    return (parseInt(this.progress)/10) + "/10";
  }

  ready(){
    super.ready();

    this.addEventListener("onresize", function(e){
      var element = this.$.energyBar;//.offsetWidth;
      var width = element.offsetWidth;
    }.bind(this));
  }
}

window.customElements.define('ma-skill-progress-bar', MaSkillProgressBar);
