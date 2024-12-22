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

  find(data) {
    return this._findItem(this.tree, data);
  }

  _findItem(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      return node;
    }

    if (data < node.data) {
       return this._findItem(node.left, data);
    } else {
       return this._findItem(node.right, data);
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if (!this.tree) {
      return;
    }
    
    let node = this.tree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.tree) {
      return;
    }
    
    let node = this.tree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};