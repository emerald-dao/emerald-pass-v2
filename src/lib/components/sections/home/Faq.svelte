<script type="ts">
  import { Section, Container, Column } from "@mateoroldos/svelte.bones";
  import faqs from "$lib/data/faqs";
  import { Grid1 } from "$lib/components/layouts";
</script>

<Section paddingTop="large" paddingBottom="large">
  <Container>
    <Grid1>
      <div slot="left">
        <Column gap={2} justify="flex-start">
          <h2>Frequently Asked Questions</h2>
          <p>
            Emerald City has built main stream products on Flow such as FLOAT, which consistently more used than NBATopShot.
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

<style type="scss">
  .answer {
    font-size: var(--fs-300);
  }
</style>