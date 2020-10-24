let htmlStr = `
/*画个大圈圈*/
  .yinyang {
    position: fixed;
    width: 200px;
    height: 200px;
    top: 50%;
    right: 25%;
    transform: translate(50%, -50%);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
/*画两个小圈圈*/
  .yinyang::after,
  .yinyang::before {
    content: "";
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  /*设置定位和渐变*/
  .yinyang::after {
    top: 0;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  .yinyang::before {
    bottom: 0;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 25%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 100%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;
let code = document.querySelector(".code");
let style = document.querySelector("style");
let copyArr = [...htmlStr];
let i = 0;
copyArr.forEach((value, index) => {
  copyArr[index] === ` ` ? (copyArr[index] = `&nbsp;`) : copyArr[index];
  copyArr[index] === `\n` ? (copyArr[index] = `<br/>`) : copyArr[index];
});

!(function step() {
  setTimeout(() => {
    code.innerHTML += copyArr[i];
    style.innerHTML += htmlStr[i];
    if (document.body.scrollWidth > 500) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      code.scrollTop = code.scrollHeight;
    }
    if (i < htmlStr.length - 1) {
      step();
      i++;
    }
  }, 50);
})();
