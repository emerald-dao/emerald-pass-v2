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
        <!-- <h2>Get Your <br/><strong>Emerald Pass</strong><br/> Now</h2> -->
        <h2>Option 1</h2>
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
            <div class="buy-card featured">
              <div>
                <h3>{plan.name}</h3>
                <Column gap="none">
                  <span class="price">{`${Number(plan.price).toFixed(0)} $FUSD`}</span>
                  <p>
                    {plan.description}
                  </p>
                  {#if plan.ribbon}
                    <div class="ribbon ribbon-top-left">
                      <span>{plan.ribbon}</span>
                    </div>
                  {/if}
                </Column>
              </div>
                
                <Button
                  prefetch={true}
                  size="full-width"
                  on:click={() => purchaseEmeraldPass(plan.subscriptionTime, plan.price)}
                >
                  Buy Pass
                </Button>
             </div>
          {/each}
        </div>
      </Column>
      <!-- <GradientWrapper>
        <Gradient width="380px" height="650px" left="70%" top="60%" blur="200px"/>
        <Gradient width="350px" height="650px" left="30%" top="62%" blur="200px"/>
      </GradientWrapper> -->
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
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .buy-card {
        background-color: var(--clr-background-secondary);
        border-radius: 2.3rem;
        padding-block: 4rem;
        padding-inline: 2rem;
        min-height: 1px;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        h3 {
          font-family: var(--ff-text);
          text-transform: none;
          margin-bottom: 1rem;
        }

        .price {
          border-bottom: 1.6px var(--clr-font-text-t8) solid;
          padding-bottom: 1.6rem;
          width: 70%;
        }

        p {
          font-size: var(--fs-300);
          margin-top: 2rem;
          margin-bottom: 4.4rem;
        }
      }

      .featured {
        border: 1px var(--clr-primary-main) solid;
      }
    }
  }
</style>