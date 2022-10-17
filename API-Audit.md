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

## Vue/Nuxt:


JS Doc ❌

### Signature
```ts
Mount(Component: VueComponent, optionsOrProps?: MountOptionsArgument) => Cypress.Chainable<Cypress.AUTWindow>
MountCallback(component: VueComponent, options?: MountOptionsArgument) => () => Cypress.Chainable<Cypress.AUTWindow>
```

### Log

### Mount Cleanup Strategy

### Mount Multiple Components

### Type Intellisense

## Angular


JS Doc ✅

### Signature

### Log

### Mount Cleanup Strategy

### Mount Multiple Components

### Type Intellisense


## React / React18 / Next

JS Doc ❌

### Signature

### Log

### Mount Cleanup Strategy

### Mount Multiple Components

### Type Intellisense

## Svelte 

JS Doc ✅
