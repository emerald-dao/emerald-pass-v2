import { browser } from '$app/environment';
import { get } from 'svelte/store';

import * as fcl from '@onflow/fcl';
import './config';

import {
	user,
	transactionStatus,
	transactionInProgress,
	addresses,
	network
} from '$stores/FlowStore';

///////////////
// Cadence code
///////////////
// Scripts
import hasEmeraldPassScript from './cadence/scripts/has_emerald_pass.cdc?raw';
import timeOnEmeraldPassScript from './cadence/scripts/time_on_pass.cdc?raw';
import checkSetupScript from './cadence/scripts/check_setup.cdc?raw';
// Transactions
import purchaseEmeraldPassTx from './cadence/transactions/purchase_emerald_pass.cdc?raw';
import setupEmeraldPassTx from './cadence/transactions/setup_emerald_pass.cdc?raw';

if (browser) {
	// set Svelte $user store to currentUser,
	// so other components can access it
	fcl.currentUser.subscribe(user.set, []);
}

// Lifecycle FCL Auth functions
export const unauthenticate = () => fcl.unauthenticate();
export const logIn = async () => await fcl.logIn();
export const signUp = () => fcl.signUp();

function switchNetwork(newNetwork) {
	if (newNetwork === 'emulator') {
		fcl
			.config()
			.put('accessNode.api', 'http://localhost:8080')
			.put('discovery.wallet', 'http://localhost:8701/fcl/authn');
	} else if (newNetwork === 'testnet') {
		fcl
			.config()
			.put('accessNode.api', 'https://rest-testnet.onflow.org')
			.put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');
	} else if (newNetwork === 'mainnet') {
		fcl
			.config()
			.put('accessNode.api', 'https://rest-mainnet.onflow.org')
			.put('discovery.wallet', 'https://fcl-discovery.onflow.org/authn');
	}
	saveFileInStore(network, newNetwork);
}

function initTransactionState() {
	transactionInProgress.set(true);
	transactionStatus.set({ status: -1 });
}

export function replaceWithProperValues(script, contractName = '', contractAddress = '') {
	const addressList = get(addresses);
	return script
		.replace('"../ExampleNFT.cdc"', contractAddress)
		.replace('"../utility/NonFungibleToken.cdc"', addressList.NonFungibleToken)
		.replace('"../utility/MetadataViews.cdc"', addressList.MetadataViews)
		.replace('"../utility/FlowToken.cdc"', addressList.FlowToken)
		.replace('"../utility/FungibleToken.cdc"', addressList.FungibleToken)
		.replace('"../utility/FUSD.cdc"', addressList.FUSD)
		.replace('"./utility/NonFungibleToken.cdc"', addressList.NonFungibleToken)
		.replace('"./utility/MetadataViews.cdc"', addressList.MetadataViews)
		.replace('"./utility/FungibleToken.cdc"', addressList.FungibleToken)
		.replace('"./utility/FlowToken.cdc"', addressList.FlowToken)
		.replace('"../utility/FLOAT.cdc"', addressList.FLOAT)
		.replace('"../EmeraldPass.cdc"', addressList.EmeraldPass)
		.replace('"../utility/NFTCatalog.cdc"', addressList.NFTCatalog)
		.replaceAll('0x5643fd47a29770e7', addressList.ECTreasury)
		.replaceAll('ExampleNFT', contractName);
}

// ****** Transactions ****** //
export const purchaseEmeraldPass = async (amount) => {
	initTransactionState();

	try {
		const transactionId = await fcl.mutate({
			cadence: replaceWithProperValues(purchaseEmeraldPassTx),
			args: (arg, t) => [arg(amount, t.UFix64)],
			payer: fcl.authz,
			proposer: fcl.authz,
			authorizations: [fcl.authz],
			limit: 999
		});
		console.log({ transactionId });
		fcl.tx(transactionId).subscribe((res) => {
			transactionStatus.set(res);
			console.log(res);
			if (res.status === 4) {
				setTimeout(() => transactionInProgress.set(false), 2000);
			}
		});
	} catch (e) {
		console.log(e);
		transactionInProgress.set(false);
		transactionStatus.set({});
	}
};

export const setupEmeraldPass = async () => {
	initTransactionState();

	try {
		const transactionId = await fcl.mutate({
			cadence: replaceWithProperValues(setupEmeraldPassTx),
			args: (arg, t) => [],
			payer: fcl.authz,
			proposer: fcl.authz,
			authorizations: [fcl.authz],
			limit: 999
		});
		console.log({ transactionId });
		fcl.tx(transactionId).subscribe((res) => {
			transactionStatus.set(res);
			console.log(res);
			if (res.status === 4) {
				setTimeout(() => transactionInProgress.set(false), 2000);
			}
		});
	} catch (e) {
		console.log(e);
		transactionInProgress.set(false);
		transactionStatus.set({});
	}
};

// ****** Scripts ****** //
export async function hasEmeraldPass(user) {
	try {
		const response = await fcl.query({
			cadence: replaceWithProperValues(hasEmeraldPassScript),
			args: (arg, t) => [arg(user, t.Address)]
		});

		return response;
	} catch (e) {
		console.log(e);
	}
}

export async function timeOnEmeraldPass(user) {
	try {
		const response = await fcl.query({
			cadence: replaceWithProperValues(timeOnEmeraldPassScript),
			args: (arg, t) => [arg(user, t.Address)]
		});

		console.log('Unix time left: ' + response);
		console.log('Unix time now: ' + Date.now() / 1000);
		return response;
	} catch (e) {
		console.log(e);
	}
}

export async function checkSetup(user) {
	try {
		const response = await fcl.query({
			cadence: replaceWithProperValues(checkSetupScript),
			args: (arg, t) => [arg(user, t.Address)]
		});

		return response;
	} catch (e) {
		console.log(e);
	}
}