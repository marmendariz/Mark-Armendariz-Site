
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {ScResumeEntry} from '../sc-resume-entry/sc-resume-entry.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import {ScIcon} from '../../sc-icon/sc-icon.js';
/**
 * @customElement
 * @polymer
 */


export class ScHomePage extends PolymerElement {
  
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
        .centeredCard{
          --sc-card-frame:{
           /* min-height: 93vh;*/
          }
        }
        #traitIcons{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
        }
        sc-icon{
          --sc-icon-background-color : var(--sc-main-theme-color);
          --sc-icon-border-radius: 50%;
          --sc-icon-style:{
            width: 100px;
            height: 100px;
          }
          margin: 0 43px;
        }
        sc-icon:hover{
          filter: drop-shadow(var(--sc-card-box-shadow, 10px 10px 10px #55555557));
          transform: translate(-1%, -2%);
        }
        .highlighted{
          color: var(--sc-main-theme-color);
        }
        #pageContent{
          padding: 20px 0px;
        }


        @media screen and (max-width: 1110px){
          sc-icon{
            margin: 10px;
            flex-wrap: wrap;
          }
        }

        /*@media screen and (max-width: 820px){
          sc-icon{
            margin: 5px;
            --sc-icon-style:{
              width: 40px;
              height: 40px;
            }
          }
        }

        @media screen and (max-width: 420px){
          sc-icon{
            margin: 0;
            --sc-icon-style:{
              width: 20px;
              height: 20px;
            }
          }
        }*/

      </style>
<div>
      <sc-card class="centeredCard">
        <div id="titleSlot" slot="title"><h1>Hi, I'm <span class="highlighted"> Mark.</span></h1></div>
        <div slot="subtitle">[[subtitle]]</div>
        <!--<div id="traitIconsTitle">This is who I am:</div>-->

        <div slot ="content">
          <p>I'm a software engineer with to kadfalsdfkad kjdsfkd kjdfj dfjd dfjdf js
             kjsadfka sdjfsk dfjkjk dfjdkk jkdfjk mkdfjk mkk k jkdfjkd  jkjkjkdf kjdsfkdk
             ljlkj lkjjii  jjdjd jdjdjd.
          </p>
        </div>
      </sc-card>

      <div id="pageContent">
        <div id="traitIcons">
          <sc-icon title="Reliable Performer"
                    icon-name="ReliablePerformer"
                    text="Whatever lands on my desk will always get done.">
          </sc-icon>
          <sc-icon title="Philomath"
                    icon-name="Philomath"
                    text="Whatever lands on my desk will always get done.">
          </sc-icon>
          <sc-icon title="Problem Solver"
                    icon-name="ProblemSolver"
                    text="Whatever lands on my desk will always get done.">
          </sc-icon>
          <sc-icon title="Strategist"
                    icon-name="Strategist"
                    text="Whatever lands on my desk will always get done.">
          </sc-icon>
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
        type: String
      },
      subtitle:{
        type: String
      },

      sectionId: {
        type: String
      },


      selected:{
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },

    };
  }

  _handlePageButtonClick(e){
    //this.selectedPage = e.detail;
    console.log("home");
    this.dispatchEvent(new CustomEvent('homeEnterTap', {bubbles: true, composed: true}));
  }


}

window.customElements.define('sc-home-page', ScHomePage);
