const {BlockChain,Block} =require('./blockchain')


let bloch=new BlockChain();

bloch.addBlock(new Block(1,"10/07/2020",{amount:4}));

bloch.addBlock(new Block(2,"21/11/2020",{amount:10}));

console.log(JSON.stringify(bloch,null,4));

 



