<script>
  const projects = [
    {
      id: 'zoflora',
      title: 'Zoflora',
      url: 'https://www.zoflora.co.uk/',
      color: 'green-hover',
    },
    {
      id: 'horlicks',
      title: 'Horlicks',
      url: 'https://www.horlicks.co.uk/',
      color: 'dark-blue-hover',
    },
    {
      id: 'dr-sarah-davies',
      title: 'Dr Sarah Davies',
      url: 'https://www.drsarahdavies.co.uk/',
      color: 'purple-hover',
    },
    {
      id: 'benenox',
      title: 'Benenox',
      url: 'https://www.benenox.com/',
      color: 'light-purple-hover',
    },
    {
      id: 'turtle-wax',
      title: 'Turtle Wax',
      url: 'https://www.turtlewax.com/',
      color: 'green-hover',
    },
    {
      id: 'northern-lights',
      title: 'Northern Lights Agency',
      url: 'http://northernlightsagency.co.uk/',
      color: 'light-red-hover',
    },
    {
      id: 'mira',
      title: 'Mira Technology Park',
      url: 'https://www.miratechnologypark.com/',
      color: 'light-green-hover',
    },
    {
      id: 'raw',
      title: 'Raw Design Studio',
      url: 'https://weareraw.co.uk/',
      color: 'light-yellow-hover',
    },
    {
      id: 'ecb',
      title: 'England and Wales Cricket Board',
      url: 'http://getthegameon.co.uk/',
      color: 'dark-blue-hover',
    },
    {
      id: 'empirical-search',
      title: 'Empirical Search',
      url: 'http://empiricalsearch.com/',
      color: 'blue-hover',
    },
    {
      id: 'woodwork-music',
      title: 'Woodwork Music',
      url: 'http://woodworkmusic.co.uk/',
      color: 'orange-hover',
    },
  ]

  function getColor(index) {
    const percentage = 100 / projects.length
    return `color: rgba(255, 255, 255, ${(percentage / 100) *
      (projects.length - index)})`
  }
</script>

<div class="pv4">
  {#each projects as { id, title, url, color }, index}
    <div class="project-item mb3 mb2-l">
      <a
        class="project-link link f2 f1-ns f-subheadline-l fw5 lh-solid white {color}"
        href="{url}"
        target="_blank"
        rel="noopener"
        style="{getColor(index)}">
        {title}
      </a>
    </div>
  {/each}
</div>
