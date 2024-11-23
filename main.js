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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewCardToServer: () => (/* binding */ addNewCardToServer),\n/* harmony export */   deleteCardFromServer: () => (/* binding */ deleteCardFromServer),\n/* harmony export */   fetchCards: () => (/* binding */ fetchCards),\n/* harmony export */   fetchUserInfo: () => (/* binding */ fetchUserInfo),\n/* harmony export */   likeCardOnServer: () => (/* binding */ likeCardOnServer),\n/* harmony export */   unlikeCardOnServer: () => (/* binding */ unlikeCardOnServer),\n/* harmony export */   updateAvatarOnServer: () => (/* binding */ updateAvatarOnServer),\n/* harmony export */   updateUserProfile: () => (/* binding */ updateUserProfile)\n/* harmony export */ });\nvar API_BASE_URL = \"https://nomoreparties.co/wff-cohort-26\";\nvar HEADERS = {\n  authorization: \"e50413bf-7a82-4c69-b949-39ad8d569f5c\",\n  \"Content-Type\": \"application/json\"\n};\nfunction handleResponse(res) {\n  if (res.ok) {\n    return res.json();\n  }\n  return Promise.reject(\"Error: \".concat(res.status));\n}\nfunction fetchUserInfo() {\n  return fetch(\"\".concat(API_BASE_URL, \"/users/me\"), {\n    headers: HEADERS\n  }).then(handleResponse);\n}\nfunction fetchCards() {\n  return fetch(\"\".concat(API_BASE_URL, \"/cards\"), {\n    headers: HEADERS\n  }).then(handleResponse);\n}\nfunction updateUserProfile(name, about) {\n  return fetch(\"\".concat(API_BASE_URL, \"/users/me\"), {\n    method: \"PATCH\",\n    headers: HEADERS,\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(handleResponse);\n}\nfunction addNewCardToServer(name, link) {\n  return fetch(\"\".concat(API_BASE_URL, \"/cards\"), {\n    method: \"POST\",\n    headers: HEADERS,\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(handleResponse);\n}\nfunction deleteCardFromServer(cardId) {\n  return fetch(\"\".concat(API_BASE_URL, \"/cards/\").concat(cardId), {\n    method: \"DELETE\",\n    headers: HEADERS\n  }).then(handleResponse);\n}\nfunction likeCardOnServer(cardId) {\n  return fetch(\"\".concat(API_BASE_URL, \"/cards/\").concat(cardId, \"/likes\"), {\n    method: \"PUT\",\n    headers: HEADERS\n  }).then(handleResponse);\n}\nfunction unlikeCardOnServer(cardId) {\n  return fetch(\"\".concat(API_BASE_URL, \"/cards/\").concat(cardId, \"/likes\"), {\n    method: \"DELETE\",\n    headers: HEADERS\n  }).then(handleResponse);\n}\nfunction updateAvatarOnServer(avatar) {\n  return fetch(\"\".concat(API_BASE_URL, \"/users/me/avatar\"), {\n    method: \"PATCH\",\n    headers: HEADERS,\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  }).then(handleResponse);\n}\n\n//# sourceURL=webpack:///./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\nfunction createCard(cardData, template, likeCard, openPopupImage, deleteCard, userId) {\n  var cardElement = template.querySelector(\".place\").cloneNode(true);\n  var cardImage = cardElement.querySelector(\".place__image\");\n  var cardTitle = cardElement.querySelector(\".place__title\");\n  var likeButton = cardElement.querySelector(\".place__like-button\");\n  var deleteButton = cardElement.querySelector(\".place__delete-button\");\n  var likeCount = cardElement.querySelector(\".place__like-count\");\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardTitle.textContent = cardData.name;\n  likeCount.textContent = cardData.likes.length;\n  if (cardData.likes.some(function (like) {\n    return like._id === userId;\n  })) {\n    likeButton.classList.add(\"place__like-button_active\");\n  }\n  if (cardData.owner._id !== userId) {\n    deleteButton.style.display = \"none\";\n  }\n  cardImage.addEventListener(\"click\", function () {\n    return openPopupImage(cardData);\n  });\n  likeButton.addEventListener(\"click\", function () {\n    return likeCard(cardData._id, likeButton, likeCount);\n  });\n  deleteButton.addEventListener(\"click\", function () {\n    return deleteCard(cardData._id, cardElement);\n  });\n  return cardElement;\n}\nfunction likeCard(cardId, likeButton, likeCount) {\n  var isLiked = likeButton.classList.contains(\"place__like-button_active\");\n  var likeAction = isLiked ? unlikeCardOnServer : likeCardOnServer;\n  likeAction(cardId).then(function (updatedCard) {\n    likeCount.textContent = updatedCard.likes.length;\n    likeButton.classList.toggle(\"place__like-button_active\", !isLiked);\n  }).catch(function (err) {\n    return console.error(\"Error: \".concat(err));\n  });\n}\nfunction deleteCard(cardId, cardElement) {\n  if (confirm(\"Вы действительно хотите удалить эту карточку?\")) {\n    deleteCardFromServer(cardId).then(function () {\n      return cardElement.remove();\n    }).catch(function (err) {\n      return console.error(\"Error: \".concat(err));\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(popup) {\n  popup.classList.add(\"popup_opened\");\n  document.addEventListener(\"keydown\", handleEscClose);\n}\nfunction closeModal(popup) {\n  popup.classList.remove(\"popup_opened\");\n  document.removeEventListener(\"keydown\", handleEscClose);\n}\nfunction handleEscClose(event) {\n  if (event.key === \"Escape\") {\n    var openPopup = document.querySelector(\".popup_opened\");\n    if (openPopup) {\n      closeModal(openPopup);\n    }\n  }\n}\ndocument.addEventListener(\"mousedown\", function (event) {\n  var popup = event.target.closest(\".popup\");\n  if (popup && event.target === popup) {\n    closeModal(popup);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nfunction enableValidation(config) {\n  var forms = document.querySelectorAll(config.formSelector);\n  forms.forEach(function (form) {\n    return setUpValidation(form, config);\n  });\n}\nfunction clearValidation(form, config) {\n  var inputs = form.querySelectorAll(config.inputSelector);\n  inputs.forEach(function (input) {\n    return hideInputError(form, input, config);\n  });\n  toggleButtonState(form, config);\n}\nfunction setUpValidation(form, config) {\n  var inputs = Array.from(form.querySelectorAll(config.inputSelector));\n  var submitButton = form.querySelector(config.submitButtonSelector);\n  inputs.forEach(function (input) {\n    input.addEventListener(\"input\", function () {\n      validateInput(form, input, config);\n      toggleButtonState(form, config);\n    });\n  });\n  toggleButtonState(form, config);\n}\nfunction validateInput(form, input, config) {\n  if (!input.validity.valid) {\n    showInputError(form, input, input.validationMessage, config);\n  } else {\n    hideInputError(form, input, config);\n  }\n}\nfunction showInputError(form, input, errorMessage, config) {\n  var errorElement = form.querySelector(\"#\".concat(input.id, \"-error\"));\n  input.classList.add(config.inputErrorClass);\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(config.errorClass);\n}\nfunction hideInputError(form, input, config) {\n  var errorElement = form.querySelector(\".\".concat(input.id, \"-error\"));\n  input.classList.remove(config.inputErrorClass);\n  errorElement.textContent = \"\";\n  errorElement.classList.remove(config.errorClass);\n}\nfunction toggleButtonState(form, config) {\n  var submitButton = form.querySelector(config.submitButtonSelector);\n  var isValid = form.checkValidity();\n  submitButton.classList.toggle(config.inactiveButtonClass, !isValid);\n  submitButton.disabled = !isValid;\n}\n\n//# sourceURL=webpack:///./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.css */ \"./src/index.css\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validation */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n\n\n\n// DOM-элементы\nvar template = document.querySelector(\"#card-template\").content;\nvar cardList = document.querySelector(\".places__list\");\nvar popups = document.querySelectorAll(\".popup\");\nvar closePopupButtons = document.querySelectorAll(\".popup__close\");\nvar profileEditButton = document.querySelector(\".profile__edit-button\");\nvar addCardButton = document.querySelector(\".profile__add-button\");\nvar avatarEditButton = document.querySelector(\".profile__image\");\nvar popupEditProfile = document.querySelector(\".popup_type_edit\");\nvar popupAddCard = document.querySelector(\".popup_type_new-card\");\nvar popupImagePreview = document.querySelector(\".popup_type_image\");\nvar popupEditAvatar = document.querySelector(\".popup_type_new-avatar\");\nvar formEditProfile = document.forms[\"edit-profile\"];\nvar profileNameInput = formEditProfile.name;\nvar profileDescriptionInput = formEditProfile.description;\nvar formAddCard = document.forms[\"new-place\"];\nvar cardNameInput = formAddCard[\"place-name\"];\nvar cardLinkInput = formAddCard.link;\nvar formEditAvatar = document.forms[\"new-avatar_img\"];\nvar avatarLinkInput = formEditAvatar.link;\nvar profileName = document.querySelector(\".profile__title\");\nvar profileDescription = document.querySelector(\".profile__description\");\nvar avatarImage = document.querySelector(\".profile__image\");\n\n// Конфигурация для валидации\nvar validationConfig = {\n  formSelector: \".popup__form\",\n  inputSelector: \".popup__input\",\n  submitButtonSelector: \".popup__button\",\n  inactiveButtonClass: \"popup__button_disabled\",\n  inputErrorClass: \"popup__input_type_error\",\n  errorClass: \"popup__error_visible\"\n};\n\n// Добавление анимации к модальным окнам\npopups.forEach(function (popup) {\n  return popup.classList.add(\"popup_is-animated\");\n});\n\n// Открытие формы редактирования профиля\nprofileEditButton.addEventListener(\"click\", function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupEditProfile);\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(formEditProfile, validationConfig);\n  fillProfileForm();\n});\n\n// Открытие формы добавления новой карточки\naddCardButton.addEventListener(\"click\", function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupAddCard);\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(formAddCard, validationConfig);\n});\n\n// Открытие формы редактирования аватара\navatarEditButton.addEventListener(\"click\", function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupEditAvatar);\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(formEditAvatar, validationConfig);\n});\n\n// Закрытие модальных окон\nclosePopupButtons.forEach(function (button) {\n  button.addEventListener(\"click\", function () {\n    var popup = button.closest(\".popup\");\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popup);\n  });\n});\n\n// Отправка формы редактирования профиля\nformEditProfile.addEventListener(\"submit\", handleProfileFormSubmit);\n\n// Отправка формы добавления карточки\nformAddCard.addEventListener(\"submit\", handleAddCardSubmit);\n\n// Отправка формы редактирования аватара\nformEditAvatar.addEventListener(\"submit\", handleEditAvatarSubmit);\n\n// Функции\nfunction fillProfileForm() {\n  profileNameInput.value = profileName.textContent;\n  profileDescriptionInput.value = profileDescription.textContent;\n}\nfunction handleProfileFormSubmit(event) {\n  event.preventDefault();\n  renderLoading(true, formEditProfile);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.updateUserProfile)(profileNameInput.value, profileDescriptionInput.value).then(function (userData) {\n    profileName.textContent = userData.name;\n    profileDescription.textContent = userData.about;\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupEditProfile);\n  }).catch(handleError).finally(function () {\n    return renderLoading(false, formEditProfile);\n  });\n}\nfunction handleAddCardSubmit(event) {\n  event.preventDefault();\n  renderLoading(true, formAddCard);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.addNewCardToServer)(cardNameInput.value, cardLinkInput.value).then(function (cardData) {\n    var newCard = (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(cardData, template, _components_card__WEBPACK_IMPORTED_MODULE_2__.likeCard, openPopupImage, _components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard, cardData.owner._id);\n    cardList.prepend(newCard);\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupAddCard);\n    formAddCard.reset();\n  }).catch(handleError).finally(function () {\n    return renderLoading(false, formAddCard);\n  });\n}\nfunction handleEditAvatarSubmit(event) {\n  event.preventDefault();\n  renderLoading(true, formEditAvatar);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.updateAvatarOnServer)(avatarLinkInput.value).then(function (data) {\n    avatarImage.style.backgroundImage = \"url(\".concat(data.avatar, \")\");\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupEditAvatar);\n    formEditAvatar.reset();\n  }).catch(handleError).finally(function () {\n    return renderLoading(false, formEditAvatar);\n  });\n}\nfunction openPopupImage(cardInfo) {\n  var imageElement = popupImagePreview.querySelector(\".popup__image\");\n  var captionElement = popupImagePreview.querySelector(\".popup__caption\");\n  imageElement.src = cardInfo.link;\n  imageElement.alt = cardInfo.name;\n  captionElement.textContent = cardInfo.name;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupImagePreview);\n}\nfunction renderLoading(isLoading, form) {\n  var button = form.querySelector(validationConfig.submitButtonSelector);\n  button.textContent = isLoading ? \"Сохранение...\" : \"Сохранить\";\n}\nfunction handleError(error) {\n  console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(error));\n}\n\n// Включение валидации\n(0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.enableValidation)(validationConfig);\n\n// Загрузка данных с сервера\nPromise.all([(0,_components_api__WEBPACK_IMPORTED_MODULE_4__.fetchUserInfo)(), (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.fetchCards)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    user = _ref2[0],\n    cards = _ref2[1];\n  profileName.textContent = user.name;\n  profileDescription.textContent = user.about;\n  avatarImage.style.backgroundImage = \"url(\".concat(user.avatar, \")\");\n  cards.forEach(function (card) {\n    var cardElement = (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(card, template, _components_card__WEBPACK_IMPORTED_MODULE_2__.likeCard, openPopupImage, _components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard, user._id);\n    cardList.append(cardElement);\n  });\n}).catch(handleError);\n\n//# sourceURL=webpack:///./src/index.js?");

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