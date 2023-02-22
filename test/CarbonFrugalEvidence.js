const { expect } = require("chai");

describe("CarbonFrugalEvidence contract", function () {
  it("Deploy the vulnerable contract.", async function () {
    const [owner] = await ethers.getSigners();

    const CarbonFrugalEvidence = await ethers.getContractFactory(
      "CarbonFrugalEvidence"
    );

    const evidence = await CarbonFrugalEvidence.deploy();
    const [attacker] = await ethers.getSigners();
    // const ow = 

    const Attacker = await ethers.getContractFactory("Attacker");

    const attack = await Attacker.deploy();
    expect(await attack.connect(owner).callback()).to.equal(1);
    await expect(attack.connect(owner).callback()).to.emit(evidence,"CallBack").withArgs(1);
  });
});
