const { ethers, upgrades } = require('hardhat');

const proxyAddress = '0x93640acd80e2404b72370f047a502f44d30f3a6c'; // put in proxy address here
async function main() {
	const BoxV2 = await ethers.getContractFactory('BoxV2');
	const boxV2 = await upgrades.upgradeProxy(proxyAddress, BoxV2);
	console.log('box upgraded to V2 at:', boxV2.address);
}

main();
