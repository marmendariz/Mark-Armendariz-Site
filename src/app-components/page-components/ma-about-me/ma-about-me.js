
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import {MaIcon} from '../../util-components/ma-icon/ma-icon.js';
import {MaCard} from '../../util-components/ma-card/ma-card.js';

export class MaAboutMe extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: var(--ma-page-padding, 0px);
          --ma-card-background-image: none;
          --ma-card-background-color: none;
          --ma-card-box-shadow: none;
        }
        div[slot="subtitle"]{
          @apply --ma-subtitle-text;
        }
        div[slot="content"]{
          /* padding: 50px; */
          @apply --ma-resume-page-style;
        }
        #pageContent{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin-top: 20px;
          --ma-card-frame:{
            height: 100% !important;
          }
        }

        #about-me-wrapper{
          display: flex;
        }


        #traitIcons{
          display: flex;
          /* flex-wrap: wrap; */
          justify-content: center;
          margin-top: 20px;
        }
        .traitIcon{
          width: 437px;
          --ma-icon-background-color : var(--ma-main-theme-color);
          --ma-icon-border-radius: 50%;
          --ma-icon-style:{
            width: 100px;
            height: 100px;
          }
          /* margin: 0 30px; */
          padding: 20px;
        }
        .traitIcon:hover{
          filter: drop-shadow(var(--ma-card-box-shadow, 10px 10px 10px #55555557));
          transform: translate(-1%, -2%);
          --ma-icon-background-color : var(--ma-main-theme-color-lite);
        }
        @media (min-width: 320px) and (max-width: 1025px) {
          .traitIcon{
            width: 252px;
            --ma-icon-style:{
              width: 150px;
              height: 150px;
            }
          }
        }

        #about-me-wrapper #about-me-text{
          line-height: 30px;
          padding-right: 90px;
          font-size: 12pt;
          width: 74%;
        }

        #photo{
          background-image: url("src/images/me2.png");
          background-size: contain;
          background-repeat: no-repeat;
          height: 367px;
          width: 315px;
        }
      </style>

      <div id="contactPage">
        <ma-card>
          <div slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
          <div slot="content">
            <div id="about-me-wrapper">
              <div id="about-me-text">
                <p>{{data.aboutMe1}}</p>
                <p>{{data.aboutMe2}}</p>
              </div>
              <!-- <img src="src/images/me2.png"> -->
              <div id="photo"></div>
            </div>

            <div id="traitIcons">
              <ma-icon class="traitIcon"
                      title="{{_toUpperCase('Reliable Performer')}}"
                      icon-name="ReliablePerformer"
                      text=[[data.reliablePerformerMsg]]>
              </ma-icon>
              <ma-icon class="traitIcon"
                      title="{{_toUpperCase('Philomath')}}"
                      icon-name="Philomath"
                      text=[[data.philomathMsg]]>
              </ma-icon>
              <ma-icon class="traitIcon"
                      title="{{_toUpperCase('Problem Solver')}}"
                      icon-name="ProblemSolver"
                      text=[[data.problemSolverMsg]]>
              </ma-icon>
              <ma-icon class="traitIcon"
                      title="{{_toUpperCase('Strategist')}}"
                      icon-name="Strategist"
                      text=[[data.strategistMsg]]>
              </ma-icon>
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
        reflectToAttribute: true
      },
      data:{
        type: Object
      }
    };
  }

  /**
   * 
   * @param {*} sectionId 
   */
  _getPageData(sectionId){
    return this.resumeSectionData[parseInt(sectionId)].entries;
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
}

window.customElements.define('ma-about-me', MaAboutMe);
