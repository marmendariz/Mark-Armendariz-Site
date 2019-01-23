import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/legacy/polymer.dom';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import {} from '@polymer/polymer/lib/utils/resolve-url.js';

import {MaMenuBar} from '../app-components/page-components/ma-menu-bar/ma-menu-bar.js';
import {MaLandingPage} from '../app-components/page-components/ma-landing-page/ma-landing-page.js';
import {MaHomePage} from '../app-components/page-components/ma-home-page/ma-home-page.js';
import {MaResumePage} from '../app-components/page-components/ma-resume-page/ma-resume-page.js';
import {MaSkillsPage} from '../app-components/page-components/ma-skills-page/ma-skills-page.js';
import {MaExperiencePage} from '../app-components/page-components/ma-experience-page/ma-experience-page.js';
import {MaProjectsPage} from '../app-components/page-components/ma-projects-page/ma-projects-page.js';
import {MaContactPage} from '../app-components/page-components/ma-contact-page/ma-contact-page.js';
import {MaEducationPage} from '../app-components/page-components/ma-education-page/ma-education-page.js';

class MarkArmendarizApplication extends PolymerElement {
 
  static get template() {
    return html`
      
      <style>
        :host {
          display: block;
          --ma-general-font-color: #404042;
          --ma-accent-font-color: #404042;
          --ma-suppress-font-color: #b1b1b4;
          --ma-main-theme-color: #0c4e8a;
          --ma-main-theme-color-lite: #2264A0;
          --ma-main-theme-color-lite-transparent: #2264a047;
          --ma-accent-color: #D57E04;
          color: var(--ma-general-font-color);
          --ma-subtitle-text:{
            color: var(--ma-main-theme-color);
            font-weight: bold;
            font-size: 15pt !important;
          }
        }        
        #landingPage{
          height: 100vh;
        }
        .page{
          padding: 40px;
        }
        #skillsPage, #educationPage, #experiencePage, #projectsPage, #contactPage{
          height: 909px;
        }
        #appPages>.page:nth-child(odd){
          --ma-page-background-color: var(--ma-main-theme-color);
        }

        
        /* MENU BAR STYLES */
        ma-menu-bar#menuBar{
          top: 0px;
          /*margin-bottom: 70px;*/
          z-index: 1;
          --ma-menu-bar-position: relative;
        }
        ma-menu-bar#menuBar.sticky{

        }

        @media (min-width: 1281px) {
        }
        @media (min-width: 1025px) and (max-width: 1280px) {
        }
        @media (min-width: 768px) and (max-width: 1024px) {
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        }
        @media (min-width: 481px) and (max-width: 1024px) {
          .page{
            padding: 25px 10px;
          }
        }
        @media (min-width: 320px) and (max-width: 480px) {
          .page{
            padding: 20px 5px;
          }
        }
      </style>
  
      <!-- ====== APPLICATION ROUTING ====== -->
      <app-location route="{{route}}">
      </app-location>

      <app-route route="{{route}}"
                 pattern="/:name"
                 data="{{selectedPage}}"
                 tail="{{subroute}}">
      </app-route>
      <!-- ================================= -->

      <!-- ========== APPLICATION ========== -->
      <ma-landing-page id="landingPage"
                        title="Home" 
                        page-id=1>
      </ma-landing-page>
      
      <div id="appPages">
        <ma-menu-bar id="menuBar" 
                     selected-page={{selectedPage}}
                     pages={{appPages}}
                     name-line-one="Mark"
                     name-line-two="Armendariz">
        </ma-menu-bar>
        <ma-home-page id="homePage"
                      class="page"
                      title="Hi, I'm Mark."
                      subtitle="This is who I am:">
        </ma-home-page>
        <ma-skills-page id="skillsPage"
                        class="page" 
                        title="Skills."
                        subtitle="This is what I can do:"
                        data="[[skillsData]]">
        </ma-skills-page>
        <ma-education-page id="educationPage"
                           class="page" 
                           title="Education."
                           subtitle="This is where I studied:"
                           data=[[educationData]]>
        </ma-education-page>
        <ma-experience-page id="experiencePage"
                            class="page"
                            title="Experience."
                            subtitle="This is what I've done:"
                            data=[[experienceData]]>
        </ma-experience-page>
        <ma-projects-page id="projectsPage"
                          class="page"
                          title="Projects."
                          subtitle="This is some of what I've worked on (or am working on):"
                          data=[[projectsData]]>
        </ma-projects-page>
        <ma-contact-page id="contactPage"
                         class="page" 
                         title="Contact"
                         subtitle="This is how to get ahold of me:"
                         data=[[contactData]]>
        </ma-contact-page>
      </div>
      <!-- ================================= -->

    `;
  }

  
  static get properties() {
    return {
      appPages: {
        type: Array
      },
      appTitle: {
        type: String
      },

      /**
       * Holds information for page currently selected 
       * and displayed
       */
      selectedPage: {
        type: Object,
        notify: true,
        observer: "_pageChanged"
      },
      skillsData:{
        type: Array
      },
      experienceData:{
        type: Array
      },
      projectsData:{
        type: Array
      },
      educationData:{
        type: Object
      }
    };
  }

  ready(){
    super.ready();
    this._getResumeData();
  }

  _getResumeData() {
    this._getResource( {
        url: this.resolveUrl('src/data/resume-data.json'),
        onLoad(e){
            var data = JSON.parse(e.target.responseText).d.result;
            this.appTitle = data.appTitle;
            this.appPages = data.appPages;
            this.skillsData = data.skillsData;
            this.experienceData = data.experienceData;
            this.projectsData = data.projectsData;
            this.educationData = data.educationData;
        }
     })
  }

  connectedCallback(){
    super.connectedCallback();
    //this._generateApplicationPages(); //currently not implemented
    this.addEventListener('homeEnterTap', e => this._handlePageButtonClick(e));

    var that = this;

    /*document.addEventListener('WebComponentsReady', function(){
      console.log("scroll here");
      that.scroll = new IScroll(this.$.content, {mouseWheel: false, click: true, desktopCompatibility:true});
    }.bind(this));
    */
    /*if(this.route.path!="/"){
      console.log("here");
      this._hideLandingPage();
    }*/
  }

  _getResource(rq) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', rq.onLoad.bind(this));
    xhr.open('GET', rq.url);
    xhr.send();
  }

  _handlePageButtonClick(e){
    console.log("homeclicked");
    this.selectedPage = this.appPages[0];
    this._hideLandingPage();
  }

  _hideLandingPage(){
    this.$.landingPage.hide();
  }
  
  /**
   * Generates and appends page elements into app DOM
   *
  _generateApplicationPages(){
    var newSection;
    //var newSection = document.createElement('ma-home-page');
    //newSection.title = this.appPages[0].name;
    //newSection.pageId =  this.appPages[0].id;
    //this._appendtoIronPages(newSection);

    for(var i=0; i<this.appPages.length-1; i++){
      newSection = document.createElement('ma-resume-page');
      newSection.title = this.appPages[i].name;
      newSection.pageId =  this.appPages[i].id;
      var data = (this.resumeData[this.appPages[i].id]) ? this.resumeData[this.appPages[i].id].entries :  [];
      newSection.resumeSectionData = data;
      this._appendtoIronPages(newSection);
    }

    newSection = document.createElement('ma-home-page');
    newSection.title = this.appPages[this.appPages.length-1].name;
    newSection.pageId =  this.appPages[this.appPages.length-1].id;
    this._appendtoIronPages(newSection);
  }*/

  /**
   * 
   * @param {*} newVal 
   * @param {*} oldVal 
   */
  _pageChanged(newVal, oldVal){
    console.log(newVal);
    console.log(oldVal);
   
    var element = this.$.homePage;
    var headerOffset = 18;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  _appendtoIronPages(pageElement){
    this.$.appIronPages.appendChild(pageElement);
  }

}

window.customElements.define('mark-armendariz-application', MarkArmendarizApplication);
