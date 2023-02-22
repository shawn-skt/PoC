async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // factory address
  const evfactory = await ethers.getContractFactory("EvidenceFactory");
  const factory = await evfactory.deploy([deployer.address]);

  const victim = await ethers.getContractFactory("Evidence");
  const token = await victim.deploy("str", factory.address);

  console.log("Victim contract Evidence address:", token.address);

  const attacker = await ethers.getContractFactory("Attacker2");
  const att = await attacker.deploy(token.address);
  console.log("Attacker address:", att.address);

  const res = await att.callback();
  // console.log(res);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
