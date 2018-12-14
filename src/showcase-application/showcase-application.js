import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/legacy/polymer.dom';
import {ScMenuBar} from '../component-library/sc-menu-bar/sc-menu-bar.js';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-pages/iron-pages';
import {ScCard} from '../component-library/sc-card/sc-card.js';
import {ScResumePage} from '../component-library/page-component-library/sc-resume-page/sc-resume-page.js';
import {ScHomePage} from '../component-library/page-component-library/sc-home-page/sc-home-page.js';


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

        #menuBar{
          width: auto;
          margin-bottom: 20px;
        } 

        #appCard{
          width: 95%;
          margin: 0 auto;
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

      <!-- ====== MAIN APPLICATION STARTING POINT ====== -->
      <sc-card id="appCard">
        <div slot="content">
          
          <sc-menu-bar id="menuBar" 
                       selected-page="{{selectedPage}}"
                       pages="{{appPages}}"
                       hidden="">
          </sc-menu-bar>

          <iron-pages id="appIronPages" 
                      selected="{{selectedPage.name}}" 
                      attr-for-selected="title">
            <!-- === PAGES ARE GENERATED HERE === -->
          </iron-pages>

        </div>
      </sc-card>
      <!-- =========================================== -->

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
                  id: "1",
                  name: 'Home',
                  type: 'home_page'
                },
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
      
      /**
       * Holds information for page currently selected 
       * and displayed
       */
      selectedPage: {
        type: Object,
        notify: true,
        value: {
              id: "1",
              name: 'Home'
        },
        reflectToAttribute: true,
        observer: "_pageChanged"
      },

      resumeData: {
        type: Object,
        value: {
          "2":{ //skills
            "entries": [
              {
                "id": "2",
                "type": "skills",
                "points" : [
                  "HTML",
                  "Javascript",
                  "CSS",
                  "C#/.NET",
                  "SQL",
                  "Polymer 1.0 & 3.0",
                  "C/C++ (Prior Experience)",
                  "PHP (Prior Experience)"
                ]
              }
            ]
          },
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
    this._generateApplicationPages();
    this.$.appIronPages.addEventListener('homeEnterTap', e => this._handlePageButtonClick(e))
  }

  _handlePageButtonClick(e){
    console.log("homeclicked");
    this.selectedPage = this.appPages[1];



  }

  /**
   * Generates and appends page elements into app DOM
   */
  _generateApplicationPages(){
    var newSection = document.createElement('sc-home-page');
    newSection.title = this.appPages[0].name;
    this._appendtoIronPages(newSection);

    for(var i=1; i<this.appPages.length-1; i++){
      newSection = document.createElement('sc-resume-page');
      newSection.setAttribute('title', this.appPages[i].name);
      newSection.setAttribute('section-id', i.id);
      var data = (this.resumeData[this.appPages[i].id]) ? this.resumeData[this.appPages[i].id].entries :  [];
      newSection.resumeSectionData = data;
      this._appendtoIronPages(newSection);
    }

    newSection = document.createElement('sc-home-page');
    newSection.title = this.appPages[this.appPages.length-1].name;
    this._appendtoIronPages(newSection);
  }

  _pageChanged(){
    ///alert("LOADING...");
  }

  _appendtoIronPages(pageElement){
    this.$.appIronPages.appendChild(pageElement);
  }



}

window.customElements.define('showcase-application', ShowcaseApplication);
