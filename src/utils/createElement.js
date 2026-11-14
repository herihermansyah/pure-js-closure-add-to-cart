function createElement(tag) {
  const element = document.createElement(tag);
  function setText(text) {
    element.textContent = text;
  }
  function setClass(className) {
    element.classList.add(className);
  }

  function setAttribute(attribute, value) {
    element.setAttribute(attribute, value);
  }
  return { element, setText, setClass, setAttribute };
}

export default createElement;
