const {ethers} = require('ethers')
// const RPC =''
// const account = ''
const provider = new ethers.providers.JsonRpcProvider(
    `https://goerli.infura.io/v3/266fe11a6fa64356a56d9babf980e8d3`
);
const querryBlock = async () =>{
    const block = await provider.getBlockNumber();
    console.log("Current block no: ", block)
    const balance = await provider.getBalance('0x8E4D05a7e1cF1a67b328aC416A7FFA152D4CE184')
    console.log("Balance amount: ", balance);
    const balanceInEther = ethers.utils.formatEther(balance);
    console.log("Balance amount in ETH: ", balanceInEther);
    
    const balanceInWei = ethers.utils.parseEther(balanceInEther);
    console.log("Balance amount in WEI: ", balanceInWei.toString());
}

querryBlock();