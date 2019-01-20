
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';
import {ScButton} from '../../sc-button/sc-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * @customElement
 * @polymer
 */


export class ScProjectCard extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --sc-card-frame:{
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
          cursor: pointer;
        }
        div[slot="content"]{
          @apply --sc-project-card-style;
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
        sc-button{
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
        /*.cardFront{
        }*/
        .cardBack{
          background-color: white;
          transform: rotateY(180deg);
        }
        .cardFront{
          z-index: 2;
          transform: rotateY(0deg);
        }
        paper-dialog{
          height: 50%;
          width: 75%;
        }
        paper-dialog>h1{
          text-align: center;
        }
        #modalView{

        }

      </style>

      <div id="mark">


      <div id="flip" class="flipCard"on-tap="_handleButtonClick">
          <div class="flipCardInner">


              <sc-card class="centeredCard" >
                  <div slot=content>
                      <div class="cardFront">
                      </div>
                      
                      <div class="cardBack">
                          <div id="cardText">
                              <div id="title">[[title]]</div>
                              <div id="text">[[text]]</div>
                          </div>
                      </div>

                  </div>
              </sc-card>  


          </div>
      </div>

        <!--<sc-project-modal id="modalView" opened={{opened}}>
        </sc-project-modal>-->

        <paper-dialog opened={{opened}}>
          <h1>[[title]]</h1>
<p>asdfkasdfkasdfk</p>
        </paper-dialog>


      </div>




      <!--<div id="icon">-->

        <!--<sc-card class="centeredCard">
          <div slot=content>
            </div>
        </sc-card>-->



        <!--</div>-->



    `;
  }


  static get properties() {
    return {
      /**
       * Title of Resume Section
       */
      title:{
        type: String,
        //observer: "_titleProcess"
      },
      text:{
        type: String
      },
      iconPath:{
        type: String,
        value: "src/images/projects/"
      },
      iconName:{
        type: String,
        value: "project",
        observer: "_setIconImage"
      },
      opened:{
        type: Boolean,
        value: false,
        notify: true,
      }
      
    };
  }

  ready(){
    super.ready();
  }

  _handleButtonClick(e){
    //this.$.flip.classList.toggle('hover');
      this.opened = !this.opened;;
  }

  _titleProcess(title){
    var temp = title.split(' ');
    if(temp.length > 1){
      console.log(temp);
      this.$.title.innerHTML =  temp[0] + "<br>" + temp[1];
    }
    else{
    this.$.title.innerHTML= temp[0];
    }
  }

  _setIconImage(iconName){
    this.updateStyles({"--sc-card-background-image": "url("+this.iconPath + iconName +".png)"});
  }


}

window.customElements.define('sc-project-card', ScProjectCard);
