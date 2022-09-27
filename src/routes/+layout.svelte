<script type="ts">
	import '../app.postcss';
	import '$lib/styles/app.scss';
	import { Header, Footer, TransactionModal } from '@emerald-dao/component-library';
	import { theme } from '$stores/ThemeStore';
	import { logIn, unauthenticate } from '$flow/actions';
	import { user, transactionInProgress, transactionStatus } from '$stores/FlowStore';
	import { getFindProfile } from '$flow/utils';
	import { navElements } from '$lib/config/navigation';
</script>

<Header
	themeStore={theme}
	{logIn}
	{unauthenticate}
	{getFindProfile}
	user={$user}
	{navElements}
	mobileMenu={false}
/>
<main>
	<slot />
</main>
<Footer />

<TransactionModal
	transactionInProgress={$transactionInProgress}
	transactionStatus={$transactionStatus}
	dappLogo="/ec-logo.png"
	border={true}
/>
