
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {MaCard} from '../../util-components/ma-card/ma-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '../ma-project-card/ma-project-card.js';

/**
 * @customElement
 * @polymer
 */


export class MaProjectsPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: var(--ma-page-padding, 0px);
          background-color: var(--ma-page-background-color ,white);
        }
        div[slot="subtitle"]{
          @apply --ma-subtitle-text;
        }
        #contentSlot{
          @apply --ma-resume-page-style;
        }
        ma-project-card{
          flex: 1;
          --ma-project-card-style:{
            height: 30vh;
            width: 120px;
          }
        }
        #projectCards{
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin: 15px 0;
        }

        ma-card#comingSoonCard{
          margin-top: 40px;
        }
        h3#comingSoonMsg{
          text-align: center;
        }
      </style>

      <div class="centeredCard">
        <ma-card >
          <div id="titleSlot" slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
        </ma-card>

        <div id="projectCards">
            <ma-project-card title="My Website"
                             icon-name="markArmendarizWebsiteIcon">
            </ma-project-card>
            <ma-project-card title="Mobile-First Forum"
                             icon-name="forumProjectIcon">
            </ma-project-card>
            <ma-project-card title="Relational Database & Java GUI"
                             icon-name="databaseProjectIcon">
            </ma-project-card>
        </div>
        
        <ma-card id="comingSoonCard">
          <div slot="content">
            <h3 id="comingSoonMsg">More projects coming soon</h3>
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

window.customElements.define('ma-projects-page', MaProjectsPage);
