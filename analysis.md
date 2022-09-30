# Errors

## ESLint Warning

```ts
it('eslint warning', () => {
  5 + 5 // Unused expression
  cy.mount(<App />);
})
```

- `create-react-app`
  - Cypress: Terminal log
  - In App: Terminal log
  > ![](./create-react-app-eslint-warning.png)

## ESLint Error

```ts
it('eslint error', () => {
  let thing = 'Hello World!' // Unused var
  cy.mount(<App />);
})
```

- `create-react-app`
  - Cypress: Terminal log
  - In App: Terminal log, DevServer overlay, live-reload/hmr does not work until error is resolved
  > ![](./create-react-app-eslint-error.png)

## Typescript Warning

```ts
it('typescript warning', () => {
  let thing: number = 'Hello World' // number is not assignable to string

  cy.mount(<App thing={thing} />);
})
```

- `create-react-app`
  - Cypress: Terminal log
  - In App: Terminal log, DevServer overlay
  > ![](./create-react-app-typescript-warning.png)

## Typescript Error

```ts
it('typescript error', () => {
  {}/()aa>

  cy.mount(<App />);
})
```

- `create-react-app`
  - Cypress: Terminal log, failed test
  - In App: Terminal log, DevServer overlay, live-reload/hmr does not work until error is resolved
  > ![](./create-react-app-typescript-error.png)

## Runtime Error (Test)

```ts
it('runtime error in spec', () => {
  throw new Error('uh oh')
  cy.mount(<App />);
})
```

- `create-react-app`
  - Cypress: Error in reporter with code-frame, live-reload/hmr does not work until error is resolved, failed test
  > ![](./create-react-app-runtime-error-test.png)

## Runtime Error (App)

```ts
it("runtime error in component", () => {
  cy.mount(<App />);
  cy.get('button').click(); // Wired up to button that throws error
});
```

- `create-react-app`
  - Cypress: Console log, Error in reporter with code-frame, failed test
  - In App: Console log
  > ![](./create-react-app-runtime-error-app.png)