/// <reference types="Cypress" />

export class AngularBlogPage{
    checkUrl(url){
        // const args = url;
        // cy.origin(url, {args}, (urlPage) => {
        //     cy.url().should('eq',urlPage)
        // })
        cy.verifyNewPageUrl(url); 
    }

    checkPageHeader(url, header) {
        //.collectionHeader h1
        // const args = title;
        // cy.origin(url, {args}, (titlePage) => {
        //     cy.get('.collectionHeader h1').then(($el)=> {
        //         const title = $el.text().trim();
        //         expect(title).to.eq(titlePage);
        //     });
        // });
        cy.checkNewPageHeader('.collectionHeader h1', url, header);   
    }
}

export const onAngularBlogPage = new AngularBlogPage();