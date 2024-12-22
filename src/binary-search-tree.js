const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = this._addWithin(this.tree, data);
  }

  _addWithin(node, data) {
      if (!node) {
          return new Node(data);
      }

      if (node.data === data) {
          return node;
      }

      if (data < node.data) {
          node.left = this._addWithin(node.left, data);
      } else {
          node.right = this._addWithin(node.right, data);
      }

      return node;
  }

  has(data) {
    return searchItem(this.tree, data);

    function searchItem(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
        searchItem(node.left, data) :
        searchItem(node.right, data);    
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};