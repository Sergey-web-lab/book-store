//@ts-nocheck
const formDataChecker = () => {
  let formData = {};
  const form = document.querySelector('.OrderForm_orderFormInputBlock__uPEpf');
  const LS = localStorage;

  form?.addEventListener('input', (e) => {
    if (e.target.type === 'checkbox') {
      formData[e.target.name] = e.target.checked
    } else {
      formData[e.target.name] = e.target.value;
    }
    LS.setItem('formData', JSON.stringify(formData));
  })

  if (LS.getItem('formData')) {
    formData = JSON.parse(LS.getItem('formData'));
  }
  return formData;
}

export default formDataChecker;

