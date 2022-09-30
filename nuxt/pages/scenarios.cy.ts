import App from './index.vue'

describe('Scenarios', () => {
  it('default', () => {
    cy.mount(App)
  })
  // it('eslint warning', () => {
  //   5 + 5
  //   cy.mount(App)
  // })
  // it('eslint error', () => {
  //   let thing = 'Hello World!';
  //   cy.mount(App)
  // })
  // it('eslint error', () => {
  //   let thing = 'Hello World!';
  //   cy.mount(App)
  // })
  // it('typescript warning', () => {
  //   let thing: number = 'Hello World'
  //   if (thing) {
  //     cy.mount(App)
  //   }
  // })
  // it('typescript error', () => {
  //   {}/()aa>
  //   cy.mount(App);
  // // })
  // it('runtime error in spec', () => {
  //   throw new Error('uh oh')
  //   cy.mount(App);
  // })
  // it('runtime error in component', () => {
  //   cy.mount(App)
  //   cy.get('button').click().click()
  //   // Stack Trace is messed up, does not log the error from component passes test
  // })

  /**
   * Run this test, and you won't see an error in the reporter
   * Rerun the test by making a change, and you will see the error
   * can also run a test that doesn't throw, and you will see this error propagate
   */
})
