<script type="ts">
  import { Section, Container, Column, Row } from "@mateoroldos/svelte.bones";
	import { Button } from "@emerald-dao/component-library";
  import purchasePlans from "$lib/config/purchase";
  import { purchaseEmeraldPass, timeOnEmeraldPass } from "$flow/actions.js";
  import Countdown from "$components/utility/Countdown.svelte";
  import { user } from "$stores/FlowStore"
</script>

<div id="purchase" class="section-wrapper">
  <Section paddingTop="large" paddingBottom="large">
    <Container width="small">
      <Column>
        <h2>Get Your Pass Now</h2>
        {#if $user?.loggedIn}
          <div class="countdown-container">
            {#await timeOnEmeraldPass($user.addr) then endingTime}
              <p>You have</p>
              {#if !endingTime || endingTime <= Date.now() / 1000}
                <h3>00:00:00</h3>
              {:else}
                <h3><Countdown unix={endingTime} /></h3>
              {/if}
              <p>left on your subscription.</p>
            {/await}
          </div>
        {/if}
        <div class="cards-wrapper">
          {#each purchasePlans as plan}
            <div class="buy-card">
              <Column gap="small">
                <h3>{plan.name}</h3>
                <span>{`${Number(plan.price).toFixed(0)} $FUSD`}</span>
                <p>
                  {plan.description}
                </p>
                <Button
                  prefetch={true}
                  color="neutral"
                  size="full-width"
                  --clr-neutral-800=var(--clr-neutral-100)
                  --clr-font-text-inverse=var(--clr-font-text)
                  on:click={() => purchaseEmeraldPass(plan.subscriptionTime, plan.price)}
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
</div>

<style type="scss">
  @use "../../../styles/utils" as *;

  .section-wrapper {
    border-top: 2px var(--clr-primary-main-t7) solid;

    .countdown-container {
      text-align: center;
    }

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
  }
</style>