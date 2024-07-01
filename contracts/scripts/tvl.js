const ethers = require('ethers');

// JSON of the compiled TicketsFeed contract
const TvlFeed = require('./TvlFeed.json');

// Address of the deployed TicketsFeed oracle contract
const TvlFeedAddress = '0x';

const BLOCKCHAIN_NODE_URL = 'https://mevm.devnet.m1.movementlabs.xyz';
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// The logic for calculating the number of sold tickets
function getTVLOffchain() {
    return 102;
}

async function main() {
    // Get instances of provider and signer to be able to interact with the blockchain
    const provider = new ethers.providers.JsonRpcProvider(BLOCKCHAIN_NODE_URL);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);

    // Create an instance of deployed oracle contract
    const TvlFeedContract = new ethers.Contract(TicketsFeedAddress, TicketsFeed.abi, signer);
    
    // Retrieve data: it can be an API call, database query, etc.
    const offChainResult = getTVLOffchain();

    // Create setData transaction
    const sendDataTx = await TvlFeedContract.setData(offChainResult);

    // Wait for the transaction to be applied
    await sendDataTx.wait();
}
  
main().catch((error) => {
    console.error(error);
});