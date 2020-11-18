import transition from "styled-transition-group";

export default transition.div.attrs({
    unmountOnExit: true,
    mountOnEntry: true,
    timeout: 500,
  })`
    width: 300px;
    height: max-content;
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 7px -1px rgba(158, 158, 158, 0.71);
    padding: 20px;
    margin-bottom: 20px;
    &:enter {
      opacity: 0;
      transform: translateY(-100%);
    }
    &:enter-active {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    &:exit {
      opacity: 1;
      transform: translateY(0);
    }
    &:exit-active {
      opacity: 0;
      transform: translateY(-100%);
      transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }`