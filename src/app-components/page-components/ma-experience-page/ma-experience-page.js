
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

import {MaCard} from '../../util-components/ma-card/ma-card.js';

/**
 * @customElement
 * @polymer
 */


export class MaExperiencePage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          position: relative;
          display: block;
          background-color: var(--ma-page-background-color ,white);
          height: 100%;
        }
        .jobCard{
          --ma-card-padding:7px 20px;
        }
        div[slot="subtitle"]{
          color: #0c4e8a;
          font-weight: bold;
          font-size: 15pt;
        }

        ma-card.selected{
          --ma-card-background-color : #404042;
          --ma-card-style:{
            color: var(--ma-accent-font-color);
          }
        }
        ma-card.ignore{
          --ma-card-style:{
            color: var(--ma-suppress-font-color);
          }
        }

        #pageContent{
          display: flex;
          /*height: 76vh;*/
          position: relative;
        }
        #pageTitleCard{
          margin-bottom: 20px;
        }

        #jobsListContainer{
          margin: 0px 10px 0px 0px;
          display: table;
          table-layout: fixed;
          width: 45%;
        }
        .jobCard{
          display: table-row;
          height: auto;
          cursor: pointer;
          --ma-card-frame:{
            margin-bottom: 10px;
          }
        }
        #jobDetailsContainer{
          width: 55%;
          margin: 0px 0px 0px 10px;
          display: table;
          height: 100%;
        }
        #jobDetailsCard{
          display: table-row;
          /* height: 100%; */
          --ma-card-padding: 20px 25px 20px 25px;
        }
        #jobDetailsCard li{
          font-size: 10pt !important;
          line-height: 22px;
          margin-bottom: 10px;        
        }

        /**************************/

        .jobCard>div[slot="content"]{
          line-height: 15px;
        }


        /*********************/
        li{
          line-height: 28px;
          margin: 10px 0;
        }
        ul{
          padding-left: 24px;
          font-size: 11pt;
        }
        .companyName{
          font-size: 12pt;
          line-height: 0px;
        }
        .positionName{
          font-size: 8pt;
          line-height: 4px;
        }

        .companyName, .positionName{
          font-weight: bold;
        }
        .dateRange{
          margin-top: 20px;
        }
        .dateRange, .location{
          line-height: 5px;
          font-size: 10pt;
        }
        /*********************/

        /*****************************************/
        @media screen and (max-width: 900px){
          .companyName{
            font-size: 11pt;
          }
          .positionName{
            font-size: 9pt;
          }
          .location{
            display: none;
          }
          ul{
            font-size: 10pt;
          }
        }
        /*****************************************/

        /*****************************************/
        /* SMALLER RESOLUTION STYLES */
        @media screen and (max-width: 730px){
          li{
           line-height: 27px;
           margin: 0;
          }
          ul{
            font-size: 9pt;
          }
          #jobsListContainer{
            table-layout: unset;
          }
          .jobCard{
            display: block;
            --ma-card-frame:{
              height: 150px;
           }
          }
          .companyName, .positionName{
            line-height: 15px
          }
          .dateRange{
            line-height: 15px;
            margin-top: 10px;
          }
          #pageContent{
            display: block;
          }
          .jobCard>div[slot="content"]{
             height: 115px;
          }
          #jobDetailsCard>div[slot="content"]{
            width: 100%;
          }
          #jobsListContainer{
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .jobCard{
            width: 100%;
            margin: 10px 2px;
          }
          #jobDetailsContainer{
            margin: 0px 0px;
            width: 100%;
            height: 66%;
          }
        }

        /*****************************************/
        @media (min-width: 1281px) {
          li{
            font-size: 14pt !important;
            line-height: 35px;
          }

        }

        @media (min-width: 1025px) and (max-width: 1280px) {
        }

        @media (min-width: 731px) {
          #jobDetailsCard{
            transform: none;
          }
          li{
            font-size: 12pt;
          }
          .companyName{
            font-size: 16pt;
            line-height: 0px;
          }
          .positionName{
            font-size: 13pt;
            line-height: 10px;
            margin-bottom: 30px;
          }
          .dateRange, .location{
            font-size: 13pt;
          }
        }

        @media (min-width: 731px) and (max-width: 1024px) and (orientation: landscape) {
        }

        @media (min-width: 481px) and (max-width: 730px) {
          .jobCard{
            --ma-card-padding: 10px 10px;
          }
          li{
           font-size: 11pt;
          }
        }

        @media (min-width: 320px) and (max-width: 480px) {
          .jobCard{
            --ma-card-padding: 10px 5px;
          }
        }

        ul{
          padding-left: 20px;
        }
      </style>

  <div>
        <ma-card id="pageTitleCard" class="">
          <div slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
        </ma-card>
      
        <div id="pageContent">

            <div id="jobsListContainer">
            <dom-repeat id="repeat" items="{{data}}" as="section">
              <template>
                <ma-card id="[[section.id]]" class="jobCard" on-tap="_setAsSelected">
                  <div slot="content">
                    <p class="companyName">[[section.companyName]]</p>
                    <p class="positionName">[[section.positionName]]</p>
                    <p class="dateRange">[[section.startDate]] - [[section.endDate]]</p>
                    <p class="location">[[section.city]], [[section.state]]</p>
                  </div>
                </ma-card>
              </template>
            </dom-repeat>
            </div>

            <div id="jobDetailsContainer">
              <ma-card id="jobDetailsCard">
                <div slot="content">
                    <ul>
                      <dom-repeat id="repeat" items="[[_selectedData]]">
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
        reflectToAttribute: true
      },

      data:{
        type: Object,
        notify: true,
      },

      _selectedData:{
        type: Array
      },

      defaultDetailsMessage: {
        type: String,
        value: "Select an experience card for more details"
      }
    };
  }

  ready(){
    super.ready();
    this._selectedData = [this.defaultDetailsMessage];
  }

  _setAsSelected(e){
    var targetElement;
    var selectedClass = "selected";
    var targetElementName = "MA-CARD";

    if(e.target.tagName == targetElementName){
      targetElement = e.target;
    }
    else{
      var tempElement = e.target;
      while(tempElement.tagName != targetElementName){
        tempElement = tempElement.parentElement;
      }
      targetElement = tempElement;
    }
    if(targetElement.classList.contains(selectedClass)){
      targetElement.classList.remove(selectedClass);
      this._removeClassByName("ignore", targetElementName.toLowerCase());
    }
    else{
      this._removeClassByName(selectedClass, targetElementName.toLowerCase());
      targetElement.classList.add(selectedClass);
      targetElement.classList.remove("ignore");
      this._suppressNonSelectedjobCards();
    }
    this.updateStyles();

    var tempSelection = this.data[parseInt(targetElement.id)-1].points;
    if(tempSelection!= this._selectedData){
      this._selectedData = tempSelection;
    }
    else{
      this._selectedData = [this.defaultDetailsMessage];
    }

  }

  _suppressNonSelectedjobCards(){
    var selectedElements = this.shadowRoot.querySelectorAll(".jobCard");
    for(var element of selectedElements){
      if(!element.classList.contains("selected")){
        element.classList.add("ignore");
      }
    }
    this.updateStyles();

  }

  _removeClassByName(className, tagName){
    var queryString = tagName + "." + className;
    var selectedElements = this.shadowRoot.querySelectorAll(queryString);
    for(var element of selectedElements){
      element.classList.remove(className);
    }
    this.updateStyles();
  }

  /**
   * 
   * @param {*} sectionId 
   */
  _getPageData(sectionId){
    return this.data[parseInt(sectionId)].jobs;
  }

  /**
   * Utility method for converting text to lowercase
   * @param {*} title 
   */
  _toLowerCase(text){
    return text.toLowerCase();
  }

}

window.customElements.define('ma-experience-page', MaExperiencePage);
