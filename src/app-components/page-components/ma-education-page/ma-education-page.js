
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
          padding: var(--ma-page-padding, 0px);
          background-color: var(--ma-page-background-color ,white);
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
          /*margin: 25px 25px 25px 0px;*/
          --ma-card-height: 10px;
          height: 50%;
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
          margin-right: 20px;
        }
        #educationDetailsContainer{
          width: 50%;
        }



        .schoolName{
          font-size: 14pt;
          color: var(--ma-main-theme-color);
          font-weight: 800;
        }
        .degreeInfo{
          font-size: 12pt;
          font-weight: 600;
        }
        .schoolName, .degreeInfo{
          line-height: 20px;
        }
        .dateRange, .location{
          line-height: 5px;
          font-size: 12pt;
        }
        /*.dateRange{
          margin-top: 20px;
        }*/
        li{
          line-height: 50px;
          font-size: 13pt;
        }
        ul{
          padding-left: 24px;
        }


        #educationIcon{
          /*height: 300px;*/
          height: 50%;
          overflow: hidden;
         /* background-image: url('src/images/Education.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;*/
        }
        img{
          height: 91%;
          transform: translate(-50%, -55%);
          position: relative;
          left: 50%;
          top: 50%;
          /*width:100%;
          height:100%;
          object-fit: cover;
          overflow: hidden;*/
        }
        #coursesTitle{
          font-weight: 800;
        }

        #educationDetailsCard, #educationDetailsCard>div[slot="content"]{
          /*height: 100%;*/
          --ma-card-frame:{
            height: 78vh;
          }
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


        @media screen and (max-width: 900px){
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
          #educationDetailsCard, #educationDetailsCard>div[slot="content"]{
          --ma-card-frame:{
            height: 44vh;
          }
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
            width: 50%;
          }
          li{
            font-size: 15pt;
            line-height: 28px;
          }
          #coursesTitle{
            font-size: 18pt;
            margin-bottom: 0;
          }
          .schoolName{
            font-size: 12pt;
          }
          #educationInfoCard{
            --ma-card-frame:{
              height: 150%;
            }
          }
        }

      </style>

    <div id="centeredCard">

        <ma-card class="">
          <div slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
        </ma-card>
      
        <div id="pageContent">

          <div id="educationInfoContainer">
              <div id="educationIcon"><img src="src/images/Education.png"></div>
              <ma-card id="educationInfoCard">
                <div slot="content">
                  <p class="schoolName">[[_toUpperCase(data.schoolName)]]</p>
                  <p class="degreeInfo">[[data.degreeName]] - [[data.majorName]]</p>
                  <p class="dateRange">[[data.startDate]] - [[data.endDate]]</p>
                  <p class="location">GPA - [[data.gpaValue]] on a 4.00 scale.</p>
                  <div id="schoolIcon"><img src="src/images/csub.png"></div>
                </div>
              </ma-card>
          </div>

          <div id="educationDetailsContainer">
            <ma-card id="educationDetailsCard">
              <div slot="content">
                <h2 id="coursesTitle">COURSES INCLUDED</h2>
                  <ul>
                    <dom-repeat id="repeat" items="[[data.courses]]">
                      <template>
                          <li>[[item]]</li>
                      </template>
                    </dom-repeat>
                  </ul>
              </div>
            </ma-card>
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

window.customElements.define('ma-education-page', MaEducationPage);
