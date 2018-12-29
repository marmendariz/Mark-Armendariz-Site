
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {ScResumeEntry} from '../sc-resume-entry/sc-resume-entry.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

/**
 * @customElement
 * @polymer
 */


export class ScExperiencePage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: var(--sc-page-padding, 0px);
          background-color: var(--sc-page-background-color ,white);
        }
        #contentSlot{
          @apply --sc-resume-page-style;
        }
        div[slot="subtitle"]{
          color: #0c4e8a;
          font-weight: bold;
          font-size: 15pt;
        }
        .entryCard{
          margin: 25px 25px 25px 55px;
        }
        #entryDetailsCard{
          margin: 25px 0px 25px 25px;
        }

        #entryDetailsCard>div[slot="content"]{
          height: 422px;
        }

        .entryCard>div[slot="content"]{
          line-height: 15px;
        }
        #pageContent{
          display: flex;
          height: 100%;
        }

        #centeredCard{
          position: relative;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%);
        }

        #entries{
          width: 45%;
          height: 100%;
        }
        #entryDetails{
          width: 55%;
          height: 100%;
        }
        li{
          line-height: 22px;
        }

        .companyName{
          font-size: 14pt;
        }
        .positionName{
          font-size: 10pt;
        }
        .companyName, .positionName{
          line-height: 4px;
          font-weight: bold;
        }
        .dateRange{
          margin-top: 20px;
        }
        .dateRange, .location{
          line-height: 5px;
          font-size: 10pt;
        }


      </style>

<div id="centeredCard">
        <sc-card class="">
          <div slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
        </sc-card>
      
        <div id="pageContent">


            <div id="entries">
            <dom-repeat id="repeat" items="{{data}}" as="section">
              <template>
                <sc-card class="entryCard">
                  <div slot="content">
                  <p class="companyName">[[section.companyName]]</p>
                  <p class="positionName">[[section.positionName]]</p>
                  <p class="dateRange">[[section.startDate]] - [[section.endDate]]</p>
                  <p class="location">[[section.city]], [[section.state]]</p>
                  </div>
                </sc-card>
              </template>
            </dom-repeat>
            </div>

            <div id="entryDetails">
              <sc-card id="entryDetailsCard">
                <div slot="content">
                    <ul>
                      <dom-repeat id="repeat" items="{{testdata}}">
                        <template>
                            <li>{{item}}</li>
                        </template>
                      </dom-repeat>
                    </ul>
                </div>
              </sc-card>
            </div>


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
        reflectToAttribute: true
      },

      pageId: {
        type: String,
        reflectToAttribute: true
      },

      subtitle:{
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
    this.testdata = this.data[0].points;
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

window.customElements.define('sc-experience-page', ScExperiencePage);
