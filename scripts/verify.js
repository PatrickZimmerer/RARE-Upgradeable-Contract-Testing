// we can't have these functions in our `helper-hardhat-config`
// since these use the hardhat library
// and it would be a circular dependency
const { run } = require('hardhat');

const verify = async () => {
	console.log('Verifying contract...');
	try {
		await run('verify:verify', {
			address: 0x2776b56c5567a020029aa14a6302dd4c166455ca,
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
