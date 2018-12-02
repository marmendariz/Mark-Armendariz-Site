import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScMenuBar} from '../component_library/sc-menu-bar/sc-menu-bar.js';
import {IconToggle} from '../component_library/icon-toggle.js';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-pages/iron-pages';

/**
 * @customElement
 * @polymer
 */
class ShowcaseApplication extends PolymerElement {
 
  static get template() {
    return html`
      
      <style>
        :host {
          display: block;
          --icon-toggle-outline-color: blue;
        }
      </style>

      <sc-menu-bar on-reset-clicked></sc-menu-bar>

      <h2>Hello [[prop1]]!</h2>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>

      <iron-pages>
        <div id="EducationPage"></div>
        <div id="DirectExperiencePage"></div>
        <div id="SpecialProjectsPage"></div>
        <div id="Additional Experience Page"></div>
        <div id="SkillsPage"></div>
      </iron-pages>
      
      

    `;
  }

  
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'showcase-application'
      }
    };
  }
}

window.customElements.define('showcase-application', ShowcaseApplication);
