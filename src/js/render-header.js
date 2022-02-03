
const refs = {
    header: document.querySelector('header'),
    modal: document.querySelectorAll('.js-modal'),
// Autorithazation
    signInBtns: document.querySelectorAll('[data-name="signIn"]'),
    signUpBtns: document.querySelectorAll('[data-name="signUp"]'),
// Sign In form
    modalIn: document.querySelector('[data-modal="auth-in"]'),
    modalReg: document.querySelector('[data-modal="auth-reg"]'),
    modalInClose: document.querySelector('.modal-close'),
    modalRegClose: document.querySelector('[data-regFormClose]'),
// Navigation
    navList: document.querySelector('#js-nav'),
    navButtons: document.querySelectorAll('.js-nav-btn'),
    homeButton: document.querySelector('[data-name="home"]'),
    libraryButton: document.querySelector('[data-name="myLibrary"]'),
// Area for dynamicly changing content 
    contentBox: document.querySelector('.js-content-box'),
// Search form
    searchForm: document.querySelector('form[name="search-form"]'),
    formWrapper: document.querySelector('.search-form__wrapper'),
// Library buttons - Watched and Queue
    libraryButtons: document.querySelector('.js-library-btns'),

    body: document.body,

};

const headerContent = refs.contentBox.childNodes;

addEventListenerForArray(refs.signInBtns,'click', onSignInBtnClick);
addEventListenerForArray(refs.signUpBtns,'click', onSignUpBtnClick);
refs.modalInClose.addEventListener('click', onModalInCloseClick);
refs.modalRegClose.addEventListener('click', onModalRegCloseClick);



refs.homeButton.addEventListener('click', onHomeButtonClick);
refs.libraryButton.addEventListener('click', onLibraryButtonClick);

function onHomeButtonClick(event) {

    removeClassListFromAll(refs.navButtons, "current-page");
    addClassList(refs.homeButton, "current-page");
   
    addClassListForAll(headerContent, 'is-hidden');
    removeClassList(refs.formWrapper, 'is-hidden');

    removeClassList(refs.header, 'header-library');
    addClassList(refs.header, 'header-home');

};

function onLibraryButtonClick(event) {

    removeClassListFromAll(refs.navButtons, "current-page");
    addClassList(refs.libraryButton, "current-page");

    addClassListForAll(headerContent, 'is-hidden');
    removeClassList(refs.libraryButtons, 'is-hidden');

    removeClassList(refs.header, 'header-home');
    addClassList(refs.header, 'header-library');

};

function removeClassListFromAll(array, className) {
    for (let i = 0; i < array.length; i += 1) {
        array[i].classList.remove(className);
    }
};

function addClassListForAll(array, className) {
    for (let i = 0; i < array.length; i += 1) {

        if (array[i].nodeType !== 1) {
            
        } else {
            array[i].classList.add(className);
        }
    }
};

function addEventListenerForArray(array, event, func) {
    // array.map(element => element.addEventListener(event, func));
    for (let i = 0; i < array.length; i += 1) {
        array[i].addEventListener(event, func);
    };
}

function removeClassList(element, classList) {
    element.classList.remove(classList);
};

function addClassList(element, classList) {
    element.classList.add(classList);
};

function onSignInBtnClick(event) {
    event.preventDefault();

    refs.body.classList.add('no-scroll');

    addClassList(refs.modalReg, 'is-hidden');
    removeClassList(refs.modalIn, 'is-hidden');

    closeModal(refs.modalIn);
    document.addEventListener('keydown', onEscPress);
};

function onSignUpBtnClick(event) {
    event.preventDefault();

    refs.body.classList.add('no-scroll');

    addClassList(refs.modalIn, 'is-hidden');
    removeClassList(refs.modalReg, 'is-hidden');

    closeModal(refs.modalReg);
    document.addEventListener('keydown', onEscPress);
};

function onModalInCloseClick(event) {
    // addClassList(refs.modalIn, 'is-hidden');
    modalClose();

}

function onModalRegCloseClick() {
    // addClassList(refs.modalReg, 'is-hidden');
    modalClose();

};

function closeModal(elementName) {
    const element = elementName;
    
    elementName.addEventListener('click', onClickEvent);

    function onClickEvent(event) {
        console.log('document click')

        if (event.target === element) {
            console.log('close worked')
            addClassList(element, 'is-hidden');
            refs.body.classList.remove('no-scroll');
        }
    }
};



    function onEscPress(e) {
        console.log('key press');

        if (e.code === "Escape") {
            modalClose();
            document.removeEventListener('keydown', onEscPress);
            refs.body.classList.remove('no-scroll');
        }

    }


function modalClose() {
    const allModals = refs.modal;

    allModals.forEach(modal => {
        modal.classList.add('is-hidden');
        console.log('отработал')
    });
};