
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

import {MaCard} from '../../util-components/ma-card/ma-card.js';
import '../ma-skill-progress-bar/ma-skill-progress-bar.js';

/**
 * @customElement
 * @polymer
 */


export class MaSkillsPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: var(--ma-page-background-color ,white);
        }
        div[slot="subtitle"]{
          color: #0c4e8a;
          font-weight: bold;
          font-size: 15pt;
        }
        ma-skill-progress-bar:hover{
          box-shadow: var(--ma-card-box-shadow, 10px 10px 47px 20px #55555557);
          transform: translate(-1%, -2%) scale(1.0, 1.0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translate(-1%, -2%) scale(1.0, 1.0);
          --ma-skill-progress-bar-color: var(--ma-main-theme-color-lite);
        }
        ul{
          padding: 0px;
        }
        #skillsList{
          height: 80%;
          margin: 45px auto;
          width: 70%;
        }
        ma-skill-progress-bar{
            margin: 30px 0px 25px 0px;
        }
        #otherSkillsTitle{
          color: var(--ma-main-theme-color);
          margin-bottom: 5px;
        }
        ul{
          padding-left: 17px;
          margin-top: 0px;
          font-weight: 700;
          font-size: 14pt;
        }
        @media (min-width: 320px) and (max-width: 480px) {
          #skillsList{
            width: 100%;
          }
          ma-card{
            --ma-card-padding: 10px;
          }
        }
      </style>

<div>
      <ma-card>
        <div id="titleSlot" slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
        <div slot="subtitle">[[subtitle]]</div>

        <div slot="content" id="skillsList">
            <dom-repeat id="repeat" items="{{data}}" as="skill">
              <template>
                  <ma-skill-progress-bar id=[[skill.id]]
                                         class="progressBar"
                                         progress=[[skill.skillLevel]]
                                         title=[[skill.name]]
                                         comment=[[skill.comment]]>
                  </ma-skill-progress-bar>
              </template>
            </dom-repeat>

            <h3 id="otherSkillsTitle">Previous Experience with:</h3>
            <ul id="otherSkillsList">
              <dom-repeat id="repeat" items="{{otherData}}" as="skill">
                <template>
                    <li>[[skill.name]]</li>
                </template>
              </dom-repeat>
            </ul>

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
        reflectToAttribute: true
      },
      data:{
        type: Object,
        notify: true,
      },
      otherData:{
        type: Object,
        notify: true
      }
    };
  }

  ready(){
    super.ready();
  }

  /**
   * Utility method for converting text to lowercase
   * @param {*} title 
   */
  _toLowerCase(text){
    return text.toLowerCase();
  }

}

window.customElements.define('ma-skills-page', MaSkillsPage);
