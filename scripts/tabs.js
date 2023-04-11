// MVC
// Model
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const skillsTabContent = document.getElementById("skillsTab");
const educationTabContent = document.getElementById("educationTab");
const experienceTabContent = document.getElementById("experienceTab");

// View
const currentTab = document.getElementById("backRightCard");
render("tab1");
function render(tabId) {
    if(tabId === "tab1") {
        tab1.className = 'selectedTab';
        tab2.className = 'tab2';
        tab3.className = 'tab3';

        experienceTabContent.className = 'showTabContent';
        educationTabContent.className = 'hideTabContent';
        skillsTabContent.className = 'hideTabContent';
    }
    else if (tabId === "tab2") {
        tab1.className = 'tab1';
        tab2.className = 'selectedTab';
        tab3.className = 'tab3';

        experienceTabContent.className = 'hideTabContent';
        educationTabContent.className = 'showTabContent';
        skillsTabContent.className = 'hideTabContent';
    }
    else { // tabId == "tab3"
        tab1.className = 'tab1';
        tab2.className = 'tab2';
        tab3.className = 'selectedTab';
        
        experienceTabContent.className = 'hideTabContent';
        educationTabContent.className = 'hideTabContent';
        skillsTabContent.className = 'showTabContent';
    }
}

// Controller
tab1.onclick = changeTabs;
tab2.onclick = changeTabs;
tab3.onclick = changeTabs;

function changeTabs(event) {
    render(event.target.id)
}