const main = async () => {
    const fracContractFactory = await hre.ethers.getContractFactory("FractionalizedNFT");
    const fracContract = await fracContractFactory.deploy();
    await fracContract.deployed();
    console.log("Contract deployed to:", fracContract.address);

    // let initializeTxn = await fracContract.initialize();
    // await initializeTxn.wait();
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
