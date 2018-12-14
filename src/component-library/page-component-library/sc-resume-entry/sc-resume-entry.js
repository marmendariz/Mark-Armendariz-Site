
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {DomIf} from '@polymer/polymer/lib/elements/dom-if';

/**
 * @customElement
 * @polymer
 */


export class ScResumeEntry extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <dom-if id="ifHome">
        <template>
            <p>home</p> 
        </template>
      </dom-if>

      <dom-if id="ifContact">
        <template>
            <p>contact</p> 
        </template>
      </dom-if>

      <dom-if id="ifGeneral">
        <template>
            <p>general</p> 
        </template>
      </dom-if>

      <dom-if id="ifSkills">
        <template>
            <p>skill</p> 
        </template>
      </dom-if>

    `;
  }

  static get properties() {
    return {
      title:{
        type: String
      },
      entryType:{
        type: String,
        value: undefined,
        observer: "_initEntry"
      },
      entryId:{
        type: String,
        value: undefined
      }
    };
  }

  ready(){
    super.ready();


  }

  connectedCallback (){
    super.connectedCallback();
  }

  _initEntry(){
    if(this.entryType){

      switch(this.entryType){
        case 'general':
          console.log('general');
          this.$.ifGeneral = true;
          this.$.ifSkills  = false;
          this.$.ifHome    = false;
          this.$.ifContact = false;
          break;
        case 'home':
          console.log('home');
          this.$.ifGeneral = false;
          this.$.ifSkills  = false;
          this.$.ifHome    = true;
          this.$.ifContact = false;
          break;
        case 'contact':
         console.log('contact');
          this.$.ifGeneral = false;
          this.$.ifSkills  = false;
          this.$.ifHome    = false;
          this.$.ifContact = true;
          break;
        case 'skills':
          console.log('skills');
          this.$.ifGeneral = false;
          this.$.ifSkills  = true;
          this.$.ifHome    = false;
          this.$.ifContact = false;
          break;          
      }

    }
  }


}

window.customElements.define('sc-resume-entry', ScResumeEntry);
