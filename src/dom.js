window.dom = {
  find(selector, scope) {
    // array = [];
    // if (arguments.length === 1) {
    //   if (selector.indexOf(">") !== -1) {
    //     array = selector.split(">");
    //     let div1 = document.querySelectorAll(array[0]);
    //     let div2 = document.querySelectorAll(array[1]);
    //     if (div1.class === div2.class) {
    //       return div1;
    //     }
    //   }
    //
    //console.log((scope || document).querySelectorAll(selector));
    return (scope || document).querySelectorAll(selector);
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      //dom.style(div,'color','red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        //dom.style(div,'color')
        return node.style[name];
      } else if (name instanceof Object) {
        //dom.style(div,{'color','red'})
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};
