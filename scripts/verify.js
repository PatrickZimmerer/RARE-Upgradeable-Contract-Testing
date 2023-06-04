// we can't have these functions in our `helper-hardhat-config`
// since these use the hardhat library
// and it would be a circular dependency
const { run } = require('hardhat');

const verify = async () => {
	console.log('Verifying contract...');
	try {
		await run('verify:verify', {
			address: 0x93640acd80e2404b72370f047a502f44d30f3a6c,
		});
	} catch (e) {
		if (e.message.toLowerCase().includes('already verified')) {
			console.log('Already verified!');
		} else {
			console.log(e);
		}
	}
};

module.exports = {
	verify,
};
