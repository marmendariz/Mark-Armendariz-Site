
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/polymer/lib/elements/dom-repeat';

import {MaCard} from '../../util-components/ma-card/ma-card.js';

/**
 * @customElement
 * @polymer
 */


export class MaEducationPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          --ma-card-background-image: none;
          --ma-card-background-color: none;
          --ma-card-box-shadow: none;
        }
        #contentSlot{
          @apply --ma-resume-page-style;
        }
        div[slot="subtitle"]{
          color: #0c4e8a;
          font-weight: bold;
          font-size: 15pt;
        }
        #educationInfoCard{
          --ma-card-height: 10px;
        }

        #educationDetailsCard{
          font-size: 10pt;
        }
     
        #educationInfoCard>div[slot="content"]{
          line-height: 15px;
        }

        #pageContent{
          display: flex;
          position: relative;
          margin-top: 20px;
        }

        .schoolName{
          font-size: 12pt;
          font-weight: bold;
        }
        .degreeInfo{
          font-size: 11pt;
          font-weight: 600;
        }
        .dateRange, .location{
          line-height: 5px;
          font-size: 10pt;
        }
        .gpa{
          font-size: 10pt;
        }
        ul{
          padding-left: 24px;
          margin-top: 5px;
        }

        #educationIcon{
          height: 50%;
          overflow: hidden;
        }
        img{
          height: 91%;
          transform: translate(-50%, -55%);
          position: relative;
          left: 50%;
          top: 50%;
        }
        #coursesTitle{
          font-weight: bold;
          font-size: 13pt;
          margin-top: 28px;
          margin-top: 18px;
          margin-bottom: 0px;
        }
        #educationDetailsCard{
          height: 95%;
        }
        #educationInfoCard, #educationInfoCard>div[slot="content"]{
          --ma-card-frame:{
            height: 90%;
          }
        }
        #schoolIcon{
          width: 100%;
          position: relative;
          height: 21vh;
        }

        @media screen and (max-width: 930px){
          #educationIcon>img{
            width:100%;
          }
          #schoolIcon{
            display: none;
          }
        }
        @media screen and (max-width: 600px){
          #pageContent{
            display: block;
            width: 100%;
          }
          #educationInfoContainer{
            display: flex;
            width: 100%;
            height: 35%;
          }
          #educationDetailsContainer{
            height: 65%;
            width: 100%;
          }
          #educationIcon{
            width: 50%;
            height: initial;
          }
          #educationInfoCard{
            --ma-card-frame:{
              height: 150%;
            }
          }
        }

        @media (min-width: 1281px) {
          li{
            line-height: 27px;
            font-size: 11pt;
          }
        }

        @media (min-width: 1025px) and (max-width: 1280px) {
          li{
            line-height: 27px;
            font-size: 11pt;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          img{
            height: 72%;
            transform: translate(-50%, -62%);
          }
          li{
            line-height: 27px;
            font-size: 11pt;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          img{
            height: 72%;
            transform: translate(-50%, -62%);
          }
          li{
            line-height: 27px;
            font-size: 11pt;
          }
        }

        @media (min-width: 481px) and (max-width: 767px) {
          img{
            height: 75%;
            transform: translate(-50%, -62%);
          }
          li{
            line-height: 27px;
            font-size: 11pt;
          }
        }

        @media (min-width: 320px) and (max-width: 480px) {
          #educationDetailsCard{
            --ma-card-padding: 10px 17px;
          }
          #educationIcon{
            display: none;
          }
          #educationInfoCard{
            width: 100%;
          }
          #educationInfoCard>div[slot="content"]{
            padding: 16px 0px;
          }
          li{
            line-height: 27px;
            font-size: 11pt;
          }
        }
      </style>

      <div id="centeredCard">
        <ma-card class="">
          <div slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
          <div slot="content">
            <div id="pageContent">
              <div id="educationInfoContainer">
                  <div id="educationInfoCard">
                    <div slot="content">
                      <p class="schoolName">[[data.schoolName]]</p>
                      <p class="degreeInfo">[[data.degreeName]] - [[data.majorName]]</p>
                      <p class="dateRange">[[data.startDate]] - [[data.endDate]]</p>
                      <p class="gpa">GPA - [[data.gpaValue]] on a 4.00 scale.</p>

                    <div id="educationDetailsContainer">
                          <h2 id="coursesTitle">Courses Included:</h2>
                            <ul>
                              <dom-repeat id="repeat" items="[[data.courses]]">
                                <template>
                                    <li>[[item]]</li>
                                </template>
                              </dom-repeat>
                            </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ma-card>
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

      subtitle:{
        type: String,

      },

      data:{
        type: Object
      }

    };
  }

  _test(data){
    console.log(data);
  }

  /**
   * Utility method for converting text to lowercase
   * @param {*} title 
   */
  _toLowerCase(text){
    return text.toLowerCase();
  }

  _toUpperCase(text){
    return text.toUpperCase();
  }

  /**
   * 
   * @param {*} businessName 
   * @param {*} degreeInfo 
   */
  _formatBusinessAndPosition(businessName, degreeInfo){
    var returnString = "";
    if(businessName && !degreeInfo){
      returnString = businessName;
    }
    else if(businessName && degreeInfo){
      returnString = businessName + " - " + degreeInfo;
    }
    return returnString;
  }


}

window.customElements.define('ma-education-page', MaEducationPage);
