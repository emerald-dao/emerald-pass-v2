<script type="ts">
  import { Section, Container, Column, Row } from "@mateoroldos/svelte.bones";
  import projects from "$lib/data/projects";
	import { Grid1 } from "$lib/components/layouts";
</script>


<div style="background-color: var(--clr-primary-main)">
  <Section paddingTop="large" paddingBottom="large">
    <Container>
      <Grid1>
        <div class="sticky" slot="left">
          <Column gap={2} justify="flex-start">
            <h2 style="color: var(--clr-font-heading-inverse)">Get exclusive access to our benefits</h2>
            <p style="color: var(--clr-font-text-inverse)">
              As an Emerald Pass subscriber, you will be able to get premium features and abilities on all of our products, including some educational material.
            </p>
          </Column>
        </div>
        <div slot="right">        
          <Column >
            {#each projects as project}
            <div class="card">
              <Row gap={1}>
                <img src={project.logo} alt={`${project.name} logo`}>
                <h3>{project.name}</h3>
              </Row>
              <span>{project.slogan}</span>
              <ul>
                {#each project.benefits as benefit}
                  <li>{benefit}</li>
                {/each}
              </ul>
            </div>
            {/each}
          </Column>
        </div>
      </Grid1>
    </Container>
  </Section>
</div>

<style type="scss">
  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    background-color: var(--clr-background-primary);
    border-radius: 1rem;
    padding: 3rem;
    width: 100%;

    span {
      color: var(--clr-font-heading);
      font-family: var(--ff-text);
      font-size: var(--fs-400);
    }

    ul {
      font-size: var(--fs-300);
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    img {
      max-width: 4rem;
    }
  }
</style>