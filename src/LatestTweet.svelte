<script>
const promise = fetch(
  'https://bantros-api.herokuapp.com/fetch-latest-tweet'
).then((res) => res.json());

// onMount(async () => {
//   try {
//     const res = await fetch(
//       'https://bantros-api.herokuapp.com/fetch-latest-tweet'
//     );
//     // const res = await fetch('http://localhost:8000/fetch-latest-tweet');
//     const json = await res.json();
//     data = {
//       id: json[0].id_str,
//       text: json[0].text
//     };
//   } catch (error) {
//     console.error(error);
//   }
// });
</script>

<div class="p-8  md:p-16">
  <div class="max-w-3xl">
    <h2 class="mb-2  text-base  text-white/60  md:text-xl"> Twitter </h2>

    {#await promise}
      <p class="text-2xl  md:text-4xl  lg:text-5xl  mb-0"> Loading! </p>
    {:then data}
      <p class="text-2xl  md:text-4xl  lg:text-5xl  mb-0">
        <a
          class="text-white"
          href="https://twitter.com/bantros/status/{data[0].id_str}"
          target="_blank"
          rel="noopener noreferrer">
          {data[0].text}
        </a>
      </p>
    {:catch error}
      <p class="text-2xl  md:text-4xl  lg:text-5xl  mb-0">
        {error}
      </p>
    {/await}
  </div>
</div>
