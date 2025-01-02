function customRender(reactElemen, container) {}

const reactElement = {
  type: "a",
  props: {
    herf: "http://reactjs.org",
    target: "_blank",
  },
  Children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement.mainContainer);
