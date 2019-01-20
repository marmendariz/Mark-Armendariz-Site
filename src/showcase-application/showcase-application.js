import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/legacy/polymer.dom';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import {} from '@polymer/polymer/lib/utils/resolve-url.js';

/* */
import {ScMenuBar} from '../component-library/sc-menu-bar/sc-menu-bar.js';
import {ScHomePage} from '../component-library/page-component-library/sc-home-page/sc-home-page.js';
import {ScResumePage} from '../component-library/page-component-library/sc-resume-page/sc-resume-page.js';
import {ScLandingPage} from '../component-library/page-component-library/sc-landing-page/sc-landing-page.js';
import {ScSkillsPage} from '../component-library/page-component-library/sc-skills-page/sc-skills-page.js';
import {ScExperiencePage} from '../component-library/page-component-library/sc-experience-page/sc-experience-page.js';
import {ScProjectsPage} from '../component-library/page-component-library/sc-projects-page/sc-projects-page.js';
import {ScContactPage} from '../component-library/page-component-library/sc-contact-page/sc-contact-page.js';
import {ScEducationPage} from '../component-library/page-component-library/sc-education-page/sc-education-page.js';

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

          --sc-page-padding: 0px 5%;

          --sc-general-font-color: #404042;
          --sc-accent-font-color: white;
          --sc-suppress-font-color: #b1b1b4;
          --sc-main-theme-color: #0c4e8a;
          
          color: var(--sc-general-font-color);
          --sc-subtitle-text:{
            color: var(--sc-main-theme-color);
            font-weight: bold;
            font-size: 15pt !important;
          }
        }        
        
        /* PAGE STYLES */
        .page{
          height: 100vh;
          padding: 30px;
        }
        #landingPage{
          height: 100vh;
        }
        #appPages>.page:nth-child(odd){
          --sc-page-background-color: var(--sc-main-theme-color);
        }

        
        /* MENU BAR STYLES */
        #menuBar{
          top: 0px;
          /*margin-bottom: 70px;*/
          z-index: 1;
          --sc-menu-bar-position: relative;
        } 



        @media screen and (max-width: 900px){
          .page{
            min-height: 93vh;
            padding:10px;
          }
          #homePage{
            height: 175vh;
          }
        }

        @media screen and (min-height: 1272px){
          .page{
            max-height: 41vh;
          }
        }

        
        /*
        #wrapper {
          position: relative;
          height: 100% !important;
        }
        #scroller {
          position: absolute;
          width: 100%;
          z-index: -1;
        }*/
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



      <sc-landing-page id="landingPage"
                        title="Home" 
                        page-id=1>
      </sc-landing-page>
        <!--<div id="wrapper">-->
      <!--<div id="content">
      <div id="scroller">-->
      <div id="appPages">
        <sc-menu-bar id="menuBar" 
                      selected-page={{selectedPage}}
                      pages={{appPages}}
                      name-line-one="Mark"
                      name-line-two="Armendariz">
        </sc-menu-bar>
        <sc-home-page id="homePage"
                      class="page"
                      title="Hi, I'm Mark."
                      subtitle="This is who I am:">
        </sc-home-page>
        <sc-skills-page id="skillsPage"
                        class="page" 
                        title="Skills."
                        subtitle="This is what I can do:"
                        data="[[skillsData]]">
        </sc-skills-page>
        <sc-education-page id="skillsPage"
                        class="page" 
                        title="Education."
                        subtitle="This is where I studied:"
                        data=[[educationData]]>
        </sc-education-page>
        <sc-experience-page class="page"
                            title="Experience."
                            subtitle="This is what I've done:"
                            data=[[experienceData]]>
        </sc-experience-page>
        <sc-projects-page class="page"
                          title="Projects."
                          subtitle="This is what I've worked on (or am working on):"
                          data=[[projectsData]]>
        </sc-projects-page>
        <sc-contact-page class="page" 
                        title="Contact"
                        subtitle="This is how to get ahold of me:"
                        data=[[contactData]]>
        </sc-contact-page>
      </div>
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

      scroll:{
        type: Object,
        readOnly: false
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
    //var newSection = document.createElement('sc-home-page');
    //newSection.title = this.appPages[0].name;
    //newSection.pageId =  this.appPages[0].id;
    //this._appendtoIronPages(newSection);

    for(var i=0; i<this.appPages.length-1; i++){
      newSection = document.createElement('sc-resume-page');
      newSection.title = this.appPages[i].name;
      newSection.pageId =  this.appPages[i].id;
      var data = (this.resumeData[this.appPages[i].id]) ? this.resumeData[this.appPages[i].id].entries :  [];
      newSection.resumeSectionData = data;
      this._appendtoIronPages(newSection);
    }

    newSection = document.createElement('sc-home-page');
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
   
    /*this.scroll = new IScroll(this.$.content, {mouseWheel: true, 
                                               click: true,
                                               snap: false
                                              }).scrollToElement('#Projects');
*/

    //this.$.Projects.scrollIntoView({behavior: 'smooth'});
    //var element = this.$.Projects;

   // var headerOffset = 18;
    //var elementPosition = element.getBoundingClientRect().top;
   // var offsetPosition = elementPosition - headerOffset;

    /*window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });*/

  }

  _appendtoIronPages(pageElement){
    this.$.appIronPages.appendChild(pageElement);
  }

}

window.customElements.define('showcase-application', ShowcaseApplication);
