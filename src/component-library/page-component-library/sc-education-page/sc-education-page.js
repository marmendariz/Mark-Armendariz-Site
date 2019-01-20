
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/polymer/lib/elements/dom-repeat';

import {ScCard} from '../../sc-card/sc-card.js';
import {ScResumeEntry} from '../sc-resume-entry/sc-resume-entry.js';

/**
 * @customElement
 * @polymer
 */


export class ScEducationPage extends PolymerElement {
  
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
        #educationInfoCard{
          /*margin: 25px 25px 25px 0px;*/
          --sc-card-height: 10px;
        }

        #educationDetailsCard{
          /*margin: 25px 0px 25px 25px;*/
          font-size: 10pt;
        }
     

        #educationInfoCard>div[slot="content"]{
          line-height: 15px;
        }



        #pageContent{
          display: flex;
          position: relative;
          margin-top:20px;
          height: 82vh;
        }


        #educationInfoContainer{
          width: 50%;
        }
        #educationDetailsContainer{
          width: 50%;
        }



        .schoolName{
          font-size: 11pt;
          color: var(--sc-main-theme-color);
          font-weight: 800;
        }

        .degreeInfo{
          font-size: 10pt;
          font-weight: 600;
        }
        .schoolName, .degreeInfo{
          line-height: 20px;
        }
        .dateRange, .location{
          line-height: 5px;
          font-size: 10pt;
        }
        /*.dateRange{
          margin-top: 20px;
        }*/
        li{
          line-height: 22px;
        }
        ul{
          padding-left: 24px;
        }


        #educationIcon{
          width: 95%;
          height: 300px;
          overflow: hidden;
         /* background-image: url('src/images/Education.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;*/
        }
        img{
          height: 91%;
          transform: translate(-50%, -50%);
          position: relative;
          left: 50%;
          top: 50%;
          /*width:100%;
          height:100%;
          object-fit: cover;
          overflow: hidden;*/
        }
        .coursesTitle{
          font-weight: 800;
        }

        #educationDetailsCard, #educationDetailsCard>div[slot="content"]{
          height: 100%;
          --sc-card-frame:{
            height: 91%;
          }
        }
        #educationInfoCard, #educationInfoCard>div[slot="content"]{
          --sc-card-frame:{
            height: 28%;
          }
        }


        @media screen and (max-width: 900px){
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
          #educationIcon, #educationInfoCard{
            width: 50%;
          }
          #educationDetailsCard>li{
            font-size: 15pt;
            line-height: 28px;
          }
          #educationInfoCard{
            --sc-card-frame:{
              height: 77%;
            }
          }
        }

      </style>

    <div id="centeredCard">

        <sc-card class="">
          <div slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
        </sc-card>
      
        <div id="pageContent">

          <div id="educationInfoContainer">
              <div id="educationIcon"><img src="src/images/Education.png"></div>
              <sc-card id="educationInfoCard">
                <div slot="content">
                  <p class="schoolName">[[_toUpperCase(data.schoolName)]]</p>
                  <p class="degreeInfo">[[data.degreeName]] - [[data.majorName]]</p>
                  <p class="dateRange">[[data.startDate]] - [[data.endDate]]</p>
                  <p class="location">GPA - [[data.gpaValue]] on a 4.00 scale.</p>
                </div>
              </sc-card>
          </div>

          <div id="educationDetailsContainer">
            <sc-card id="educationDetailsCard">
              <div slot="content">
                <p class="coursesTitle">COURSES</p>
                  <ul>
                    <dom-repeat id="repeat" items="[[data.courses]]">
                      <template>
                          <li>[[item]]</li>
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

window.customElements.define('sc-education-page', ScEducationPage);
