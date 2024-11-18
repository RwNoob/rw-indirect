
# rw-indirect

- [rw-indirect](#rw-indirect)
  - [Build Instructions](#build-instructions)
  - [Built-in Components](#built-in-components)
  - [HTMLAttributes](#htmlattributes)
  - [Not finished describing](#not-finished-describing)

## Build Instructions

```
npm init rw-indirect <project-name || null>
npm create rw-indirect <project-name || null>
```

## Built-in Components

- ***Fragment***
  - describe: No parent container
  - props: [  ]
  - use
    ```jsx
    <Fragment>...code</Fragment>
    ```
- ***Portal***
  - describe: Insert into an element
  - props: [ target: String | Element ]
  - use
    ```jsx
    <Portal target={'#portal'}>...code</Portal>
    ```
- ***Index***
  - describe: Loop data
  - props: [ each: Array ]
  - use
    ```jsx
    <Index each={[]}>[Node | Function]</Index>
    ```
- ***Visible***
  - describe: Set the display CSS property of an inline style
  - props: [ key: Boolean ]
  - use
    ```jsx
    <Visible key={true}>...code</Visible>
    ```
- ***Switch***
  - describe: Tag Switch
  - props: [ key: any ]
  - relevance component: [ Case, Default ]
  - use
    ```jsx
    <Switch key={key}>
       <Case value={}></Case>
       <Case value={}></Case>
       <Case value={}></Case>
       <Default></Default>
    </Switch>
    ```
- ***Async***
  - describe: Request data asynchronously
  - props: [ promise: Promise ]
  - reslevance component: [ Await, Then, Catch, Finally ]
  - use
    ```jsx
    <Async key={key}>
        <Await>...code</Await>
        <Then>[Node | Function]</Then>
        <Catch>[Node | Function]</Catch>
        <Finally>...code</Finally>
    </Async>
    ```

## HTMLAttributes

***Getter***
- describe: Read some attributes of the element
- value: [ Ref | Function ]
- use
  - `get:scrollTop`
  - `get:scrollHeight`
  - `get:scrollWidth`
  - `get:scrollLeft`
  - `get:clientWidth`
  - `get:clientHeight`
  - `get:clientLeft`
  - `get:clientTop`
  - `get:offsetWidth`
  - `get:offsetHeight`
  - `get:offsetLeft`
  - `get:offsetTop`
    ```jsx
        const offsetWidth = ref(0);
        <div get:offsetWidth={offsetWidth}></div>
        <div get:offsetWidth={(width) => (offsetWidth.value = width)}></div>
    ```

## Not finished describing
