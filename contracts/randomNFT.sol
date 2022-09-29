// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    constructor() ERC721("MyNFT", "Tkn") {}

    function safeMint(uint256 tokenId) public onlyOwner {
        _safeMint(msg.sender, tokenId);
        console.log(msg.sender);
    }
}









