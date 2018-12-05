import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/legacy/polymer.dom';
import {ScMenuBar} from '../component-library/sc-menu-bar/sc-menu-bar.js';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-pages/iron-pages';
import {ScCard} from '../component-library/sc-card/sc-card.js';
import {ScResumeSection} from '../component-library/page-library/sc-resume-section/sc-resume-section.js';

/**
 * @customElement
 * @polymer
 */
class ShowcaseApplication extends PolymerElement {
 
  static get template() {
    return html`
      
      <style>
        :host {
          display: block;
          --icon-toggle-outline-color: blue;
        }

        #menuBar{
          width: auto;
          margin-bottom: 20px;
        } 

        #appCard{
          width: 95%;
          margin: 0 auto;
        }
      </style>

      <sc-card id="appCard">
        <div slot="content">

          <sc-menu-bar id="menuBar"></sc-menu-bar>

          <iron-pages attr-for-selected="id" selected="Education">
            <div id="LoadingPage"></div>
            <div id="HomePage"></div>

            <div id="Education">
              <sc-resume-section title="education"></sc-resume-section>
            </div>

            <div id="DirectExperiencePage"></div>
            <div id="SpecialProjectsPage"></div>
            <div id="Additional Experience Page"></div>
            <div id="SkillsPage"></div>
          </iron-pages>

        </div>
      </sc-card>
      

    `;
  }

  
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'showcase-application'
      },
      appPages: {
        type: Array,
        value: ['Home', 
                'Skills',
                'Education', 
                'Direct Experience',
                'Special Projects',
                'Additional Experience',
                'Contact',
              ]
      },
      resumeData:{
        type: Object,
        value() {
          return {};
        }
      }
    };
  }

  connectedCallback(){
    super.connectedCallback();

    for(let pageName of this.appPages){
      console.log(pageName);
      var newPage = document.createElement("div");
      newPage.attributes.id = pageName;
      newPage.textContent = pageName;
     // Polymer.dom(this.$.pages).appendChild(newPage);
      //this.$.pages.appendChild(newPage);
    }

  }



}

window.customElements.define('showcase-application', ShowcaseApplication);
