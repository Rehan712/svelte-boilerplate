<script>
  export let propVar;
  let counter = 0;
  function handleInc() {
    counter += 1;
  }

  function handleDec() {
    counter -= 1;
  }
  $: doubled = counter * 2;
  $: if (doubled > 9) {
    alert('counter is higher than 9');
  }
</script>

<div>
  Counter: <b>{counter}</b>
  <button on:click={handleInc}>Inc</button>
  <button on:click={handleDec}>Dec</button>
  <h3>{doubled}</h3>
  <p>propVar: {propVar}</p>
</div>
