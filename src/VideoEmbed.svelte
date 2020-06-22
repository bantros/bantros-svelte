<script>
  let state = {
    poster: 'http://i3.ytimg.com/vi/dpw9EHDh2bM/maxresdefault.jpg',
    youtubeId: 'dpw9EHDh2bM',
    playing: false,
  }

  function handleClickEvent() {
    state.playing = !state.playing
  }
</script>

<style>
  .video-embed-wrapper {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    background-color: #eee;
  }

  .video-embed {
    background-position: center;
    background-size: cover;
  }

  .video-embed__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .btn {
    width: 150px;
    height: 50px;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    cursor: pointer;
  }

  .aspect-ratio {
    position: relative;
    width: 100%;
  }

  .aspect-ratio--16x9 {
    padding-bottom: 56.25%;
  }

  .aspect-ratio__object {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }
</style>

<div class="video-embed-wrapper">
  <div
    class="video-embed aspect-ratio aspect-ratio--16x9"
    style="background-image:url({state.poster})">
    {#if !state.playing}
      <div class="video-embed__button">
        <button class="btn" type="button" on:click="{handleClickEvent}">
          Play
        </button>
      </div>
    {/if}

    {#if state.playing}
      <iframe
        class="aspect-ratio__object"
        src="https://www.youtube-nocookie.com/embed/{state.youtubeId}?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1"
        title="YouTube Embed {state.youtubeId}"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen></iframe>
    {/if}
  </div>
</div>
