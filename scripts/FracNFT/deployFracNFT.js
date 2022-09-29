const main = async () => {
    // const [owner, randomPerson] = await hre.ethers.getSigners();
    const fracContractFactory = await hre.ethers.getContractFactory("FractionalizedNFT");
    const fracContract = await fracContractFactory.deploy();
    await fracContract.deployed();
    console.log("Contract deployed to:", fracContract.address);
    console.log("Contract deployed by:", owner.address);

    let initializeTnx = await fracContract.initialize( '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', '1', '10')
    await initializeTnx.wait();
    console.log("Initialize function transaction done")

    let putForSaleTnx = await fracContract.putForSale({value: hre.ethers.utils.parseEther('0.2')})
    await putForSaleTnx.wait();
    console.log("function transaction done") 

    let purchaseTnx = await fracContract.purchaseTnx()
    await purchaseTnx.wait();
    console.log("Purchase transaction done") 

    let redeemTnx = await fracContract.redeemTnx({value: hre.ethers.utils.parseEther('0.2')})
    await redeemTnx.wait()
    console.log("redeem transaction done") 
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
