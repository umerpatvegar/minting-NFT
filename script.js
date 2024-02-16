
    var account = null;
    var contract = null;
    const ABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "initialOwner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAXSUPPLY",
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
		"name": "mintRate",
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
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
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
		"name": "totalNFTminted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
    const ADDRESS = "0xa46D4B17Ac44eD1F9CAb92c6B3c5b2Ba52240000";



	async function checkIfAnyNFTsMinted() {
    try {
      
		const k =await contract.methods.totalNFTminted().call();
        let result = false;
		if(k>0){
		 result =true;
		}

       
        return result;
    } catch (error) {
        console.error("Error checking if any NFTs have been minted:", error);
        return false;
    }
}
	
	
	const mintedNFTsContainer = document.getElementById('minted-nfts');

	async function displayMintedNFTs() {
    
	const balance = await contract.methods.balanceOf(account).call();
    mintedNFTsContainer.innerHTML = ""; 
	const labelContainer = document.createElement('div');
    labelContainer.style.textAlign = 'center';
    labelContainer.style.marginBottom = '20px'; 
	if (balance > 0) {
        labelContainer.innerHTML = `<p>Your Minted NFT's:</p>`;
    }
    mintedNFTsContainer.appendChild(labelContainer);
	
    for (let i = 0; i <24; i++) {
        const owner = await contract.methods.ownerOf(i).call();
        
        if (owner.toLowerCase() === account.toLowerCase()) {
            const tokenURI = await contract.methods.tokenURI(i).call();
            const tokenURIData = await fetch(tokenURI);
            const tokenURIDataJSON = await tokenURIData.json();
            const imageURL = tokenURIDataJSON.image;
            const name = tokenURIDataJSON.name;
            const description = tokenURIDataJSON.description;
            const backgroundColor = getRandomColor();
            
           
            const nftContainer = document.createElement('div');
            nftContainer.classList.add('minted-nft-container');
            nftContainer.style.backgroundColor = backgroundColor;
            
           
            const imgElement = document.createElement('img');
            imgElement.src = imageURL;
            imgElement.alt = name + " NFT";
			 
            imgElement.height = 204; 
            
       
            const nameElement = document.createElement('p');
            nameElement.textContent ="Name : "+ name;
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = "Description : "+description;
            
           
            nftContainer.appendChild(imgElement);
            nftContainer.appendChild(nameElement);
            nftContainer.appendChild(descriptionElement);
            
            
            mintedNFTsContainer.appendChild(nftContainer);
        }
    }
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

    (async () => {
        if (window.ethereum) {
            await window.ethereum.send('eth_requestAccounts');
            window.web3 = new Web3(window.ethereum);
            var accounts = await web3.eth.getAccounts();
            account = accounts[0];
			
            document.getElementById('wallet-address').textContent = account;
			
            document.getElementById('smart-contract-address').textContent = ADDRESS;
            contract = new web3.eth.Contract(ABI, ADDRESS);
			async function displayAllNFTs() {
            const mintedNFTsContainer = document.getElementById('all-nfts');

			
			 const anyNFTsMinted = await checkIfAnyNFTsMinted(); 

          
           if (!anyNFTsMinted) {
	        localStorage.removeItem('mintedNFTs');
            }

            for (let i = 0; i < 24; i++) {
                const tokenURI = `https://ipfs.io/ipfs/QmQ5frXvbAkkKoK73QhVnoCi46moGHgXgbEsK9tiD9GyEU/${i}.json`;
                const tokenURIData = await fetch(tokenURI);
                const tokenURIDataJSON = await tokenURIData.json();
                const imageURL = tokenURIDataJSON.image;
                const name = tokenURIDataJSON.name;
                const description = tokenURIDataJSON.description;
				const price = 0.001 ;
                const backgroundColor ='#ffffff';

                const nftContainer = document.createElement('div');
                nftContainer.classList.add('nft-container');
                nftContainer.style.backgroundColor = backgroundColor;

                const imgElement = document.createElement('img');
                imgElement.src = imageURL;
                imgElement.alt = name + " NFT";
				imgElement.style.maxHeight = '204px';
			

                const nameElement = document.createElement('p');
                nameElement.textContent = "Name: " + name;
                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = "Description: " + description;
				const priceElement = document.createElement('p');
                priceElement.textContent = "Price: " + price+" ether";
				const mintButton = document.createElement('button');
        mintButton.textContent = 'Mint';
        mintButton.classList.add('mint-button');
        mintButton.dataset.tokenIndex = i; 
		if (hasAlreadyMinted(i)) {
            mintButton.textContent = 'Minted';
			mintButton.style.backgroundColor = "#ff0000";
            mintButton.disabled = true; 
        }

		nftContainer.appendChild(imgElement);
        nftContainer.appendChild(nameElement);
        nftContainer.appendChild(descriptionElement);
		nftContainer.appendChild(priceElement);
        nftContainer.appendChild(mintButton);

        mintedNFTsContainer.appendChild(nftContainer);
            }
        }
		function hasAlreadyMinted(tokenIndex) {
   
    const mintedNFTs = JSON.parse(localStorage.getItem('mintedNFTs')) || [];
    return mintedNFTs.includes(tokenIndex);
}
function markAsMinted(tokenIndex) {
   
    const mintedNFTs = JSON.parse(localStorage.getItem('mintedNFTs')) || [];
   
    mintedNFTs.push(tokenIndex);
   
    localStorage.setItem('mintedNFTs', JSON.stringify(mintedNFTs));
}
document.addEventListener('click', async function(event) {
    if (event.target.classList.contains('mint-button')) {
        const mintButton = event.target;
       
        const tokenIndex = parseInt(mintButton.dataset.tokenIndex);

        
        if (!hasAlreadyMinted(tokenIndex)) {
          
            await mintNFT(mintButton);
           
            markAsMinted(tokenIndex);
            
            mintButton.textContent = 'Minted';
            mintButton.disabled = true;
        }
    }
});
		async function mintNFT(mintButton) {
			if (mintButton.textContent === 'Minted') {
        return;
    }
	const tokenIndex = parseInt(mintButton.dataset.tokenIndex);
    
    const accountAddress = account; 
	const tokenURI = tokenIndex + ".json";
	await contract.methods.safeMint(account,tokenIndex, tokenURI).send({ from: account, value: "1000000000000000" });
	console.log(`Minting NFT for token index ${tokenIndex} to account ${accountAddress}`);
	mintButton.textContent = 'Minted';
	mintButton.style.backgroundColor = "#ff0000";
   
   
	await displayMintedNFTs(); 
}

       
     displayAllNFTs();

    
    displayMintedNFTs();
    
        }
    })();
