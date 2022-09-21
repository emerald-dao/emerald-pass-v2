<script type="ts">
  import { Hero, Intro, Stats, Benefits, Faq, Buy} from '$lib/components/sections/home'
</script>

<Hero/>
<Intro/>
<!-- <Stats/> -->
<Benefits backgroundColor="green"/>
<Faq/>
<Buy/>

<style type="scss">
  :root {
    --bones-section-padding-m: 8rem;
  }
</style>