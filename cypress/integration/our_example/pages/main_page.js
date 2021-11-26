

class MainPage {

    inputSearchFieldHeader() {
        return cy.get('input#txtGlobalSearch');
    }

    inputSearchFieldJobs() {
        return cy.get('#container > div.header > div.b-sub-head-n > div.b-jobs-search > form > span > input');
    }
}
export default MainPage;