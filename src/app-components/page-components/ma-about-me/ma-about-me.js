
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

        #traitIcons{
          display: flex;
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
          padding: 20px;
        }
        .traitIcon:hover{
          filter: drop-shadow(var(--ma-card-box-shadow, 10px 10px 10px #55555557));
          transform: translate(-1%, -2%);
          --ma-icon-background-color : var(--ma-main-theme-color-lite);
        }
        @media (min-width: 700px) and (max-width: 1025px){
          .traitIcon{
            width: 225px;
            --ma-icon-style:{
              width: 100px;
              height: 100px;
            }
          }
          #traitIcons{
            display: grid;
            grid-template-columns: 50% 50%;
            margin: 0 auto;
            justify-items: center;
          }
        }
        @media (max-width: 699px){
          .traitIcon{
            width: unset;
            padding: 10px;
            --ma-icon-style:{
              width: 100px;
              height: 100px;
            }
          }
          #traitIcons{
            display: block;
          }
        }

        #about-me-wrapper #about-me-text{
          line-height: 30px;
          font-size: 12pt;
        }

        #photo-wrapper{
          float: right;
        }
        #photo{
          background-image: url("src/images/me2.png");
          background-size: contain;
          background-repeat: no-repeat;
          height: 367px;
          width: 276px;
          margin-left: 10px;
          margin-bottom: 10px;
        }
      </style>

      <div id="contactPage">
        <ma-card>
          <div slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
          <div slot="content">
            <div id="about-me-wrapper">
                <div id="photo-wrapper">
                  <div id="photo"></div>
                </div>
                <div id='about-me-text'>
                <p>{{data.aboutMe1}}</p>
                <p>{{data.aboutMe2}}</p>
                <p>{{data.aboutMe3}}</p>
                </div>
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
                      title="{{_toUpperCase('Fast Learner')}}"
                      icon-name="FastLearner"
                      text=[[data.fastLearnerMsg]]>
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
