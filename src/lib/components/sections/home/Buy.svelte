<script type="ts">
  import { Section, Container, Column, Row } from "@mateoroldos/svelte.bones";
	import { Button } from "@emerald-dao/component-library";
  import purchasePlans from "$lib/config/purchase";
</script>

<Section paddingTop="large" paddingBottom="large">
  <Container width="small">
    <Column>
      <h2>Get Your Pass Now</h2>
      <div class="cards-wrapper">
        {#each purchasePlans as plan}
          <div class="buy-card">
            <Column gap="small">
              <h3>{plan.name}</h3>
              <span>{plan.price}</span>
              <p>
                {plan.description}
              </p>
              <Button
                href="/buy"
                prefetch={true}
                color="neutral"
                size="full-width"
                --clr-neutral-800=var(--clr-neutral-100)
                --clr-font-text-inverse=var(--clr-font-text)
              >
                Buy Pass
              </Button>
            </Column>
          </div>
        {/each}
      </div>
    </Column>
  </Container>
</Section>

<style type="scss">
  @use "../../../styles/utils" as *;

  .cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    text-align: center;

    @include mq(medium) {
      flex-direction: row;
    }

    .buy-card {
      background-color: var(--clr-primary-main);
      color: var(--clr-font-text-inverse);
      border-radius: 2.3rem;
      padding: 4rem;
      box-shadow: 0 0 40px 0 var(--clr-neutral-100);
      height: 100%;

      h3 {
        color: var(--clr-font-heading-inverse);
      }

      span {
        font-family: var(--ff-mono);
      }
    }
  }
</style>