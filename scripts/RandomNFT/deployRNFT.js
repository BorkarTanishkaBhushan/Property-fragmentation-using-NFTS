const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const rnftContractFactory = await hre.ethers.getContractFactory("MyNFT");
    const rnftContract = await rnftContractFactory.deploy();
    await rnftContract.deployed();
    console.log("Contract deployed to:", rnftContract.address);
    console.log("Contract deployed by:", owner.address);

    let safeMintTnx = await rnftContract.safeMint(owner.address , '1')
    await safeMintTnx.wait();
    console.log("NFT minting done")
};  

const runMain = async () => {
    try{
        await main();
        process.exit(0); 
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
