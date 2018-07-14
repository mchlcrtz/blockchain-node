const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timestap, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = '';
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}
