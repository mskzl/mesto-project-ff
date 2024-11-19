/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n\n//# sourceURL=webpack:///./src/cards.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   handleCardRemove: () => (/* binding */ handleCardRemove),\n/* harmony export */   handleLikeClick: () => (/* binding */ handleLikeClick)\n/* harmony export */ });\n// Создание карточки\nfunction createCard(data, handleLikeClick, handleCardRemove, handleImageClick) {\n  var template = document.querySelector('#card-template').content.querySelector('.card');\n  var cardElement = template.cloneNode(true);\n  var image = cardElement.querySelector('.card__image');\n  var title = cardElement.querySelector('.card__title');\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  var likeButton = cardElement.querySelector('.card__like-button');\n  image.src = data.link;\n  image.alt = data.name;\n  title.textContent = data.name;\n  deleteButton.addEventListener('click', function () {\n    return handleCardRemove(cardElement);\n  });\n  likeButton.addEventListener('click', handleLikeClick);\n  image.addEventListener('click', function () {\n    return handleImageClick(data);\n  });\n  return cardElement;\n}\n\n// Функция удаления карточки\nfunction handleCardRemove(cardElement) {\n  cardElement.remove();\n}\n\n// Функция лайка карточки\nfunction handleLikeClick(event) {\n  event.target.classList.toggle('card__like-button_is-active');\n}\n\n//# sourceURL=webpack:///./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   handleEscClose: () => (/* binding */ handleEscClose),\n/* harmony export */   handleOverlayClick: () => (/* binding */ handleOverlayClick),\n/* harmony export */   initializePopups: () => (/* binding */ initializePopups),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction initializePopups() {\n  var popups = document.querySelectorAll('.popup');\n  popups.forEach(function (popup) {\n    popup.classList.add('popup_is-animated');\n  });\n}\nfunction openModal(popup) {\n  popup.classList.add(\"popup_is-opened\");\n  popup.addEventListener(\"click\", handleOverlayClick);\n  document.addEventListener(\"keydown\", handleEscClose);\n}\nfunction closeModal(popup) {\n  popup.classList.remove(\"popup_is-opened\");\n  popup.removeEventListener(\"click\", handleOverlayClick);\n  document.removeEventListener(\"keydown\", handleEscClose);\n}\nfunction handleOverlayClick(event) {\n  if (event.target === event.currentTarget) {\n    closeModal(event.currentTarget);\n  }\n}\nfunction handleEscClose(event) {\n  if (event.key === \"Escape\") {\n    var activePopup = document.querySelector(\".popup_is-opened\");\n    if (activePopup) {\n      closeModal(activePopup);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.css */ \"./src/index.css\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards */ \"./src/cards.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n\n\n\n\n(0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.initializePopups)();\n\n// DOM элементы\nvar cardsContainer = document.querySelector('.places__list');\nvar profileEditBtn = document.querySelector(\".profile__edit-button\");\nvar addCardButton = document.querySelector(\".profile__add-button\");\nvar popupEditProfile = document.querySelector(\".popup_type_edit\");\nvar popupNewCard = document.querySelector(\".popup_type_new-card\");\nvar popupImage = document.querySelector('.popup_type_image');\nvar popupImageElement = popupImage.querySelector('.popup__image');\nvar caption = popupImage.querySelector('.popup__caption');\nvar profileTitle = document.querySelector(\".profile__title\");\nvar profileSubtitle = document.querySelector(\".profile__description\");\nvar formEditProfile = document.forms[\"edit-profile\"];\nvar inputName = formEditProfile.name;\nvar inputJob = formEditProfile.description;\nvar formAddCard = document.forms[\"new-place\"];\nvar inputCardTitle = formAddCard[\"place-name\"];\nvar inputCardLink = formAddCard.link;\n\n// Функция открытия попапа изображения\nfunction handleImageClick(cardData) {\n  popupImageElement.src = cardData.link;\n  popupImageElement.alt = cardData.name;\n  caption.textContent = cardData.name;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupImage);\n}\n\n// Открытие попапа редактирования профиля\nprofileEditBtn.addEventListener(\"click\", function () {\n  inputName.value = profileTitle.textContent;\n  inputJob.value = profileSubtitle.textContent;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupEditProfile);\n});\n\n// Сохранение изменений профиля\nformEditProfile.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  profileTitle.textContent = inputName.value;\n  profileSubtitle.textContent = inputJob.value;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupEditProfile);\n});\n\n// Открытие попапа добавления карточки\naddCardButton.addEventListener(\"click\", function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupNewCard);\n});\n\n// Добавление новой карточки\nformAddCard.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var newCardData = {\n    name: inputCardTitle.value,\n    link: inputCardLink.value\n  };\n  var newCardElement = (0,_components_card__WEBPACK_IMPORTED_MODULE_3__.createCard)(newCardData, _components_card__WEBPACK_IMPORTED_MODULE_3__.handleLikeClick, _components_card__WEBPACK_IMPORTED_MODULE_3__.handleCardRemove, handleImageClick);\n  cardsContainer.prepend(newCardElement);\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupNewCard);\n  formAddCard.reset();\n});\n\n// Отображение начальных карточек\n_cards__WEBPACK_IMPORTED_MODULE_2__.initialCards.forEach(function (cardData) {\n  var cardElement = (0,_components_card__WEBPACK_IMPORTED_MODULE_3__.createCard)(cardData, _components_card__WEBPACK_IMPORTED_MODULE_3__.handleLikeClick, _components_card__WEBPACK_IMPORTED_MODULE_3__.handleCardRemove, handleImageClick);\n  cardsContainer.append(cardElement);\n});\n\n// Закрытие попапов по нажатию кнопки закрытия\nvar closeButtons = document.querySelectorAll('.popup__close');\ncloseButtons.forEach(function (button) {\n  button.addEventListener('click', function (event) {\n    var currentPopup = event.target.closest('.popup');\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(currentPopup);\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;