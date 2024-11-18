
# rw-indirect

- [rw-indirect](#rw-indirect)
  - [Build Instructions](#build-instructions)
  - [Built-in Components](#built-in-components)
  - [Attributes](#attributes)
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
    <Index each={[]}>...code</Index>
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
    const changeRef = ref(0)
    <button onClick={() => changeRef.value++}>add</button>
    <Switch key={changeRef}>
       <Case value={0}></Case>
       <Case value={1}></Case>
       <Case value={2}></Case>
       <Default></Default>
    </Switch>
    ```
- ***Async***
  - describe: Request data asynchronously
  - props: [ promise: Promise | Ref ]
  - reslevance component: [ Await, Then, Catch, Finally ]
  - use
    ```jsx
    const getTodo = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await res.json();
      await waiting(1000);
      return data;
  	};
    const promiseRef = ref(getTodo());
    <button onClick={() => (promiseRef.value = getTodo())}>Get Todo</button>
    <Async promise={promiseRef}>
        <Await>...code</Await>
        <Then>...code</Then>
        <Catch>...code</Catch>
        <Finally>...code</Finally>
    </Async>
    ```

## Attributes

***Unique processing attributes***
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
