import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const delay = parseInt(event.target.elements.delay.value, 10);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        icon: null,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        icon: null,
      });
    });
  event.target.reset();
});

const styleElement = document.createElement('style');
const styles = `
.form {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
}
.form > label {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
}
input[name="delay"] {
    font-size: 16px;
    border: 1px solid #808080;
    border-radius: 4px;
    width: 360px;
    height: 40px;
    outline: none;
    padding: 5px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
input[name="delay"]:focus {
    border-color: #6c8cff; 
}
fieldset {
    width: 100%;
    height: 66px;
    border-radius: 4px;
    stroke-width: 1px;
    stroke: #808080;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 48px;
    margin: 0 0 16px 0;
    padding: 0;
}
legend {
    margin-left: 28px;
}
button {
    border-radius: 8px;
    border: none;
    padding: 8px 16px;
    width: 100%;
    height: 40px;
    background: #4e75ff;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #fff;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
button:hover {
    background: #6c8cff;
}`;
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);