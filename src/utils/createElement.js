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

  function setEvent(attribute, callback) {
    element.addEventListener(attribute, callback);
  }
  return { element, setText, setClass, setAttribute, setEvent };
}

export default createElement;
