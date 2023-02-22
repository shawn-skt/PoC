const { expect } = require("chai");

describe("EvidenceContract contract", function () {
  it("Revert if the dimension of the hash and the input data are not identical.", async function () {
    const [owner] = await ethers.getSigners();

    const EvidenceContract = await ethers.getContractFactory(
      "EvidenceContract"
    );

    const test = await EvidenceContract.deploy();

    await expect(
      test.createEvidenceWithExtraKey(
        [
          "0x7465737400000000000000000000000000000000000000000000000000000000",
          "0x7465737500000000000000000000000000000000000000000000000000000000",
        ],
        [owner.address],
        ["test_sigs"],
        ["test_logs"],
        [0, 1, 2],
        ["extrakey"]
      )
    ).to.be.revertedWith("array index overflow");
  });
});
