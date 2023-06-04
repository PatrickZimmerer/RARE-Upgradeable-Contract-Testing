const { ethers, upgrades } = require('hardhat');

async function main() {
	const ImplementationContract = await ethers.getContractFactory('ImplementationContract');
	const implementationContract = await upgrades.deployProxy(ImplementationContract, [42], {
		initializer: 'initialize',
	});
	console.log('ImplementationContract deployed to:', implementationContract.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
