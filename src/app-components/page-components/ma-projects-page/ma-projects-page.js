
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {MaCard} from '../../util-components/ma-card/ma-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

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
        #comingSoonCard{
          margin-top: 100px;
        }
        #comingSoonCard div[slot="content"]{
          background-color : var(--ma-main-theme-color);
          height: 100px;
        }
        #comingSoonCard div[slot="content"]:hover{
          background-color : white;
          color: black;
        }
        #comingSoonMsg{
          text-align: center;
          color: white;
          text-decoration: none;
          font-size: 20pt;
          display: block;
          line-height: 100px;
          font-weight: bold;
        }
        #comingSoonMsg:hover{
          color: black;
        }
        @media (min-width: 320px) and (max-width: 480px) {
          #comingSoonCard{
            margin-top: 0px;
            margin-bottom: 10px;
          }
        }
      </style>

      <div class="centeredCard">
        <ma-card >
          <div id="titleSlot" slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
        </ma-card>

        <ma-card id="comingSoonCard">
          <div slot="content">
            <a id="comingSoonMsg" href="{{url}}" target="">Enter Projects Website</a>
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
      data:{
        type: Array
      },
      url:{
        type: String
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
