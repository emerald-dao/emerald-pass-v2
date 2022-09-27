<script type="ts">
	import { onMount } from 'svelte';
	import { Section, Container, Column } from '@mateoroldos/svelte.bones';
	import { Gradient, GradientWrapper } from '$lib/components/gradients';
	import { Button } from '@emerald-dao/component-library';
	import { theme } from '$stores/ThemeStore';
</script>

<div style="position: relative;">
	<Section paddingBottom="medium" paddingTop="none">
		<Container width="small">
			<Column gap="none">
				<h1>Emerald Pass</h1>
				<span>by Emerald City DAO</span>
				<p>
					The single subscription pass which gives you access to premium features across the
					numerous products and services offered by Emerald City.
				</p>
				{$theme}
				{#if $theme === 'light'}
					<video width="480px" height="100%" autoplay loop muted>
						<source src="emerald-pass.webm" type="video/webm" />
						<source src="emerald-pass-white.mp4" type="video/mp4" />
						<track kind="captions" />
						Your browser does not support the video tag.
					</video>
				{:else}
					<video width="480px" height="100%" autoplay loop muted>
						<source src="emerald-pass.webm" type="video/webm" />
						<source src="emerald-pass-black.mp4" type="video/mp4" />
						<track kind="captions" />
						Your browser does not support the video tag.
					</video>
				{/if}
				<Button size="large" href="/#purchase">Purchase Now</Button>
			</Column>
			<!-- <GradientWrapper>
        <Gradient left="50%" top="60%" blur="200px" width="400px" height="400px"/>
      </GradientWrapper> -->
		</Container>
	</Section>
</div>

<style type="scss">
	h1 {
		text-align: center;
		text-transform: uppercase;
		--font-weight: 700;
		letter-spacing: 0.3rem;
		margin-top: 3rem;
		margin-bottom: 0.8rem;
	}

	span {
		color: var(--clr-primary-main);
		text-transform: uppercase;
		font-size: var(--fs-400);
		--font-weight: 200;
		letter-spacing: 0.5rem;
		text-shadow: none;
		margin-bottom: 1.4rem;
	}

	p {
		text-align: center;
	}

	video {
		margin-block: 3rem;
		border-radius: 1rem;
	}
</style>
