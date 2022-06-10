<script>
  const projects = [
    {
      id: 'faded',
      title: 'Faded',
      url: 'https://fadedstore.com/',
      color: 'light-red-hover'
    },
    {
      id: 'astonish',
      title: 'Astonish',
      url: 'https://astonish.co.uk/',
      color: 'light-blue-hover'
    },
    {
      id: 'The Reader',
      title: 'Trails & Tales',
      url: 'https://trails.thereader.org.uk/',
      color: 'orange-hover'
    },
    {
      id: 'zoflora',
      title: 'Zoflora',
      url: 'https://www.zoflora.co.uk/',
      color: 'green-hover'
    },
    {
      id: 'horlicks',
      title: 'Horlicks',
      url: 'https://www.horlicks.co.uk/',
      color: 'dark-blue-hover'
    },
    {
      id: 'dr-sarah-davies',
      title: 'Dr Sarah Davies',
      url: 'https://www.drsarahdavies.co.uk/',
      color: 'purple-hover'
    },
    {
      id: 'raw',
      title: 'Raw Design Studio',
      url: 'https://weareraw.co.uk/',
      color: 'light-yellow-hover'
    }
  ];

  function getColor(index) {
    const percentage = 100 / projects.length;
    return `color: rgba(255, 255, 255, ${
      (percentage / 100) * (projects.length - index)
    })`;
  }
</script>

<div class="pv4">
  {#each projects as { title, url, color }, index}
    <div class="project-item mb3 mb2-l">
      <a
        class="project-link link f2 f1-ns f-subheadline-l fw5 lh-solid white {color}"
        href="{url}"
        target="_blank"
        rel="noopener"
        style="{getColor(index)}"
      >
        {title}
      </a>
    </div>
  {/each}
</div>
