<script>
	import { checkSetup, setupEmeraldPass } from '$flow/actions';
	import { Section, Container } from '@mateoroldos/svelte.bones';
	import { Button } from '@emerald-dao/component-library';
	import { user } from '$stores/FlowStore';
</script>

<div id="setup" class="section-wrapper">
	<Section paddingTop="large" paddingBottom="large">
		<Container width="small">
			<div class="center">
				{#if $user.loggedIn}
					{#await checkSetup($user.addr) then setup}
						{#if setup}
							<p>You are already set up.</p>
						{:else}
							<Button on:click={setupEmeraldPass}>Setup Vault for Airdrop</Button>
						{/if}
					{/await}
				{:else}
					<p>Please log in.</p>
				{/if}
			</div>
		</Container>
	</Section>
</div>

<style>
	.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
