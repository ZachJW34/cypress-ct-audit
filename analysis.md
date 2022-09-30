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

- `Nuxt`
  - Cypress: N/A ESLint is not integrated into Webpack build
  - In App: N/A ESLint is not integrated into Webpack build

- `vue-cli`
  - Cypress: N/A ESLint is not integrated into Webpack build
  - In App: N/A ESLint is not integrated into Webpack build

- `Angular`
  - Cypress: N/A ESLint is not integrated into build
  - In App: N/A ESLint is not integrated into build

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

- `nuxt` 
  - Cypress: N/A ESLint is not integrated into Webpack build
  - In App: Terminal Log

- `vue-cli`
  - Cypress: N/A ESLint is not integrated into Webpack build
  - In App: N/A ESLint is not integrated into Webpack build

- `Angular`
  - Cypress: N/A ESLint is not integrated into build
  - In App: N/A ESLint is not integrated into build

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

- `nuxt`
  - Cypress: Terminal log, Console log
  - In App: Terminal log
  > ![nuxt-typescript-warning](nuxt-typescript-warning.png)

- `vue-cli`
  - Cypress: Terminal log, Console log
  - In App: Terminal Log, Deverver overlay
  > ![vue-cli-typescript-warning](vue-cli-typescript-warning.png)

- `Angular`
  - Cypress: Terminal log, Console log
  - In App: Terminal log, DevServer overlay, live-reload/hmr does not work until error is resolved
  > ![angular-typescript-warning](angular-typescript-warning.png)

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

- `nuxt`
  - Cypress: Terminal Log, Console Log, Reporter Log, Failed Test
  - In App: Terminal Log, Devserver overlay, live-reload/hmr does not work until error is resolved
  > ![nuxt-typescript-error](nuxt-typescript-error.png)

- `vue-cli`
  - Cypress: Terminal Log, Console Log, Reporter Log, Failed Test
  - In App: Terminal log, Devserver overlay, live-reload/hmr does not work until error is resolved
  > ![vue-cli-typescript-error](vue-cli-typescript-error.png)
- `Angular`
  - Cypress: Terminal Log, Console Log, Reporter Log, Failed Test
  - In App: Terminal log, Devserver overlay, live-reload/hmr does not work until error is resolved
  > ![angular-typescript-error](angular-typescript-error.png)

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

- `nuxt`
  - Cypress: Error in reporter with code-frame, live-reload/hmr does not work until error is resolved, failed test
  > ![nuxt-runtime-error-spec](nuxt-runtime-error-spec.png)

- `vue-cli`
  - Cypress: Error in reporter with code-frame, live-reload/hmr does not work until error is resolved, failed test
  > ![vue-cli-runtime-error-spec](vue-cli-runtime-error-spec.png)

- `Angular`
  - Cypress: Error in reporter with code-frame, live-reload/hmr does not work until error is resolved, failed test
  > ![angular-runtime-error-spec](angular-runtime-error-spec.png)

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

- `nuxt`
  - Cypress: Console Log, Test Passes
  - In App: DevServer Overlay, Console Log
  > ![nuxt-runtime-error-app](nuxt-runtime-error-app.png)

- `vue-cli`
  - Cypress: Console Log, Error in reporter with code-frame, Test Passes
  - In App: Console Log
  > ![vue-cli-runtime-error-app](vue-cli-runtime-error-app.png)

- `Angular`
  - Cypress: Console Log Test Passes
  - In App: Console Log
  > ![angular-runtime-error-app](angular-runtime-error-app.png)
