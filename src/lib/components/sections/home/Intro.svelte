<script type="ts">
  import { Section, Container, Column } from "@mateoroldos/svelte.bones";
  import { Gradient, GradientWrapper } from '$lib/components/gradients'
  import intro from "$lib/data/intro";
</script>

<div class="section-wrapper">
  <Section paddingTop="large" paddingBottom="large">
    <Container width="small" --container-s="62rem">
      <div class="card">
        <Column gap={4} align="center">
          <h2>Unlock the <span class="border-text">Power</span> of <strong>Emerald City</strong></h2>
          <div class="grid">
            {#each intro as intro}
              <div class="feature-card">
                <Column gap={1.4}>
                  <img src={intro.imageUrl} alt="Flow">
                  <h3>{intro.title}</h3>
                  <p>
                    {intro.desciription}
                  </p>
                </Column>
              </div>
            {/each}
          </div>
        </Column>
      </div>
      <GradientWrapper>
        <Gradient width="400px" height="500px" left="26%" top="46%" blur="150px"/>
        <Gradient width="400px" height="500px" left="75%" top="60%" blur="150px"/>
      </GradientWrapper>
    </Container>
  </Section>
</div>

<style type="scss">
  @use "../../../styles/utils" as *;

  .section-wrapper {
    position: relative;
    border-block: 2px var(--clr-primary-main-t7) solid;

    .card {
      // background-color: var(--clr-background-primary);
      // border-radius: 2rem;
      // padding: 6em;
      // box-shadow: 0 0 8px 0px var(--clr-background-primary);
      text-align: center;
    }

    .grid {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .feature-card {
        background-color: var(--clr-background-secondary);
        padding: 3rem;
        border-radius: 2rem;
        box-shadow: 0 0 10px 0px var(--clr-background-primary-t5);
      }

      h3 {
        font-size: var(--fs-400);
      }

      img {
        width: 6rem;
        margin-bottom: 0.8rem;
      }

      @include mq(medium) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2.4rem;
      }
    }
  }
</style>