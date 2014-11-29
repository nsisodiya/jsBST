//JavaScript Binary Search Tree


function BSTNode(key){
  this._left = null;
  this._right = null;
  this._key = key;
}

BSTNode.prototype.isLeafNode = function () {
  return this._left === null && this._right=== null;
};

BSTNode.prototype.smallerThen = function (node) {
  return this.key() < node.key();
}

BSTNode.prototype.isEqual = function (node) {
  return this.key() === node.key();
}

BSTNode.prototype.setLeft = function (node) {
  this._left = node;
};
BSTNode.prototype.setRight = function (node) {
  this._right = node;
};
BSTNode.prototype.left = function () {
  return this._left;
};
BSTNode.prototype.right = function () {
  return this._right;
};
BSTNode.prototype.key = function () {
  return this._key;
};
BSTNode.prototype.hasLeft = function () {
  return this._left !== null;
};
BSTNode.prototype.hasRight = function () {
  return this._right !== null;
};

function BSTTree(){
  this.head = null;
}
BSTTree.prototype.isTreeEmpty = function () {
  return this.head === null
}

BSTTree.prototype.is = function (n1) {
  return {
    smallerThen: function (n2) {
      return n1.key() < n1.key();
    }
  }
}

BSTTree.prototype.traverseFromNode = function (node, visit) {
  //traverseFromNode
  if(node.hasLeft()){
   this.traverseFromNode(node.left(), visit);
  }
  visit(node);
  if(node.hasRight()){
    this.traverseFromNode(node.right(), visit);
  }
}
BSTTree.prototype.print = function () {
  this.traverseFromNode(this.head, function (node) {
    console.log("Node - " + node.key());
  });
};


BSTTree.prototype.insert = function (key) {
  var X = new BSTNode(key);

  if(this.isTreeEmpty()){
    this.head = X;
    return ;
  }
  var tmp = this.head;
  var exitloop = false;

  while(!exitloop){
    if(X.smallerThen(tmp)){
      if(tmp.hasLeft()){
        tmp = tmp.left();
      }else{
        tmp.setLeft(X);
        exitloop = true;
      }
    }else{
      if(tmp.hasRight()){
        tmp = tmp.right();
      }else{
        tmp.setRight(X);
        exitloop = true;
      }
    }
  }
}

BSTTree.prototype.find = function (key) {

  var X = new BSTNode(key);

  if(this.isTreeEmpty()){
    return ;
  }

  var tmp = this.head;
  var exitloop = false;

  while(!exitloop){
    if(tmp.isEqual(X)){
      return tmp;
    }
    if(X.smallerThen(tmp)){
      if(tmp.hasLeft()){
        tmp = tmp.left();
      }else{
        exitloop = true;
      }
    }else{
      if(tmp.hasRight()){
        tmp = tmp.right();
      }else{
        exitloop = true;
      }
    }
  }
  return null;

}
var BST = new BSTTree();

var a = [1,2,3,4,100, 20, 10, 2, 10, 3, 4];

a.map(function (v) {
  BST.insert(v);
});

BST.print();
