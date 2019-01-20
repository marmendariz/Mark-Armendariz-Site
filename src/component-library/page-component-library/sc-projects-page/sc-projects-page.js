
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {ScResumeEntry} from '../sc-resume-entry/sc-resume-entry.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '../sc-project-card/sc-project-card.js';

/**
 * @customElement
 * @polymer
 */


export class ScProjectsPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: var(--sc-page-padding, 0px);
          background-color: var(--sc-page-background-color ,white);
        }
        div[slot="subtitle"]{
          @apply --sc-subtitle-text;
        }
        #contentSlot{
          @apply --sc-resume-page-style;
        }
        sc-project-card{
          flex: 1;
          --sc-project-card-style:{
            height: 20vh;
            width: 120px;
          }
        }
        #projectCards{
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin: 15px 0;
        }
      </style>

      <div class="centeredCard">
        <sc-card >
          <div id="titleSlot" slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>

        </sc-card>

        <div id="projectCards">
            <sc-project-card title="My Website">
            </sc-project-card>
            <sc-project-card title="Mobile-First Forum">
            </sc-project-card>
            <sc-project-card title="Relational Database & Java GUI">
            </sc-project-card>
            <!--<sc-project-card title="test"></sc-project-card>
            <sc-project-card title="test"></sc-project-card>
            <sc-project-card title="test"></sc-project-card>-->
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
        type: String
      },

      pageId: {
        type: String,
        reflectToAttribute: true
      },

      resumeSectionData:{
        type: Object,
        value:[
          {

          }
        ]
      }

    };
  }

  /**
   * Utility method for converting text to lowercase
   * @param {*} title 
   */
  _toLowerCase(text){
    return text.toLowerCase();
  }


}

window.customElements.define('sc-projects-page', ScProjectsPage);
