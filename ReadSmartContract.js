const {ethers}= require("ethers")
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/266fe11a6fa64356a56d9babf980e8d3`)
const walletAddress = "0x8642300Eecb25eE85A8F7Dd0C4ADBee758B4FFE7";
const walletAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const contractRead = async () => {
    const walletContract = new ethers.Contract(walletAddress,walletAbi,provider)
    console.log("reading contract")
    console.log(walletContract)
    const bal = await walletContract.contractBalance();
    console.log(`balance = ${bal}`)
    const accBal = await walletContract.accountBalance(`0x8E4D05a7e1cF1a67b328aC416A7FFA152D4CE184`);
    console.log(`account balance = ${ethers.utils.formatEther(accBal)}`)
}
contractRead()