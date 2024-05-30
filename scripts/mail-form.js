// initContactForm();

// function initContactForm () {
//     var mailDiv = qs('.form-input.mail');
//     var phoneDiv = qs('.form-input.phone');
//     var customPhonePlaceholder = qs('.form-input__custom-placeholder');

//     var mailInput = qs('.form-input.mail input');
//     var phoneInput = qs('#phone');
//     const submitBtn = qs('.contacts__main__right__submit-btn');

//     var invalidPhone = true;
//     var invalidMail = true;

//     fieldsInitialization();

//     function fieldsInitialization () {
//         initMail();
//         initPhone();
//         initFormCheckbox();

//         function initMail () {
//             listenTo(mailInput, 'input', () => {
//                 mailDiv.classList.remove('error');
//             })

//             listenTo(mailInput, 'focusout', () => {
//                 let check = checkMail();

//                 if(check) {
//                     invalidMail = false;
//                     qs('.mail img').style.display = 'block';
//                     mailInput.style.border = '2px solid #000';
//                     mailInput.style.borderRadius = '32px';
//                     mailInput.style.paddingLeft = '16px'; 
//                 } else {
//                     invalidMail = true;
//                     mailInput.style.border = '2px solid #F70101';
//                     mailDiv.classList.add('error');
//                     qs('.mail img').style.display = 'none';
//                 }
//             })
//         }

//         function initPhone () {
//             listenTo (phoneInput, 'focus', () => {
//                 customPhonePlaceholder.style.left = '16px';
//             })

//             listenTo (phoneInput, 'input', () => {
//                 customPhonePlaceholder.style.display = 
//                 phoneInput.value.length > 0 ? 
//                 'none' : 'block';
//                 phoneDiv.classList.remove('error');
//             })
        
//             listenTo (phoneInput, 'focusout', () => {
//                 let check = checkPhone();
//                 if (check) {
//                     invalidPhone = false;
//                     customPhonePlaceholder.style.left = '0';
//                     qs('.phone img').style.display = 'block';
//                     phoneInput.style.border = '2px solid #000';
//                     phoneInput.style.borderRadius = '32px';
//                     phoneInput.style.paddingLeft = '16px'; 
//                 } else {
//                     invalidPhone = true;
//                     phoneInput.style.border = '2px solid #F70101';
//                     phoneDiv.classList.add('error');
//                     qs('.phone img').style.display = 'none';
//                 }
//             })
//         }
    
//         function initFormCheckbox () {
//             const formCheckbox = qs('.form-input_checkbox');
//             const formCheckboxItem = qs('.form-input_checkbox__input-container img');
//             const formCheckboxInput = qs('.form-input_checkbox__input-container input');
//             let isChecked = false;
        
//             listenTo(formCheckbox, 'click', toggleCheckAttribute);
        
//             function toggleCheckAttribute () {
//                 if (isChecked === false) {
//                     formCheckboxInput.setAttribute('checked', true);
//                     toggle(formCheckboxItem, 'checked')
//                     isChecked = !isChecked
//                 } else {
//                     formCheckboxInput.removeAttribute('checked', false);
//                     toggle(formCheckboxItem, 'checked')
//                     isChecked = !isChecked;
//                 }
//             }
//         }

//         function checkPhone () {
//             let regex = /^\+?(\d{2,3})[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2,3})[- ]?(\d{2})/g;
//             let check = regex.test(phoneInput.value);
    
//             if (check) return true;
//             else {
//                 invalidPhone = true;
//                 return false;
//             }
//         }

//         function checkMail () {
//             let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//             let check = regex.test(mailInput.value);
    
//             if (check) return true;
//             else {
//                 invalidMail = true;
//                 return false;
//             }
//         }
//     }

//     listenTo(submitBtn, 'click', (e)=> {
//         if (invalidPhone || invalidMail) {
//             e.preventDefault(); 
//         }
//         else {
//             console.log('s');
//             mailInput.value = '';
//             phoneInput.value = '';
//         }
//     })
// }

// function formValidation (e) {
//     //checkPhone() and checkMail() return true/false value
//     let phone = checkPhone();
//     let mail = checkMail();
//     if (!phone || !mail) e.preventDefault(); 
//     else {
//         mailInput.value = '';
//         phoneInput.value = '';
//     }

//     function checkMail () {
//         let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//         let check = regex.test(mailInput.value);

//         if (check) return true;
//         else {
//             mailDiv.classList.add('error');
//             invalidMail = true;
//             return false;
//         }
//     }
//     function checkPhone () {
//         let regex = /^\+?(\d{2,3})[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2,3})[- ]?(\d{2})/g;
//         let check = regex.test(phoneInput.value);

//         if (check) return true;
//         else {
//             phoneDiv.classList.add('error');
//             invalidPhone = true;
//             customPhonePlaceholder.style.left = '16px';
//             return false;
//         }
//     }
// }