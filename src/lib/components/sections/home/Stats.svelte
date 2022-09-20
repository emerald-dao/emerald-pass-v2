<script type="ts">
  import { Section, Container, Column, Row } from "@mateoroldos/svelte.bones";
  import projects from "$lib/data/projects";
  import daoStats from "$lib/data/daoStats";

	import { Grid1 } from "$lib/components/layouts";
</script>

<Section paddingTop="large" paddingBottom="large">
  <Container>
    <Grid1>
      <div slot="left">
        <Column gap={2} justify="flex-start" align="flex-start">
          <h2>Emerald City is <strong>Huge</strong></h2>
          <Row gap={1.3} align="flex-start" justify="flex-start">
            {#each projects as project}
              <img class="logo" src={project.logo} alt={`${project.name} logo`}>
            {/each}
          </Row>
          <p>
            Emerald City has built main stream products on Flow such as FLOAT, which consistently more used than NBATopShot.
          </p>
        </Column>
      </div>
      <div slot="right">
        <Column gap={6} align="flex-start" justify="flex-start">
          {#each daoStats as stat}
            <Column gap={1.5} align="flex-start" justify="flex-start">
              <h3>{stat.title}</h3>
              <p class="stat">
                {stat.description}
              </p>
            </Column>
          {/each}
        </Column>
      </div>
    </Grid1>
  </Container>
</Section>

<style type="scss">
  .logo {
    max-width: 3rem;
  }

  h3 {
    max-width: 60ch;
  }
  .stat {
    font-size: var(--fs-300);
    max-width: 60ch;
  }
</style>