<script>
  import { onMount } from 'svelte'

  let data
  onMount(async () => {
    const res = await fetch(
      'https://bantros-api.herokuapp.com/fetch-latest-track'
    )
    // const res = await fetch('http://localhost:8000/fetch-latest-track');
    const json = await res.json()

    if (res.ok) {
      if (json.hasOwnProperty('progress_ms')) {
        data = {
          track: json.item.name,
          artist: json.item.artists[0].name,
          album: json.item.album.images[0].url,
          playing: json.is_playing,
        }
      } else {
        data = {
          track: json.items[0].track.name,
          artist: json.items[0].track.album.artists[0].name,
          album: json.items[0].track.album.images[0].url,
          playing: json.is_playing,
        }
      }
    } else {
      throw new Error(json)
    }
  })
</script>

<div class="flex flex-column justify-center relative vh-100">
  {#if data !== undefined}
    <div class="cover">
      <figure class="cover__image">
        {#if data.album}
          <img src="{data.album}" alt="" />
        {/if}
      </figure>
    </div>

    <div class="relative">
      <h2 class="f5 f4-l lh-title white-60 mb0">
        {data.playing ? 'Now Playing' : 'Recently Played'} &mdash;
      </h2>

      <p class="measure-narrow f3 f2-ns f1-l lh-copy mb0">
        {data.track}
        {#if data.artist !== null}
          <span>by {data.artist}</span>
        {/if}
      </p>
    </div>
  {:else}
    <div class="relative">
      <h2 class="f5 f4-l lh-title white-60 mb0">Recently Played &mdash;</h2>

      <p class="measure-narrow f3 f2-ns f1-l lh-copy mb0">Loading!</p>
    </div>
  {/if}
</div>
