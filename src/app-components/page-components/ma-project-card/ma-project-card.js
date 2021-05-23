import { html, PolymerElement } from "../../../../node_modules/@polymer/polymer/polymer-element.js";
import "../../../../node_modules/@polymer/polymer/lib/elements/dom-if.js";
import "../../../../node_modules/@webcomponents/shadycss/entrypoints/apply-shim.js";
import { updateStyles } from "../../../../node_modules/@polymer/polymer/lib/mixins/element-mixin.js";
import { MaButton } from '../../util-components/ma-button/ma-button.js';
import { MaCard } from '../../util-components/ma-card/ma-card.js';
import { MaProjectDialog } from '../ma-project-dialog/ma-project-dialog.js';
/**
 * @customElement
 * @polymer
 */

export class MaProjectCard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --ma-card-frame:{
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          };
          cursor: pointer;
        }
        div[slot="content"]{
          @apply --ma-project-card-style;
        }
        #icon{
          text-align: center;
        }
        #cardText{
          text-align: center;
          transform: translate(-50%, -50%);
          position: absolute;
          top: 50%;
          left: 50%;
          font-size: 15pt;
        }
        #title{
          font-weight: bold;
        }
        ma-button{
          margin-top: 10px;
        }


        /**
         * Project Flip Card CSS
         */
        .flipCard{
          perspective: 1000px;
        }
        .flipCard:hover .flipCardInner, .flipCard.hover .flipCardInner{
          transform: rotateY(180deg);
        }
        .flipCard .cardFront .cardBack{
          width: 320px;
          height: 480px;
        }
        .flipCardInner{
          transition: 0.6s;
          transform-style: preserve-3d;
          position: relative;
        }
        .cardFront, .cardBack{
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
        .cardBack{
          background-color: white;
          transform: rotateY(180deg);
        }
        .cardFront{
          z-index: 2;
          transform: rotateY(0deg);
        }
        #cardFrontOverlay{
          position: absolute;
          background-color: var(--ma-main-theme-color-lite-transparent);
          width: 100%;
          height: 100%;
          top: 0%;
          left: 0%;
        }
        @media (max-width: 800px) {
          .cardBack{
            transform: none;
            background-color: #ffffffc7;
          }
          .flipCard:hover .flipCardInner, .flipCard.hover .flipCardInner{
            transform: none;
          }
          #cardText{
            font-size: 20pt;
          }
        }
      </style>

      <div id="projectCard">


        <div id="flip" class="flipCard"on-tap="_handleButtonClick">
          <div class="flipCardInner">
            <ma-card class="centeredCard" >
                <div slot=content>
                    <div id="cardFrontOverlay">
                    </div>
                    <div class="cardFront">
                    </div>
                    <div class="cardBack">
                        <div id="cardText">
                            <div id="title">[[title]]</div>
                            <div id="text">[[text]]</div>
                        </div>
                    </div>
                </div>
            </ma-card>  
          </div>
        </div>

        <ma-project-dialog opened={{opened}}
                           title=[[title]]
                           data=[[data]]
                           technologies=[[technologies]]
                           image-name=[[imageName]]
                           start-date=[[startDate]]
                           end-date=[[endDate]]>
        </ma-project-dialog>

      </div>

    `;
  }

  static get properties() {
    return {
      /**
       * Title of Resume Section
       */
      title: {
        type: String //observer: "_titleProcess"

      },
      startDate: {
        type: String
      },
      endDate: {
        type: String
      },
      data: {
        type: Array
      },
      technologies: {
        type: Array
      },
      text: {
        type: String
      },
      iconPath: {
        type: String,
        value: "src/images/projects/"
      },
      iconName: {
        type: String,
        value: "project",
        observer: "_setIconImage"
      },
      imageName: {
        type: String
      },
      opened: {
        type: Boolean,
        value: false,
        notify: true
      }
    };
  }

  ready() {
    super.ready();
  }

  _handleButtonClick(e) {
    //this.$.flip.classList.toggle('hover');
    this.opened = !this.opened;
    ;
  }

  _titleProcess(title) {
    var temp = title.split(' ');

    if (temp.length > 1) {
      console.log(temp);
      this.$.title.innerHTML = temp[0] + "<br>" + temp[1];
    } else {
      this.$.title.innerHTML = temp[0];
    }
  }

  _setIconImage(iconName) {
    this.updateStyles({
      "--ma-card-background-image": "url(" + this.iconPath + iconName + ".png)"
    });
  }

}
window.customElements.define('ma-project-card', MaProjectCard);