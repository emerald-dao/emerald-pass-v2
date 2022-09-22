<script type="ts">
  import { Section, Container, Column, Row } from "@mateoroldos/svelte.bones";
  import projects from "$lib/data/projects";
	import { Grid1 } from "$lib/components/layouts";
  import Icon from "@iconify/svelte"
</script>

<div style="background-color: var(--clr-primary-main)" id="benefits">
  <Section paddingTop="large" paddingBottom="large">
    <Container>
      <Grid1>
        <div class="sticky" slot="left">
          <Column gap={2} justify="flex-start">
            <h2 style="color: var(--clr-font-heading-inverse)"><span class="border-text-inverse">Get access to</span> exclusive benefits</h2>
            <p style="color: var(--clr-font-text-inverse)">
              Emerald Pass subscribers enjoy exclusive benefits across all of our products & services - including upcoming paid education offerings
            </p>
          </Column>
        </div>
        <div slot="right">        
          <Column>
            {#each projects as project}
              <div class="card">
                <Row gap={1} align="center">
                  <img src={project.logo} alt={`${project.name} logo`}>
                  <h3>{project.name}</h3>
                </Row>
                <span>{project.slogan}</span>
                <ul>
                  {#each project.benefits as benefit}
                    <li><Icon icon="ion:checkmark-circle" color="var(--clr-primary-main)" width="1.6rem"/> {benefit}</li>
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
  @use "../../../styles/utils" as *;

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.8rem;
    background-color: var(--clr-background-primary);
    border-radius: 1rem;
    padding: 4rem;
    width: 100%;
    font-size: 1.12rem;

    h3 {
      font-size: var(--fs-500);
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      padding-left: 0;

      @include mq(small) {
        padding-left: 2rem;
      }

      li {
        list-style: none;
        display: grid;
        grid-template-columns: auto 1fr;
        place-items: center start;
        gap: 0.8rem;
      }
    }

    img {
      max-width: 4rem;
    }
  }
</style>