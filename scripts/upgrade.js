const { ethers, upgrades } = require('hardhat');

async function main() {
	const proxyAddress = 123; // put in proxy address here
	const MyContractV2 = await ethers.getContractFactory('MyContractV2');
	const myContractV2 = await upgrades.upgradeProxy(proxyAddress, MyContractV2);
	console.log('MyContract upgraded to V2 at:', myContractV2.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
