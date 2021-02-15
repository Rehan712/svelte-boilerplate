<script>
  import { todo } from './store';
  let name = '',
    status = '';
  $: items = $todo.data;
  $: console.log({ name, status });
  function handleAdd(e) {
    e.preventDefault();
    todo.addItem({ name, status });
    name = '';
    status = '';
    // items = items.concat({ name, status });
  }
  function handleDelete(index) {
    todo.removeItem(index);
  }
</script>

<form on:submit={handleAdd}>
  Name: <input required bind:value={name} />
  Status: <input required bind:value={status} />
  <button>Add</button>
</form>
<hr />
<table>
  <thead>
    <th>id</th>
    <th>Name</th>
    <th>status</th>
  </thead>
  <tbody>
    {#each items as { name, status }, i}
      <tr>
        <td>{i + 1}</td>
        <td>{name}</td>
        <td>{status}</td>
        <td><button on:click={() => handleDelete(i)}>Delete</button></td>
      </tr>
    {/each}
  </tbody>
</table>
