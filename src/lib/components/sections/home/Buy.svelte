<script type="ts">
  import { Section, Container, Column, Row } from "@mateoroldos/svelte.bones";
	import { Button } from "@emerald-dao/component-library";
  import purchasePlans from "$lib/config/purchase";
  import { purchaseEmeraldPass, timeOnEmeraldPass } from "$flow/actions.js";
  import Countdown from "$components/utility/Countdown.svelte";
  import { user } from "$stores/FlowStore"
	import { Gradient, GradientWrapper } from '$lib/components/gradients';
</script>

<div id="purchase" class="section-wrapper">
  <Section paddingTop="large" paddingBottom="large">
    <Container width="small">
      <Column>
        <h2>Get Your <br/><strong>Emerald Pass</strong><br/> Now</h2>
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
              <Column gap={3}>
                <h3>{plan.name}</h3>
                <span>{`${Number(plan.price).toFixed(0)} $FUSD`}</span>
                <p>
                  {plan.description}
                </p>
                <Button
                  prefetch={true}
                  size="full-width"
                  on:click={() => purchaseEmeraldPass(plan.subscriptionTime, plan.price)}
                >
                  Buy Pass
                </Button>
                {#if plan.ribbon}
                  <div class="ribbon ribbon-top-left">
                    <span>{plan.ribbon}</span>
                  </div>
                {/if}
              </Column>
            </div>
          {/each}
        </div>
      </Column>
      <GradientWrapper>
        <Gradient width="500px" height="600px" left="70%" top="60%" blur="200px"/>
        <Gradient width="500px" height="600px" left="30%" top="70%" blur="200px"/>
      </GradientWrapper>
    </Container>
  </Section>
</div>

<style type="scss">
  @use "../../../styles/utils" as *;

  .section-wrapper {
    position: relative;
    border-top: 2px var(--clr-primary-main-t7) solid;
    text-align: center;
    

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
        background-color: var(--clr-background-primary);
        border-radius: 2.3rem;
        padding-block: 4rem;
        padding-inline: 2rem;
        height: 100%;
        box-shadow: 0 0 30px 0px var(--clr-background-primary);
        position: relative;

        h3 {
          font-family: var(--ff-text);
          text-transform: none;
        }
      }
    }
  }
</style>