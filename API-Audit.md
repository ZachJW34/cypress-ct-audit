# Mount API Audit
- What is exported (just mount or are there other utilities)
- What does the API look like for each mount -> cy.mount(component, options)
- What does the log look like in the reporter (Component name, snapshot)
- What does the mount return
- Do the mounts cleanup properly
- What happens when you try and mount multiple components inside one test
- Are the types working properly e.g. do you get intellisense for props
- Style, Styles on react and view mount options should we remove these
- Should we be returning the same thing for all mounts
- Typing around vue. Vue2 has `VueComponent` vs Vue which is some weird type
- Consider wrapping the test utils lib vs passing directly to it
- Should we be wrapping testbed



### Things to do before GA
- We should add JS docs to frameworks missing them
- Suggest we remove mountCallback from Vue
- Suggest we remove ability to provide styles in the mount function. Prefer index.html and import in commands, etc.
- Suggest we remove the aliasing of component name in React mount logic
- Suggest to unmount any mounted component before mounting a new component in a test. Prevents multiple components from being mounted in frameworks that support this.
- Should we move the unmount to an afterEach hook instead of beforeEach
- Component name for Nuxt page is incorrect see [issue here](https://github.com/cypress-io/cypress/issues/24140)

## Vue/Nuxt:


JS Doc ❌

### API Signatures
```ts
Mount(Component: VueComponent, optionsOrProps?: MountOptionsArgument) => Cypress.Chainable<Cypress.AUTWindow>
MountCallback(component: VueComponent, options?: MountOptionsArgument) => () => Cypress.Chainable<Cypress.AUTWindow>
```

### Log
The log does not show the correct component name for Nuxt Pages. It shows as `<f .../>`

### Mount Cleanup Strategy
Vue3
```ts
// unmount if Vuewrapper
// Empty container element
Cypress.on('test:before:run', () => {
Cypress.vueWrapper?.unmount()
const el = getContainerEl()

el.innerHTML = ''
})
```

Vue2
```ts
// Uses @vue/test-utils auto destroy
Cypress.on('test:before:run', () => {
  $destroy()
})
```

### Mount Multiple Components

When Multiple components are mounted, the first component shows, but both exist in the DOM

### Type Intellisense

Types seem ok on Vue2, but Vue3 has poor typing for the Component parameter

```ts
originalComponent: {
  new (...args: any[]): V
  __vccOpts: any
  defaultProps?: Record<string, Prop<any>> | string[]
},
```

## Angular


JS Doc ✅

### Signature

### Log

### Mount Cleanup Strategy

### Mount Multiple Components

### Type Intellisense


## React / React18 / Next

JS Doc ❌

Mount is aliased to the derived component name in createMount

### API Signatures
```ts
mount(jsx: React.ReactNode, options?: MountOptions, rerenderKey?: string): Cypress.Chainable<MountReturn>;
unmount(options?: UnmountArgs): Cypress.Chainable<undefined>;
```

Do we need a rerenderKey? This seems like an implementation detail that adds unnecessary complexity and shouldn't be exposed to the user.

### Log

The mount log shows the component name properly
`mount <ComponentName .../>`

### Mount Cleanup Strategy

Calls React's provided unmount

### Mount Multiple Components

Both mounts succeed Only the second component is present in the dom

### Type Intellisense

Typing seems good. There is a weird error when you pass the mount an object vs JSX
`Cannot read properties of undefined (reading 'displayName')`. 

⚠️ This is indicated in IDE when using Typescript, but the error in the reported is confusing regardless. Should this even be thrown?

## Svelte 

JS Doc ✅
