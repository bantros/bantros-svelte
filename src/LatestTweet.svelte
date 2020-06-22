<script>
  import { onMount } from 'svelte'

  let data
  onMount(async () => {
    const res = await fetch(
      'https://bantros-api.herokuapp.com/fetch-latest-tweet'
    )
    // const res = await fetch('http://localhost:8000/fetch-latest-tweet')
    const json = await res.json()

    if (res.ok) {
      data = {
        id: json[0].id_str,
        text: json[0].text,
      }
    } else {
      throw new Error(json)
    }
  })
</script>

<div class="flex flex-column justify-center pv6 pv7-ns">
  <h2 class="f5 f4-l lh-title white-60 mb0">Twitter &mdash;</h2>

  {#if data !== undefined}
    <p class="measure-narrow f3 f2-ns f1-l lh-copy mb0">
      <a
        class="link white"
        href="https://twitter.com/bantros/status/{data.id}"
        target="_blank"
        rel="noopener noreferrer">
        {data.text}
      </a>
    </p>
  {:else}
    <p class="measure-narrow f3 f2-ns f1-l lh-copy mb0">Loading!</p>
  {/if}
</div>
