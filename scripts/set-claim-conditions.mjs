import { useContract } from '@thirdweb-dev/react'

export default function Component() {
  const { contract } = useContract("0x0350aB991d28C6Becc628344fDFba2f2C76d8fe0", "edition-drop")

  // Now you can use the edition drop contract in the rest of the component
}
const presaleStartTime = new Date();
const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
const claimConditions = [
  {
    startTime: presaleStartTime, // start the presale now
    maxQuantity: 2, // limit how many mints for this presale
    price: 0.01, // presale price
    snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
  },
  {
    startTime: publicSaleStartTime, // 24h after presale, start public sale
    price: 0.08, // public sale price
  }
]);

const tokenId = 0; // the id of the NFT to set claim conditions on
await contract.claimConditions.set(tokenId, claimConditions);