
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {ScResumeEntry} from '../sc-resume-entry/sc-resume-entry.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '../sc-skill-progress-bar/sc-skill-progress-bar.js';

/**
 * @customElement
 * @polymer
 */


export class ScSkillsPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: var(--sc-page-padding, 0px);
          background-color: var(--sc-page-background-color ,white);
        }
        div[slot="subtitle"]{
          color: #0c4e8a;
          font-weight: bold;
          font-size: 15pt;
        }



        :host sc-skill-progress-bar{
          margin: 20px;
       }
        sc-skill-progress-bar:hover{
          box-shadow: var(--sc-card-box-shadow, 10px 10px 47px 20px #55555557);
          transform: translate(-1%, -2%) scale(1.0, 1.0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translate(-1%, -2%) scale(1.0, 1.0);
        }



        sc-card{
          --sc-card-frame:{
            height: 95vh;
          }
        }


        ul{
          padding: 0px;
        }
        #skillsList{
          height: 80%;
          margin: 0 auto;
          width: 100%;
          padding: 15px 0px;
          /*background-color: white;*/
        }



        @media screen and (max-width: 900px){
          #skillsList{
            width: 100%;
          }
          :host{
            padding: 0px 10px
          }
          :host sc-skill-progress-bar{
            margin: 10px;
          }
        }



        .centeredCard{
          /*position: relative;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%);*/
        }

      </style>

      <sc-card>
        <div id="titleSlot" slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
        <div slot="subtitle">[[subtitle]]</div>

        <div slot="content" id="skillsList">
            <dom-repeat id="repeat" items="{{data}}" as="skill">
              <template>
                  <sc-skill-progress-bar id=[[skill.id]]
                                         progress=[[skill.skillLevel]]
                                         title=[[skill.name]]
                                         comment=[[skill.comment]]>
                  </sc-skill-progress-bar>
              </template>
            </dom-repeat>
        </div>
      </sc-card>

          <!--<div class="box rotate"></div>
<div class="box scale"></div>
<div class="box translate"></div>
      </div>-->

      
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
      subtitle:{
        type: String,
        reflectToAttribute: true
      },

      pageId: {
        type: String,
        reflectToAttribute: true
      },


      isGeneralType:{
        type: Boolean,
        value: false,
      },
      
      /**
       * TODO: Replace with web service response
       */
      data:{
        type: Object,
        observer: "_test",
        notify: true,
      }
    };
  }

  ready(){
    super.ready();
  }

  _test(data){
    console.log(data);
  }

  /**
   * 
   * @param {*} sectionId 
   */
  _getPageData(sectionId){
    return this.data[parseInt(sectionId)].entries;
  }

  /**
   * Utility method for converting text to lowercase
   * @param {*} title 
   */
  _toLowerCase(text){
    return text.toLowerCase();
  }

  /**
   * 
   * @param {*} businessName 
   * @param {*} positionName 
   */
  _formatBusinessAndPosition(businessName, positionName){
    var returnString = "";
    if(businessName && !positionName){
      returnString = businessName;
    }
    else if(businessName && positionName){
      returnString = businessName + " - " + positionName;
    }
    return returnString;
  }


}

window.customElements.define('sc-skills-page', ScSkillsPage);
