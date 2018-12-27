
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {ScResumeEntry} from '../sc-resume-entry/sc-resume-entry.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '../sc-skill-progress-bar/sc-skill-progress-bar.js';

/**
 * @customElement
 * @polymer
 */


export class ScSkillsPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          border-bottom: 1px solid grey;
          padding: var(--sc-page-padding, 0px);
        }
        :host sc-skill-progress-bar{
          margin: 20px;
        }
        ul{
          padding: 0px;
        }
        #skillsList{
          margin: 0 auto;
          width: 80%;
          padding: 15px 0px;
        }

        .box{
    width:300px;
    height:300px;
    margin:500px 50px;
    background:red;
    transition: 1.5s; /* THE DURATION */
}

.rotate.triggeredCSS3    {transform : rotate(360deg); }
.scale.triggeredCSS3     {transform : scale(1.6); }
.translate.triggeredCSS3 {transform : translate3d(400px,0,0); }

        @media screen and (max-width: 900px){
          #skillsList{
            width: 100%;
          }
          :host{
            padding: 0px 10px
          }
        }
      </style>

      <div id="titleSlot" slot="title"><h1>{{_toLowerCase(title)}}</h1></div>

      <div id="skillsList">
          <dom-repeat id="repeat" items="{{data}}" as="skill">
            <template>
                <sc-skill-progress-bar id=[[skill.id]]
                                      bar-progress=[[skill.skillLevel]]
                                      title=[[skill.name]]
                                      comment=[[skill.comment]]>
                </sc-skill-progress-bar>
            </template>
          </dom-repeat>

          <!--<div class="box rotate"></div>
<div class="box scale"></div>
<div class="box translate"></div>
      </div>-->

      
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

      pageId: {
        type: String,
        reflectToAttribute: true
      },



      isGeneralType:{
        type: Boolean,
        value: false,
      },
      
      /**
       * TODO: Replace with web service response
       */
      data:{
        type: Object,
        observer: "_test",
        notify: true,
      }
    };
  }

  ready(){
    super.ready();

    $(".box").inViewport(function(px){
      if(px) $(this).addClass("triggeredCSS3") ;
  });
  }

  _test(data){
    console.log(data);
  }

  /**
   * 
   * @param {*} sectionId 
   */
  _getPageData(sectionId){
    return this.data[parseInt(sectionId)].entries;
  }

  /**
   * Utility method for converting text to lowercase
   * @param {*} title 
   */
  _toLowerCase(text){
    return text.toLowerCase();
  }

  /**
   * 
   * @param {*} businessName 
   * @param {*} positionName 
   */
  _formatBusinessAndPosition(businessName, positionName){
    var returnString = "";
    if(businessName && !positionName){
      returnString = businessName;
    }
    else if(businessName && positionName){
      returnString = businessName + " - " + positionName;
    }
    return returnString;
  }


}

window.customElements.define('sc-skills-page', ScSkillsPage);
