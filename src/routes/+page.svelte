<script type="ts">
  import dappInfo from "$lib/config/config";
  import { Section, Container, Column, AdaptableGrid, Row } from "@mateoroldos/svelte.bones";
  import { logIn } from '$flow/actions';
	import { FlowConnect, Button, DiscordInvite } from "@emerald-dao/component-library";
  import projects from "$lib/data/projects";
  import faqs from "$lib/data/faqs";
  import purchasePlans from "$lib/config/purchase";
  import daoStats from "$lib/data/daoStats";
	import { prefetch } from "$app/navigation";
</script>

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
  </Container>
</Section>

<Section paddingTop="large" paddingBottom="large">
  <Container width="small">
    <Column gap="small" align="center">
      <h2>Unlock Emerald City's <strong>Power</strong></h2>
      <p>
        Emerald Pass allows you to gain access to tons of premium features across all of our products, all under one subscription. See below for subscriber benefits, purchasing, and more.
      </p>
      <Button size="large">Purchase Now</Button>
    </Column>
  </Container>
</Section>

<Section paddingTop="large" paddingBottom="large">
  <Container>
    <div class="grid">
      <div class="sticky">
        <Column gap={2} justify="flex-start" align="flex-start">
          <h2>Emerald City is <strong>Huge</strong></h2>
          <Row gap={1.3} align="flex-start" justify="flex-start">
            {#each projects as project}
              <img class="logo" src={project.logo} alt={`${project.name} logo`}>
            {/each}
          </Row>
          <p>
            Emerald City has built main stream products on Flow such as FLOAT, which consistently more used than NBATopShot.
          </p>
        </Column>
      </div>
      <Column gap={5} align="flex-start" justify="flex-start">
        {#each daoStats as stat}
          <Column gap={1.2} align="flex-start" justify="flex-start">
            <h3>{stat.title}</h3>
            <p>
              {stat.description}
            </p>
          </Column>
        {/each}
      </Column>
    </div>
  </Container>
</Section>

<div style="background-color: var(--clr-primary-main);">
  <Section paddingTop="large" paddingBottom="large">
    <Container>
      <div class="grid">
        <div class="sticky">
          <Column gap={2} justify="flex-start">
            <h2 style="color: var(--clr-font-heading-inverse)">Get exclusive access to our benefits</h2>
            <p style="color: var(--clr-font-text-inverse)">
              As an Emerald Pass subscriber, you will be able to get premium features and abilities on all of our products, including some educational material.
            </p>
          </Column>
        </div>
        <Column>
          {#each projects as project}
          <div class="card">
            <Row gap={1}>
              <img src={project.logo} alt={`${project.name} logo`}>
              <h3>{project.name}</h3>
            </Row>
            <span>{project.slogan}</span>
            <ul>
              {#each project.benefits as benefit}
                <li>{benefit}</li>
              {/each}
            </ul>
          </div>
          {/each}
        </Column>
    </Container>
  </Section>
</div>

<Section paddingTop="large" paddingBottom="large">
  <Container>
    <div class="grid">
      <div class="sticky">
        <Column gap={2} justify="flex-start">
          <h2>Frequently Asked Questions</h2>
          <p>
            Emerald City has built main stream products on Flow such as FLOAT, which consistently more used than NBATopShot.
          </p>
        </Column>
      </div>
      <Column gap={5} align="flex-start" justify="flex-start">
        {#each faqs as faq}
          <Column gap={1.2} align="flex-start" justify="flex-start">
            <h4>{faq.question}</h4>
            <p>
              {faq.answer}
            </p>
          </Column>
        {/each}
      </Column>
    </div>
  </Container>
</Section>

<Section paddingTop="large" paddingBottom="large">
  <Container>
    <Column>
      <h2>Get Your Pass Now</h2>
      <Row>
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
                size="large"
              >
                Buy Pass
              </Button>
            </Column>
          </div>
        {/each}
      </Row>
    </Column>
  </Container>
</Section>

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

  span {
    font-family: var(--ff-mono);
  }

  p {
    text-align: center;
  }

  h2 {
    text-align: center;
    --font-weight: 700;

    strong {
      color: var(--clr-primary-main);
       --font-weight: 700;
    }
  }

  img {
    max-width: 30rem;
    border-radius: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 3fr 5fr;
    gap: 9rem;
    margin-top: 2rem;

    h2 {
      text-align: left;
    }
    p {
      text-align: left;
    }

    

   
  }


  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    background-color: var(--clr-background-primary);
    border-radius: 1rem;
    padding: 3rem;
    width: 100%;


    span {
      color: var(--clr-font-heading);
      font-family: var(--ff-text);
      font-size: var(--fs-400);
    }

    ul {
      font-size: var(--fs-300);
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    

    img {
      max-width: 4rem;
    }
  }
   
  .sticky {
    position: sticky;
    top: 10rem;
    height: fit-content;
  }

  .logo {
    max-width: 3rem;
  }

  .buy-card {
    background-color: var(--clr-primary-main);
    border-radius: 2.3rem;
    padding: 4rem;
    color: var(--clr-font-text-inverse);

		h3 {
			color: var(--clr-font-text-inverse);
		}
  }

  :root {
    --bones-section-padding-m: 8rem;
  }
</style>