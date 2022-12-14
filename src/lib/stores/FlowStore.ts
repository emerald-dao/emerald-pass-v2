import persistentWritable from '$lib/utilities/persistentWritable';
import { writable, derived } from 'svelte/store';
import { replaceWithProperValues } from '$flow/actions.js';

const contractData = {
	NonFungibleToken: {
		testnet: '0x631e88ae7f1d7c20',
		mainnet: '0x1d7e57aa55817448'
	},
	MetadataViews: {
		testnet: '0x631e88ae7f1d7c20',
		mainnet: '0x1d7e57aa55817448'
	},
	FungibleToken: {
		testnet: '0x9a0766d93b6608b7',
		mainnet: '0xf233dcee88fe0abe'
	},
	FlowToken: {
		testnet: '0x7e60df042a9c0868',
		mainnet: '0x1654653399040a61'
	},
	FUSD: {
		testnet: '0xe223d8a629e49c68',
		mainnet: '0x3c5959b568896393'
	},
	ECTreasury: {
		testnet: '0x6c0d53c676256e8c',
		mainnet: '0x5643fd47a29770e7'
	},
	FLOAT: {
		testnet: '0x0afe396ebc8eee65',
		mainnet: '0x2d4c3caffbeab845'
	},
	FIND: {
		testnet: '0xa16ab1d0abde3625',
		mainnet: '0x097bafa4e0b48eef'
	},
	FN: {
		testnet: '0xb05b2abb42335e88',
		mainnet: '0x233eb012d34b0070'
	},
	EmeraldPass: {
		testnet: '0x71a2ebe9596c481e',
		mainnet: '0x6a07dbeb03167a13'
	},
	NFTCatalog: {
		testnet: '0x324c34e1c517e4db',
		mainnet: '0x49a7cda3a1eecc29'
	}
};

export const user = writable({ loggedIn: false });
export const network = writable('mainnet');
export const profile = writable(null);
export const transactionStatus = writable({});
export const transactionInProgress = writable(false);
export const addresses = derived([network], ([$network]) => {
	return {
		NonFungibleToken: contractData.NonFungibleToken[$network],
		MetadataViews: contractData.MetadataViews[$network],
		FungibleToken: contractData.FungibleToken[$network],
		FUSD: contractData.FUSD[$network],
		FlowToken: contractData.FlowToken[$network],
		ECTreasury: contractData.ECTreasury[$network],
		FLOAT: contractData.FLOAT[$network],
		FIND: contractData.FIND[$network],
		FN: contractData.FN[$network],
		EmeraldPass: contractData.EmeraldPass[$network],
		NFTCatalog: contractData.NFTCatalog[$network]
	};
});
