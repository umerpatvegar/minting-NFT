// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.1/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.1/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.1/access/Ownable.sol";

contract UmerNFT is ERC721, ERC721URIStorage, Ownable {
     uint256 public mintRate=0.001 ether;
      uint public MAXSUPPLY =54;
      uint256 public totalNFTminted=0;
    constructor(address initialOwner)
        ERC721("umerFlowerNFT", "UNFT")
        Ownable(initialOwner)
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/QmQ5frXvbAkkKoK73QhVnoCi46moGHgXgbEsK9tiD9GyEU/";
    }

    function safeMint(address to, uint256 tokenId, string memory uri)
        public payable 
        
    {     
        require(msg.value >= mintRate,"Not enough ethers");
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        totalNFTminted++;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
     function withdraw() public onlyOwner{
        require(address(this).balance> 0,"balance is 0");
        payable(owner()).transfer(address(this).balance);
    }
}
