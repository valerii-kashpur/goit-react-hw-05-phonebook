import transition from "styled-transition-group";

export default transition.li.attrs({
  unmountOnExit: true,
  timeout: 500,
})`
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: auto;
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 7px -1px rgba(158, 158, 158, 0.71);
    letter-spacing: 0.6px;
    line-height: 26px;
    padding: 10px;
    margin-bottom: 10px;

    &:enter {
      opacity: 0.01;
    }
    &:enter-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }
    &:exit {
      opacity: 1;
    }
    &:exit-active {
      opacity: 0.01;
      transition: opacity 500ms ease-in;
    }
  `;
