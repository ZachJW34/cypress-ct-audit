import App from "./App";

describe("Scenarios", () => {
  // it("default", () => {
  //   cy.mount(<App />);
  // });
  // it("eslint warning", () => {
  //   if (1 === 1) {
  //     cy.mount(<App />);
  //   }
  // });
  // it("eslint error", () => {
  //   let thing = "Hello World!";
  //   cy.mount(<App />);
  // });
  // it("typescript warning", () => {
  //   let thing: number = "Hello World";
  //   if (thing) {
  //     cy.mount(<App />);
  //   }
  // });
  // it('typescript error', () => {
  //   let thing = (){}
  //   cy.mount(<App />);
  // })
  // it("runtime error in spec", () => {
  //   throw new Error("uh oh");
  //   cy.mount(<App />);
  // });
  it("runtime error in component", () => {
    cy.mount(<App />);
    cy.get("button").click();
  });
});
