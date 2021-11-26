
import MainPage from './pages/main_page';
const mainpage = new MainPage();

describe('Open main page and check elements', () => {

    beforeEach(() => {
        cy.visit('https://dou.ua');
    })
    
    it('Open main page', () => {
        cy.get('ul.b-index-links').should('be.visible');
    })
    
    it('click salary link and check redirect', () => {
        cy.get('a[href="https://jobs.dou.ua/salaries/"]').should('be.visible').click();
        cy.get('form.salarydec').should('be.visible');

    })

    it('checking search on main page', () => {
        // cy.get('input#txtGlobalSearch').should('be.visible').type('JS').type('{enter}');
        mainpage.inputSearchFieldHeader().should('be.visible').type('JS').type('{enter}');
        cy.url().should('contain', 'search/?q=JS');
        cy.get('button.gsc-search-button').should('be.visible');
    })

    it('click jobs link and input city', () => {
        cy.get('a[href="https://jobs.dou.ua/"]').should('be.visible').click();
        mainpage.inputSearchFieldJobs().should('be.visible').type('Київ').type('{enter}');
        cy.get('div.b-inner-page-header').should('be.visible');
    })
})