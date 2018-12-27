import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/legacy/polymer.dom';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import {ScMenuBar} from '../component-library/sc-menu-bar/sc-menu-bar.js';
import {ScResumePage} from '../component-library/page-component-library/sc-resume-page/sc-resume-page.js';
import {ScLandingPage} from '../component-library/page-component-library/sc-landing-page/sc-landing-page.js';
import {ScSkillsPage} from '../component-library/page-component-library/sc-skills-page/sc-skills-page.js';
import {ScExperiencePage} from '../component-library/page-component-library/sc-experience-page/sc-experience-page.js';
import {ScProjectsPage} from '../component-library/page-component-library/sc-projects-page/sc-projects-page.js';
import {ScContactPage} from '../component-library/page-component-library/sc-contact-page/sc-contact-page.js';

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
          --sc-page-padding: 0px 20px;
        }
        #menuBar{
          top: 0px;
          margin-bottom: 70px;
        } 
        .page{
          height: 92vh;
        }
        #landingPage{
          height: 100vh;
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

      <sc-menu-bar id="menuBar" 
                    selected-page={{selectedPage}}
                    pages={{appPages}}
                    name-line-one="Mark"
                    name-line-two="Armendariz"
                    >
      </sc-menu-bar>

        <!--<div id="wrapper">-->
      <!--<div id="content">
      <div id="scroller">-->

      <sc-landing-page id="landingPage"
                       class="page"
                       title="Home" 
                       page-id=1>
      </sc-landing-page>
      <sc-skills-page id="skillsPage"
                      class="page" 
                      title="Skills"
                      data="[[skillsData]]">
      </sc-skills-page>
      <sc-experience-page class="page"
                          title="Experience"
                          data=[[experienceData]]>
      </sc-experience-page>
      <sc-projects-page class="page"
                        title="Projects">
      </sc-projects-page>
      <sc-contact-page class="page" 
                       title="Contact">
      </sc-contact-page>

    `;
  }

  
  static get properties() {
    return {
      /**
       * TODO: Set this value from web service response
       */
      appPages: {
        type: Array,
        value: [
                {
                  id: "2",
                  name: 'Skills',
                  type: 'general'
                },
                {
                  id: "3",
                  name: 'Education',
                  type: 'general'
                },
                {
                  id: "4",
                  name: 'Direct Experience',
                  type: 'general'
                },
                {
                  id: "5",
                  name: 'Projects',
                  type: 'general'
                },
                {
                  id: "6",
                  name: 'Additional Experience',
                  type: 'general'
                },
                {
                  id: "7",
                  name: 'Contact',
                  type: 'contact_page'
                }
              ]
      },

      appTitle: {
        value: "Mark Armendariz"
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
        type: Array,
        value: [
          {
            id: '1',
            name: 'HTML',
            comment: '',
            skillLevel: '50'
          },
          {
            id: '2',
            name: 'JavaScript',
            comment: '',
            skillLevel: '50'
          },
          {
            id: '3',
            name: 'CSS',
            comment: '',
            skillLevel: '50'
          },
          {
            id: '4',
            name: 'C#/.NET',
            comment: '',
            skillLevel: '60'
          },
          {
            id: '5',
            name: 'SQL',
            comment: '',
            skillLevel: '10'
          },
          {
            id: '6',
            name: 'Polymer 1.0',
            comment: '',
            skillLevel: '10'
          },
          {
            id: '7',
            name: 'Polymer 3.0',
            comment: '',
            skillLevel: '10'
          },
          {
            id: '8',
            name: 'C/C++',
            comment: 'Prior Experience',
            skillLevel: '10'
          },
          {
            id: '9',
            name: 'PHP',
            comment: 'Prior Experience',
            skillLevel: '10'
          }
        ]
      },

      resumeData: {
        type: Object,
        value: {
          "3":{ //education
            "entries": [
              {
                "id": "3",
                "type": "general",
                "companyName": "CSU Bakersfield",
                "positionName": "Bachelor of Science, Computer Science",
                "points": [
                  "Web Design",
                  "Server Scripting",
                  "Artificial Intelligence",
                  "Object-Oriented Programming",
                  "Relational Database Systems",
                  "Operating Systems",
                  "Algorithm Analysis & Design",
                  "Software Engineer"
              ]
              }
            ]
          },
          "4": { //direct experience
            "entries" : [
              {
                "id": "4",
                "type": "general",
                companyName: "Ricardo Defense Inc.",
                positionName: "Software Engineer",
                "points": [
                  "Sustained and modernized products in a large web-based software suite spanning eight interconnected-products developed in C#, Perl, HTML, and Javascript.",
                  "Utilized Polymer 1.0 for multiple web-based applications, include two desktop applications. ",
                  "Soley supported user-acceptance testing for a newly developed product in order to produce software suitable for production",
                  "Modernized segments of legacy software with newer technologies for purposes of increasing the codebase readability, sustainability, and efficiency, as well as for expanding the products capabilities to meet new requirements.",
                  "Sustained software by understanding the product, studying the code, learning new programming languages, working to resolve software trouble reports, and implementing change requests and new features."
                ]
              }
            ]
          },
          "5":{ //projects
            "entries": [
              {
                "id": "5",
                "type": "project",
                "points": []
              }
            ]
          },
          "6":{ //additional experience
            "entries": [
              {
                "id": "4",
                "type": "general",
                "companyName": "CSU Bakersfield",
                "positionName": "Computer Science Tutor",
                "points": [
                  "In-class tutor for Operating Systems and Web Design courses, assisting students with programming assignments and concepts",
                  "Provided assistance with C/C++, HTML, JavaScript, CSS, and PHP in computer lab outside of class during scheduled hours.",
                  "Aided students with debugging and logic for programming assignments and assisted teachers with grading student submissions.",
                ]
              },
              {
                "id": "5",
                "type": "general",
                companyName: "Chevron USA, Inc.",
                positionName: "Technical Assistant Intern",
                "points": [
                  "Investigated, diagnosed, and resolved problems in internal database systems, such as absent or inconsistent data",
                  "Managed documents used for tracking data issues to avoid redundant efforts in the future",
                  "Coordinated with staff members from multiple disciplines to ensure high integrity and accuracy of data",
                  "Completed twenty minute presentation regarding the completion of summer assignment to all concerned parties"
                ]
              }
            ]
          }
        }
      },

    };
  }


  connectedCallback(){
    super.connectedCallback();
    //this._generateApplicationPages();
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
   */
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
  }

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
    var element = this.$.Projects;

    var headerOffset = 18;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    /*window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });*/

  }

  _appendtoIronPages(pageElement){
    this.$.appIronPages.appendChild(pageElement);
  }

  _getData(index){
    return this.resumeData[index.toString()].entries;
  }

}

window.customElements.define('showcase-application', ShowcaseApplication);
