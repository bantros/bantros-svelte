<script>
const promise = fetch(
  'https://bantros-api.herokuapp.com/fetch-latest-track'
).then((res) => res.json());
</script>

<div class="p-8  md:p-16">
  <div class="max-w-2xl">
    {#await promise}
      <h2 class="mb-2  text-base  text-white/60  md:text-xl">
        Recently Played
      </h2>

      <p class="text-2xl  md:text-4xl  lg:text-5xl  mb-0"> Loading! </p>
    {:then data}
      <h2 class="mb-2  text-base  text-white/60  md:text-xl">
        {data.playing ? 'Now Playing' : 'Recently Played'}
      </h2>
      {#if data.hasOwnProperty('progress_ms')}
        <p class="text-2xl  md:text-4xl  lg:text-5xl  mb-2">
          {data.item.name}
          {#if data.item.artists[0].name !== null}
            <span class="text-white/30">{data.item.artists[0].name}</span>
          {/if}
        </p>
      {:else}
        <p class="text-2xl  md:text-4xl  lg:text-5xl  mb-2">
          {data.items[0].track.name}
          {#if data.items[0].track.album.artists[0].name !== null}
            <span class="text-white/30"
              >{data.items[0].track.album.artists[0].name}</span>
          {/if}
        </p>
      {/if}
    {:catch error}
      <h2 class="mb-2  text-base  text-white/60  md:text-xl">
        Recently Played
      </h2>

      <p class="text-2xl  md:text-4xl  lg:text-5xl  mb-0">
        {error}
      </p>
    {/await}
  </div>
</div>
