<script>
  let promise = postApi();
  async function postApi() {
    const body = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!body.ok) {
      throw new Error('error comes in getting posts');
    }
    const posts = await body.json();
    return posts;
  }
  function getPosts() {
    promise = postApi();
  }
</script>

<div>
  <button on:click={getPosts}>Get Posts</button>

  {#await promise}
    <p>Loading...</p>
  {:then posts}
    <table>
      <thead>
        <th>id</th>
        <th>userId</th>
        <th>title</th>
        <th>body</th>
      </thead>
      <tbody>
        {#each posts as { title, body, id, userId }, id (id)}
          <tr>
            <td>{id}</td>
            <td>{userId}</td>
            <td>{title}</td>
            <td>{body}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:catch error}
    <p style="color:red">{error.message}</p>
  {/await}
</div>
