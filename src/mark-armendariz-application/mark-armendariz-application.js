import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/legacy/polymer.dom';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import {} from '@polymer/polymer/lib/utils/resolve-url.js';
import {MaMenuBar} from '../app-components/page-components/ma-menu-bar/ma-menu-bar.js';
import {MaLandingPage} from '../app-components/page-components/ma-landing-page/ma-landing-page.js';
import {MaHomePage} from '../app-components/page-components/ma-home-page/ma-home-page.js';
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
        /* #appPages{
          margin-left: 10%;
          margin-right: 10%;
        } */
        #appPages>.page:nth-child(odd){
          --ma-page-background-color: var(--ma-main-theme-color);
        }
        ma-menu-bar#menuBar{
          top: 0px;
          z-index: 1;
          --ma-menu-bar-position: relative;
        }
        ma-menu-bar#menuBar.sticky{
          position: fixed;
          width: 100%;
        }
        .sticky + #homePage {
         padding-top: 60px;
        }
        #projectsPage, #contactPage{
          height: 600px;
        }

        @media (min-width: 1281px) {
          #homePage{
            padding-top: 10px;
          }
          .page{
            padding: 60px 40px 60px 40px;
          }
          .page.home-page{
            padding: 10px 40px 60px 40px;
          }
        }
        @media (min-width: 1025px) and (max-width: 1280px) {
          .page{
            padding: 60px 40px 60px 40px;
          }
          .page.home-page{
            padding: 10px 40px 60px 40px;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .page{
            padding: 60px 40px 60px 40px;
          }
          .page.home-page{
            padding: 10px 40px 60px 40px;
          }
        }
        @media (min-width: 481px) and (max-width: 1024px) {
          .page{
            padding: 60px 10px 60px 10px;
          }
          #homePage{
            padding-top: 0px;
          }
        }
        @media (min-width: 320px) and (max-width: 480px) {
          .page{
            padding: 60px 5px 20px 5px;
          }
          #homePage{
            padding-top: 0px;
          }
        }

        .page{
          padding-left: 10% !important;
          padding-right: 10% !important;
        }
      </style>
  
      <!-- ====== APPLICATION ROUTING Not currently implemented ====== -->
      <!--<app-location route="{{route}}">
      </app-location>

      <app-route route="{{route}}"
                 pattern="/:name"
                 data="{{selectedPage}}"
                 tail="{{subroute}}">
      </app-route>-->
      <!-- ================================= -->

      <!-- ========== APPLICATION ========== -->
      <ma-landing-page id="landingPage"
                       title="Home">
      </ma-landing-page>
      
      <div id="appPages">
        <ma-menu-bar id="menuBar" 
                     selected-page={{selectedPage}}
                     pages={{appPages}}
                     name-line-one="Mark"
                     name-line-two="Armendariz">
        </ma-menu-bar>
        <ma-home-page id="homePage"
                      class="page home-page"
                      title="Hi, I'm Mark."
                      subtitle="This is who I am:"
                      data=[[homePageData]]>
        </ma-home-page>
        <ma-skills-page id="skillsPage"
                        class="page" 
                        title="Skills."
                        subtitle="This is what I can do:"
                        data="[[skillsData]]"
                        other-data=[[otherSkillsData]]>
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
                            subtitle="This is where I've worked:"
                            data=[[experienceData]]>
        </ma-experience-page>
        <ma-projects-page id="projectsPage"
                          class="page"
                          title="Projects."
                          subtitle="My projects have moved! Here's where to find them:"
                          data=[[projectsData]]
                          url=[[projectsSiteUrl]]>
        </ma-projects-page>
        <ma-contact-page id="contactPage"
                         class="page" 
                         title="Contact."
                         subtitle="This is how to get ahold of me:"
                         data=[[contactData]]>
        </ma-contact-page>
      </div>

      <footer style="background-color: white;    padding: 20px 50px; height: 150px;">
        <h3>footer</h3>
      </footer>
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
      selectedPage: {
        type: Object,
        notify: true,
        observer: "_pageChanged"
      },
      homePageData:{
        type: Object,
      },
      skillsData:{
        type: Array
      },
      otherSkillsData:{
        type: Array
      },
      experienceData:{
        type: Array
      },
      projectsData:{
        type: Array
      },
      projectsSiteUrl:{
        type: String
      },
      educationData:{
        type: Object
      }
    };
  }

  ready(){
    super.ready();
    this._getResumeData();
    
    window.addEventListener("scroll", function(e){
      this._resolveMenubarStickiness();
    }.bind(this));
  }

  _resolveMenubarStickiness(){
    var menuBar = this.$.menuBar;
    var menuBarOffset = menuBar.offsetTop;
    var homePageDist = this.$.homePage.getBoundingClientRect().top;

    if (window.pageYOffset >= menuBarOffset) {
      menuBar.classList.add("sticky");
    } 
    if(homePageDist >= menuBarOffset){
      menuBar.classList.remove("sticky");
    }
  }

  _getResumeData() {
    this._getResource( {
        url: this.resolveUrl('src/data/resume-data.json'),
        onLoad(e){
            var data = JSON.parse(e.target.responseText).d.result;
            this.appTitle = data.appTitle;
            this.appPages = data.appPages;
            this.homePageData = data.homePageData;
            this.skillsData = data.skillsData;
            this.otherSkillsData = data.otherSkillsData;
            this.experienceData = data.experienceData;
            this.projectsData = data.projectsData;
            this.educationData = data.educationData;
            this.projectsSiteUrl = data.projectsSiteUrl;
        }
     })
  }

  connectedCallback(){
    super.connectedCallback();
    this.addEventListener('homeEnterTap', e => this._handleHomeButtonClick(e));
  }

  _getResource(rq) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', rq.onLoad.bind(this));
    xhr.open('GET', rq.url);
    xhr.send();
  }

  _handleHomeButtonClick(e){
    this.$.homePage.scrollIntoView({block: "start", behavior: "smooth"});
  }

  _pageChanged(val){
    var element = this.$.appPages.querySelector("#"+val.page);
    if(element){
      this.$.appPages.querySelector("#"+val.page).scrollIntoView({block: "start", behavior: "smooth"});
    }
  }

}

window.customElements.define('mark-armendariz-application', MarkArmendarizApplication);
