<script>
  import { count } from './store';
</script>

<div>
  <hr />
  <h3>Counter with Store</h3>
  Counter:<b>{$count}</b>
  <button on:click={count.increment}>Inc</button>
  <button on:click={count.decrement}>Dec</button>
</div>
