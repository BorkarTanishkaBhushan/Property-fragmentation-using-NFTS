// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// import "@openzeppelin/contracts@4.6.0/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts@4.6.0/token/ERC721/IERC721.sol";
// import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";
// import "@openzeppelin/contracts@4.6.0/token/ERC20/extensions/draft-ERC20Permit.sol";
// import "@openzeppelin/contracts@4.6.0/token/ERC721/utils/ERC721Holder.sol";

import "hardhat/console.sol"; 
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract FractionalizedNFT is ERC20, Ownable, ERC20Permit, ERC721Holder {
    IERC721 public collection;
    uint256 public tokenId;
    bool public initialized = false;
    bool public forSale = false;
    uint256 public salePrice;
    bool public canRedeem = false;

    constructor() ERC20("Token", "Tkn") ERC20Permit("Token") {
        console.log("constructed");
    }

    function initialize(address _collection, uint256 _tokenId, uint256 _amount) external onlyOwner {
        require(!initialized, "Already initialized");
        require(_amount > 0, "Amount needs to be more than 0");
        collection = IERC721(_collection);
        collection.safeTransferFrom(msg.sender, address(this), _tokenId);
        tokenId = _tokenId;
        initialized = true;
        _mint(msg.sender, _amount);
    }

}