<script type="ts">
  import { Section, Container, Column } from "@mateoroldos/svelte.bones";
  import { Button } from "@emerald-dao/component-library";
  import { Gradient, GradientWrapper } from '$lib/components/gradients'
</script>

<div class="section-wrapper">
  <Section paddingTop="large" paddingBottom="large">
    <Container>
      <div class="card">
        <Column gap="small" align="center">
          <h2>Unlock Emerald City's <strong>Power</strong></h2>
          <p>
            Emerald Pass allows you to gain access to tons of premium features across all of our products, all under one subscription. See below for subscriber benefits, purchasing, and more.
          </p>
          <Button size="large" href="/#purchase">Purchase Now</Button>
        </Column>
      </div>
      <GradientWrapper>
        <Gradient left="26%" top="46%"/>
        <Gradient left="75%" top="60%"/>
      </GradientWrapper>
    </Container>
  </Section>
</div>

<style type="scss">
  .section-wrapper {
    position: relative;
    border-block: 2px var(--clr-primary-main-t7) solid;


    .card {
      background-color: var(--clr-background-primary);
      border-radius: 2rem;
      padding: 6em;
      box-shadow: 0 0 8px 0px var(--clr-background-primary);
      text-align: center;
    }
  }
</style>