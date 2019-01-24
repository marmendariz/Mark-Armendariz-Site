
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';

import {MaCard} from '../../util-components/ma-card/ma-card.js';
import {MaIcon} from '../../util-components/ma-icon/ma-icon.js';

export class MaHomePage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: var(--ma-page-background-color ,white);
        }
        div[slot="subtitle"]{
          @apply --ma-subtitle-text;
        }
        #traitIcons{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
        }
        .traitIcon{
          --ma-icon-background-color : var(--ma-main-theme-color);
          --ma-icon-border-radius: 50%;
          --ma-icon-style:{
            width: 150px;
            height: 150px;
          }
          margin: 0 30px;
          padding: 20px;
        }
        .traitIcon:hover{
          filter: drop-shadow(var(--ma-card-box-shadow, 10px 10px 10px #55555557));
          transform: translate(-1%, -2%);
          --ma-icon-background-color : var(--ma-main-theme-color-lite);
        }
        .highlighted{
          color: var(--ma-main-theme-color);
        }
        /*@media (min-width: 1281px) {
        }
        @media (min-width: 1025px) and (max-width: 1280px) {
        }
        @media (min-width: 768px) and (max-width: 1024px) {
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        }
        @media (min-width: 481px) and (max-width: 767px) {
        }
        @media (min-width: 320px) and (max-width: 480px) {
        }*/
      </style>
      <div>
        <ma-card class="centeredCard">
          <div id="titleSlot" slot="title"><h1>Hi, I'm <span class="highlighted"> Mark.</span></h1></div>
          <div slot="subtitle">[[subtitle]]</div>

          <div slot ="content">
            <p>[[data.topMsg]]
            </p>
          </div>
        </ma-card>

        <div id="pageContent">
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
      data:{
        type: Object
      }
    };
  }

  _handlePageButtonClick(e){
    this.dispatchEvent(new CustomEvent('homeEnterTap', {bubbles: true, composed: true}));
  }

  _toUpperCase(text){
    return text.toUpperCase();
  }

}

window.customElements.define('ma-home-page', MaHomePage);
