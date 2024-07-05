const ethers = require('ethers');

// JSON of the compiled oracle contract
const TvlFeed = require('../artifacts/contracts/oracle.sol/TVLFeed.json');

// Address of the deployed oracle contract
let TvlFeedAddress = '0x';

const BLOCKCHAIN_NODE_URL = 'https://mevm.devnet.m1.movementlabs.xyz';
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// The offchain function for calculating the number
function getTVLOffchain() {
    return axios.get('https://api.eigenexplorer.com/metrics/tvl');
}

async function deployOracle() {
    //const signer = await ethers.si;
    const factory = new ethers.ContractFactory(TvlFeed.abi, TvlFeed.bytecode);

    // If your contract requires constructor args, you can specify them here
    const contract = await factory.deploy();
    TvlFeedAddress = contract.address;

    console.log(contract.address);
    //console.log(contract.deployTransaction);
}

async function main() {
    await deployOracle();
    // Get instances of provider and signer to be able to interact with the blockchain
    const provider = new ethers.providers.JsonRpcProvider(BLOCKCHAIN_NODE_URL, m1);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);

    // Create an instance of deployed oracle contract
    const TvlFeedContract = new ethers.Contract(TicketsFeedAddress, TicketsFeed.abi, signer);
    
    // Retrieve data: it can be an API call, database query, etc.
    const offChainResult = await getTVLOffchain();
    console.log(offChainResult);

    // Create setData transaction
    const sendDataTx = await TvlFeedContract.setData(offChainResult);

    // Wait for the transaction to be applied
    await sendDataTx.wait();
}
  
main().catch((error) => {
    console.error(error);
});