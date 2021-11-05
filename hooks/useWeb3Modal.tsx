import { Web3Provider } from "@ethersproject/providers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useCallback, useEffect, useMemo, useState } from "react";
import Web3Modal from "web3modal";

// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
const INFURA_ID = "INVALID_INFURA_KEY";

const NETWORK = "mainnet";

function useWeb3Modal(config: any = {}) {
	const [provider, setProvider] = useState<Web3Provider>();
	const [autoLoaded, setAutoLoaded] = useState(false);
	const { autoLoad = true, infuraId = INFURA_ID, network = NETWORK } = config;

	const [web3Modal, setWeb3Modal] = useState<Web3Modal | undefined>();

	useEffect(() => {
		setWeb3Modal(
			new Web3Modal({
				network,
				cacheProvider: true,
				providerOptions: {
					walletconnect: {
						package: WalletConnectProvider,
						options: {
							infuraId,
						},
					},
				},
			})
		);
	}, [infuraId, network]);

	// Open wallet selection modal.
	const loadWeb3Modal = useCallback(async () => {
		const newProvider = await web3Modal.connect();
		setProvider(new Web3Provider(newProvider));
	}, [web3Modal]);

	const logoutOfWeb3Modal = useCallback(
		async function () {
			await web3Modal.clearCachedProvider();
			window.location.reload();
		},
		[web3Modal]
	);

	// If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
	useEffect(() => {
		if (autoLoad && !autoLoaded && web3Modal && web3Modal.cachedProvider) {
			loadWeb3Modal();
			setAutoLoaded(true);
		}
	}, [
		autoLoad,
		autoLoaded,
		loadWeb3Modal,
		setAutoLoaded,
		web3Modal && web3Modal.cachedProvider,
	]);

	return [provider, loadWeb3Modal, logoutOfWeb3Modal];
}

export default useWeb3Modal;
