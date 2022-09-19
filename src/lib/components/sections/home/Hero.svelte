<script type="ts">
  import { Section, Container, Column } from "@mateoroldos/svelte.bones";
  import { Gradient, GradientWrapper } from '$lib/components/gradients'
</script>

<div style="position: relative;">
  <Section paddingBottom="large" paddingTop="small">
    <Container width="small">
      <Column>
        <h1><span>Emerald's City DAO</span><br/>Emerald Pass</h1>
        <video width="480px" height="100%" autoplay loop muted>
          <source src="emerald-pass.webm" type="video/webm" />
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
      </Column>
      <GradientWrapper>
        <Gradient left="50%" top="60%" blur="200px" width="400px" height="400px"/>
      </GradientWrapper>
    </Container>
  </Section>
</div>

<style type="scss">
  h1 {
    text-align: center;
    line-height: 1.2;
    font-size: var(--fs-900);
    text-transform: uppercase;
    --font-weight: 700;
    letter-spacing: 0.3rem;

    span {
      color: var(--clr-primary-main);
      font-size: var(--fs-400);
      --font-weight: 200;
      letter-spacing: 0.5rem;
      text-shadow: none;
    }
  }
</style>