import Arweave from 'arweave';
import TestWeave from 'testweave-sdk';

async function main() {
const arweave = Arweave.init({
  host: 'localhost',
  port: 1984,
  protocol: 'http',
  timeout: 20000,
  logging: false,
}); 

const testWeave = await TestWeave.init(arweave);
console.log("done");
}


main().then(
  () => process.exit(),
  err => {
      console.error(err);
      process.exit(-1);
  },
);
