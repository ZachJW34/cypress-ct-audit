import App from "./App";

describe("Scenarios", () => {
  // it("default", () => {
  //   cy.mount(<App />);
  // });

  // it('eslint warning', () => {
  //   5 + 5;
  //   cy.mount(<App />);
  // })

  // it('eslint error', () => {
  //   let thing = 'Hello World!'
  //   cy.mount(<App />);
  // })

  // it('typescript warning', () => {
  //   const thing: number = 'Hello World'

  //   if (thing) {
  //     cy.mount(<App />);
  //   }
  // })

  // it('typescript error', () => {
  //   const thing = (){}

  //   cy.mount(<App />);
  // })

  // it('runtime error in spec', () => {
  //   throw new Error('uh oh')
  //   cy.mount(<App />);
  // })

  it("runtime error in component", () => {
    cy.mount(<App />);
    cy.get('button').click();
  });
});
