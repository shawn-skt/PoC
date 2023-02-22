async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const victim = await ethers.getContractFactory("CarbonFrugalEvidence");
  const token = await victim.deploy();

  console.log("Victim CarbonFrugalEvidence address:", token.address);

  const attacker = await ethers.getContractFactory("Attacker");
  const att = await attacker.deploy(token.address);
  console.log("Attacker address:", att.address);

  const res = await att.callback();
  console.log(res);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
