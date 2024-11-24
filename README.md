
# rw-indirect

- [rw-indirect](#rw-indirect)
  - [Build Instructions](#build-instructions)
  - [Built-in Components](#built-in-components)
  - [Attributes](#attributes)
  - [Directive](#directive)
  - [provide-inject](#provide-inject)
  - [life cycle](#life-cycle)
  - [Render](#render)
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
- ***For***
  - describe: Loop data
  - props: [ each: Array, key?: (item: any) => any ]
  - use
    ```jsx
    <For each={[1,2,3,4]} key={(item) => item}>...code</For>
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
- ***Match***
  - describe: Labeled judgment
  - props: [ ]
  - reslevance component: [ Show, Otherwise ]
  - use
    ```jsx
    const count = ref(0);
    <button onClick={() => (count.value ++)}>Count: {count}</button>
    <Match>
      <Show when={() => count.value > 0 && count.value < 5}>
          <div>Show 1 - 4</div>
      </Show>
      <Show when={() => count.value > 5 && count.value < 10}>
          <div>Show 6 - 9</div>
      </Show>
      <Otherwise>
          <div>Otherwise</div>
      </Otherwise>
    </Match>
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

        <!-- Deprecated  -->
        <div get:offsetWidth={(width) => (offsetWidth.value = width)}></div>
    ```
***Form binding***
- describe: Simplify form writing
- use
  - `bind:value`
    ```jsx
      const message = ref('Rw Indirect Message');
      <span>Multiline message is:</span>
      <p style='white-space: pre-line;'>{message}</p>
      <textarea bind:value={message} placeholder='add multiple lines'></textarea>
      <p>Message is: {message}</p>
      <input bind:value={message} placeholder='edit me' />
    ```
  - `bind:checked`
    ```jsx
      const checked = ref(false);
      <input type='checkbox' id='checkbox' bind:checked={checked} />
      <label for='checkbox'>{checked}</label>
    ```
    ```jsx
      const picked = ref('One');
      <div>Picked: {picked}</div>
      <input type='radio' id='one' value='One' bind:checked={picked} />
      <label for='one'>One</label>
      <input type='radio' id='two' value='Two' bind:checked={picked} />
      <label for='two'>Two</label>
    ```
  - `bind:group`
    ```jsx
      const checkedNames = ref(['Jack']);
      <div>Checked names: {checkedNames}</div>
      <input type='checkbox' id='jack' value='Jack' bind:group={checkedNames} />
      <label for='jack'>Jack</label>
      <input type='checkbox' id='john' value='John' bind:group={checkedNames} />
      <label for='john'>John</label>
      <input type='checkbox' id='mike' value='Mike' bind:group={checkedNames} />
      <label for='mike'>Mike</label>
    ```
  - `bind:selected`
    ```jsx
      const selected = ref('B');
      const options = ref([
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' },
      ]);
      <div>Selected: {selected}</div>
      <select bind:selected={selected}>
          <Index each={options}>
              {(option) => <option value={option.value.value}>{option.value.text}</option>}
          </Index>
      </select>
    ```
    ```jsx
      const selected = ref([]);
      <div>Selected: {selected}</div>
      <select bind:selected={selected} multiple>
          <option>A</option>
          <option>B</option>
          <option>C</option>
      </select>
    ```
    ```jsx
      const selected = ref('');
      <div>Selected: {selected}</div>
      <select bind:selected={selected}>
          <option disabled value=''>
              Please select one
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
      </select>
    ```

## Directive
- describe: Convenience properties
- use
  ```jsx
  directive('focus',(el, binding, updateHook) => {
    console.log(el, binding);
    updateHook((newValue, oldValue) => {});
    return () => {
      // cleanup code
    }
  })
  // Can have parameters: rw-value:arg$trim$number...
  <input rw-focus />
  ``` 
  ```jsx
  <!-- Deprecated -->
  function focus(el){
    el.focus();
    return () => {
      // cleanup code
    }
  }
  // When the parameter is a function
  <input rw-focus={focus}/>
  ```

## provide-inject
- ***provide***
  - describe: Provides a value that can be injected by descendant components
  - use
    ```jsx
    function App(){
      provide('name', 'provide value')
      return <>
        <Test />
      </>
    }
    ```
- ***inject***
  - describe: Inject a value provided by the superior
  - use
    ```jsx
    function Test(){
      const value = inject('name', 'defaultValue');
      return <h1>Test</h1>
    }
    ```
## life cycle
- ***onMount***
  - describe: Execute after mounting
  - use
    ```jsx
    function App(){
      onMount(() => {
        console.log('Mount App');
      })
      return <h1>App</h1>
    }
    ```
- ***onCleanup***
  - describe: Execute after uninstalling
  - use
    ```jsx
    function App() {
      onCleanup(() => {
        console.log('Cleanup App');
      })      
      return <h1>App</h1>
    }
    ```
## Render
- ***render***
  - describe: Render to page
  - use
    ```jsx
    /** [ If the second parameter is not filled in, a div with id="app" will be automatically created. ] */
    render(<h1>Rw Indirect</h1>)
    ```
## Not finished describing
