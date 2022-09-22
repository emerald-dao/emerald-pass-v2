<script type="ts">
  import { Section, Container, Column } from "@mateoroldos/svelte.bones";
  import faqs from "$lib/data/faqs";
  import { Grid1 } from "$lib/components/layouts";
</script>

<div id="faq">
  <Section paddingTop="large" paddingBottom="large">
    <Container>
      <Grid1>
        <div slot="left">
          <Column gap={2} justify="flex-start" align="flex-start">
            <h2><strong>F</strong>requently<br/> <strong>A</strong>sked<br/> <strong>Q</strong>uestions</h2>
            <p>
              Here are answers to some commonly asked questions - feel free to reach out to us in the Emerald Pass channel in our Discord for more information.
            </p>
          </Column>
        </div>
        <div slot="right">
          <Column gap={5} align="flex-start" justify="flex-start">
            {#each faqs as faq}
              <Column gap={1.5} align="flex-start" justify="flex-start">
                <h4>{faq.question}</h4>
                <p class="answer">
                  {faq.answer}
                </p>
              </Column>
            {/each}
          </Column>
        </div>
      </Grid1>
    </Container>
  </Section>
</div>

<style type="scss">
  h2 {
    text-align: left;
  }
  h4 {
    font-family: var(--ff-text);
    text-transform: none;
  }
  .answer {
    font-size: var(--fs-300);
  }
</style>