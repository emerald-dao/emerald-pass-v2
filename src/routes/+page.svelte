<script type="ts">
  import dappInfo from "$lib/config/config";
  import { Section, Container, Column, AdaptableGrid, Row } from "@mateoroldos/svelte.bones";
  import { logIn } from '$flow/actions';
	import { FlowConnect, Button, DiscordInvite } from "@emerald-dao/component-library";
</script>

<Section paddingBottom="large" paddingTop="small">
  <Container width="small">
    <Column gap={1}>
      <h1><span>Emerald's City DAO</span><br/>Emerald Pass</h1>
      <video width="600px" height="100%" autoplay loop muted>
        <source src="emerald2.webm" type="video/webm" />
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
      <Column gap="small" align="center">
      <h2>Unlock Emerald City's <strong>Power</strong></h2>
      <p>
        Emerald Pass allows you to gain access to tons of premium features across all of our products, all under one subscription. See below for subscriber benefits, purchasing, and more.
      </p>
      <Button size="large">Purchase Now</Button>
    </Column>
    </Column>
  </Container>
</Section>

<Section paddingTop="large" paddingBottom="large">
  <Container>
    <div class="grid">
      <div class="sticky">
        <Column gap={2} justify="flex-start">
          <h2>Emerald City is <strong>Huge</strong></h2>
          <p>
            Emerald City has built main stream products on Flow such as FLOAT, which consistently more used than NBATopShot.
          </p>
        </Column>
      </div>
      <Column gap={5} align="flex-start" justify="flex-start">
        
        <Row gap={1.3} align="flex-start" justify="flex-start">
          <img class="logo" src="/ec-logo.png" alt="emerald city dao">
          <img class="logo" src="/ec-logo.png" alt="emerald city dao">
          <img class="logo" src="/ec-logo.png" alt="emerald city dao">
          <img class="logo" src="/ec-logo.png" alt="emerald city dao">
          <img class="logo" src="/ec-logo.png" alt="emerald city dao">
          <img class="logo" src="/ec-logo.png" alt="emerald city dao">
        </Row>
        <span class="red">
          TODO: THE TOP LOGOS ARE JUST PLACEHOLDER FOR EMERALD'S PROJECTS
        </span>
        <Column gap={1.2} align="flex-start" justify="flex-start">
          <h3>134 Projects</h3>
          <p>
            Over 100 communities use Emerald City on Flow.
          </p>
        </Column>
        <Column gap={1.2} align="flex-start">
          <h3>134 Projects</h3>
          <p>
            Over 100 communities use Emerald City on Flow.
          </p>
        </Column>
        <Column gap={1.2} align="flex-start">
          <h3>134 Projects</h3>
          <p>
            Over 100 communities use Emerald City on Flow.
          </p>
        </Column>
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
          <div class="card">
            <Column gap={1}>
              <span>Proof of atendance Token</span>
              <Row gap={1}>
                <img src="/ec-logo.png" alt="emerald city dao">
                <h3>FLOAT</h3>
              </Row>
            </Column>
            <ul>
              <li>Access to Challenges feature</li>
            </ul>
          </div>
          <div class="card">
            <Column gap={1}>
              <span>Proof of atendance Token</span>
              <Row gap={1}>
                <img src="/ec-logo.png" alt="emerald city dao">
                <h3>FLOAT</h3>
              </Row>
            </Column>
            <ul>
              <li>Access to Challenges feature</li>
            </ul>
          </div>
          <div class="card">
            <Column gap={1}>
              <span>Proof of atendance Token</span>
              <Row gap={1}>
                <img src="/ec-logo.png" alt="emerald city dao">
                <h3>FLOAT</h3>
              </Row>
            </Column>
            <ul>
              <li>Access to Challenges feature</li>
            </ul>
          </div>
          <div class="card">
            <Column gap={1}>
              <span>Proof of atendance Token</span>
              <Row gap={1}>
                <img src="/ec-logo.png" alt="emerald city dao">
                <h3>FLOAT</h3>
              </Row>
            </Column>
            <ul>
              <li>Access to Challenges feature</li>
            </ul>
          </div>
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
        <Column gap={1.2} align="flex-start" justify="flex-start">
          <h4>What is Emerald City DAO?</h4>
          <p>
            Emerald City is the first DAO on the Flow Blockchain, and also, without any doubt, the coolest DAO in the whole universe.
          </p>
        </Column>
        <Column gap={1.2} align="flex-start" justify="flex-start">
          <h4>What is Emerald City DAO?</h4>
          <p>
            Emerald City is the first DAO on the Flow Blockchain, and also, without any doubt, the coolest DAO in the whole universe.
          </p>
        </Column>
        <Column gap={1.2} align="flex-start" justify="flex-start">
          <h4>What is Emerald City DAO?</h4>
          <p>
            Emerald City is the first DAO on the Flow Blockchain, and also, without any doubt, the coolest DAO in the whole universe.
          </p>
        </Column>
        <Column gap={1.2} align="flex-start" justify="flex-start">
          <h4>What is Emerald City DAO?</h4>
          <p>
            Emerald City is the first DAO on the Flow Blockchain, and also, without any doubt, the coolest DAO in the whole universe.
          </p>
        </Column>
      </Column>
    </div>
  </Container>
</Section>

<Section paddingTop="large" paddingBottom="large">
  <span class="red">
    TODO: EDIT THIS COMPONENT ON THE COMPONENT LIBRARY!!
  </span>
  <DiscordInvite/>
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
    gap: 1.4rem;
    background-color: var(--clr-background-primary);
    border-radius: 1rem;
    padding: 3rem;
    width: 100%;


    span {
      color: var(--clr-primary-main);
      font-family: var(--ff-mono);
      font-size: var(--fs-300);
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

  :root {
    --bones-section-padding-m: 8rem;
  }
  
  .red {
    color: red;
  }
</style>