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

      <!-- ====== APPLICATION ROUTING ====== -->
      <app-location route="{{route}}">
      </app-location>

      <app-route route="{{route}}"
                 pattern="/:name"
                 data="{{selectedPage}}"
                 tail="{{subroute}}">
      </app-route>
      <!-- ================================= -->

      <!-- ====== MAIN APPLICATION STARTIN POINT ====== -->
      <sc-card id="appCard">
        <div slot="content">
          
          <sc-menu-bar id="menuBar" 
                       selected-page="{{selectedPage}}"
                       pages="{{appPages}}">
          </sc-menu-bar>

          <iron-pages id="appIronPages" 
                      selected="{{selectedPage.name}}" 
                      attr-for-selected="title">
          </iron-pages>

        </div>
      </sc-card>
      <!-- =========================================== -->

    `;
  }

  
  static get properties() {
    return {
      /**
       * TODO: Set this value from web service response
       */
      appPages: {
        type: Array,
        value: [
                {
                  id: 1,
                  name: 'Home'
                }, 
                {
                  id: 2,
                  name: 'Skills'
                },
                {
                  id: 3,
                  name: 'Education'
                },
                {
                  id: 4,
                  name: 'Direct Experience'
                },
                {
                  id: 5,
                  name: 'Projects'
                },
                {
                  id: 6,
                  name: 'Additional Experience'
                },
                {
                  id: 7,
                  name: 'Contact'
                }
              ]
      },
      
      /**
       * Holds information for page currently selected 
       * and displayed
       */
      selectedPage: {
        type: Object,
        notify: true,
        value: {
              id: 1,
              name: 'Home'
        },
        reflectToAttribute: true,
        observer: "_pageChanged"
      },
    };
  }

  connectedCallback(){
    super.connectedCallback();
    this._generateApplicationPages();
  }

  /**
   * Generates and appends page elements into app DOM
   */
  _generateApplicationPages(){
    for(var i of this.appPages){
      var newSection = document.createElement('sc-resume-section');
      newSection.setAttribute('title', i.name);
      newSection.setAttribute('section-id', i.id);
      this.$.appIronPages.appendChild(newSection);
    }
  }


  _pageChanged(){
    ///alert("LOADING...");
  }



}

window.customElements.define('showcase-application', ShowcaseApplication);
