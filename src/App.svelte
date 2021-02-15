<script>
  import Nested from './Nested.svelte';
  import Counter from './Counter.svelte';
  import Todo from './Todo.svelte';
  import PromiseComponent from './Promise.svelte';
  import Media from './Media.svelte';
  import CounterWithStore from './CounterWithStore.svelte';
  import { count } from './store';

  export let name = 'Rehean';
  let showTodo = false;
  let showBtnText = 'Show Todo';
  function toggleTodo() {
    showTodo = !showTodo;
    showBtnText = showTodo ? 'Hide Todo' : 'Show Todo';
  }
</script>

<main>
  <h1>Hello {name}! counter from store is {$count}</h1>
  <Nested {name} />
  <hr />
  <Counter propVar={'this is prop variable'} />
  <CounterWithStore />
  <hr />
  <!-- <button on:click={toggleTodo}>{showBtnText}</button> -->

  <!-- Inline Handler -->
  <button
    on:click={e => {
      showTodo = !showTodo;
      showBtnText = showTodo ? 'Hide Todo' : 'Show Todo';
    }}>{showBtnText}</button
  >
  {#if showTodo}
    <Todo />
  {:else}
    <p>Todo app is hidden</p>
  {/if}
  <Media />
  <PromiseComponent />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
