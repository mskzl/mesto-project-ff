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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeUserAvatar: () => (/* binding */ changeUserAvatar),\n/* harmony export */   createNewCard: () => (/* binding */ createNewCard),\n/* harmony export */   getCardList: () => (/* binding */ getCardList),\n/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),\n/* harmony export */   modifyUserDetails: () => (/* binding */ modifyUserDetails),\n/* harmony export */   removeCardById: () => (/* binding */ removeCardById),\n/* harmony export */   removeCardLike: () => (/* binding */ removeCardLike),\n/* harmony export */   setCardLike: () => (/* binding */ setCardLike)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar config = {\n  baseUrl: \"https://nomoreparties.co/v1/wff-cohort-26/\",\n  headers: {\n    authorization: \"e50413bf-7a82-4c69-b949-39ad8d569f5c\",\n    \"Content-Type\": \"application/json\"\n  }\n};\nvar parseResponse = function parseResponse(response) {\n  return response.ok ? response.json() : Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(response.status));\n};\nvar fetchWithConfig = function fetchWithConfig(url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return fetch(url, _objectSpread(_objectSpread({}, options), {}, {\n    headers: config.headers\n  })).then(parseResponse);\n};\nvar getCurrentUser = function getCurrentUser() {\n  return fetchWithConfig(\"\".concat(config.baseUrl, \"users/me\"));\n};\nvar getCardList = function getCardList() {\n  return fetchWithConfig(\"\".concat(config.baseUrl, \"cards\"));\n};\nvar modifyUserDetails = function modifyUserDetails(about, name) {\n  return fetchWithConfig(\"\".concat(config.baseUrl, \"users/me\"), {\n    method: \"PATCH\",\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  });\n};\nvar createNewCard = function createNewCard(nameCard, linkCard) {\n  return fetchWithConfig(\"\".concat(config.baseUrl, \"cards\"), {\n    method: \"POST\",\n    body: JSON.stringify({\n      name: nameCard,\n      link: linkCard\n    })\n  });\n};\nvar removeCardById = function removeCardById(id) {\n  return fetchWithConfig(\"\".concat(config.baseUrl, \"cards/\").concat(id), {\n    method: \"DELETE\"\n  });\n};\nvar setCardLike = function setCardLike(id) {\n  return fetchWithConfig(\"\".concat(config.baseUrl, \"cards/\").concat(id, \"/likes\"), {\n    method: \"PUT\"\n  });\n};\nvar removeCardLike = function removeCardLike(id) {\n  return fetchWithConfig(\"\".concat(config.baseUrl, \"cards/\").concat(id, \"/likes\"), {\n    method: \"DELETE\"\n  });\n};\nvar changeUserAvatar = function changeUserAvatar(avatar) {\n  return fetchWithConfig(\"\".concat(config.baseUrl, \"users/me/avatar\"), {\n    method: \"PATCH\",\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  });\n};\n\n//# sourceURL=webpack:///./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   handleLikeClick: () => (/* binding */ handleLikeClick)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n\n\n\n// Обработчик лайка\nfunction handleLikeClick(countLike, likeButton, card) {\n  var likeStatus = likeButton.classList.contains(\"card__like-button_is-active\");\n  var toggleLikeAction = likeStatus ? _api__WEBPACK_IMPORTED_MODULE_0__.removeCardLike : _api__WEBPACK_IMPORTED_MODULE_0__.setCardLike;\n  toggleLikeAction(card._id).then(function (res) {\n    likeButton.classList.toggle(\"card__like-button_is-active\");\n    countLike.textContent = res.likes.length;\n  }).catch(function (err) {\n    return console.error(\"Произошла ошибка при изменении лайка\", err);\n  });\n}\n\n// Модальное окно для удаления\nvar deleteCardPopup = document.querySelector(\".popup_type_delete-card\");\nvar deleteCardForms = document.forms[\"delete-card\"];\nvar cardDeleteModal, cardDeleteId;\nfunction openDeleteModal(card, cardId) {\n  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(deleteCardPopup);\n  cardDeleteModal = card;\n  cardDeleteId = cardId;\n}\ndeleteCardForms.addEventListener(\"submit\", function () {\n  if (cardDeleteModal && cardDeleteId) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.removeCardById)(cardDeleteId).then(function () {\n      cardDeleteModal.remove();\n    }).catch(function (err) {\n      return console.error(\"Ошибка при удалении\", err);\n    });\n  }\n  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(deleteCardPopup);\n});\n\n// Создание карточки\nfunction createCard(data, template, handleLikeClick, handleImageClick, userId) {\n  var card = template.querySelector(\".card\").cloneNode(true);\n  var image = card.querySelector(\".card__image\");\n  var title = card.querySelector(\".card__title\");\n  var deleteButton = card.querySelector(\".card__delete-button\");\n  var likeButton = card.querySelector(\".card__like-button\");\n  var likeCounter = card.querySelector(\".card__likes-counter\");\n  image.src = data.link;\n  image.alt = data.name;\n  title.textContent = data.name;\n  likeCounter.textContent = data.likes.length;\n  var cardId = data._id;\n  var isOwnedByUser = data.owner._id === userId;\n  if (isOwnedByUser) {\n    deleteButton.addEventListener(\"click\", function () {\n      return openDeleteModal(card, cardId);\n    });\n  } else {\n    deleteButton.style.display = \"none\";\n  }\n  var likeStatus = data.likes.some(function (like) {\n    return like._id === userId;\n  });\n  if (likeStatus) {\n    likeButton.classList.add(\"card__like-button_is-active\");\n  }\n  likeButton.addEventListener(\"click\", function () {\n    return handleLikeClick(likeCounter, likeButton, data);\n  });\n  image.addEventListener(\"click\", function () {\n    return handleImageClick(data);\n  });\n  return card;\n}\n\n//# sourceURL=webpack:///./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   handleEscClose: () => (/* binding */ handleEscClose),\n/* harmony export */   handleOverlayClick: () => (/* binding */ handleOverlayClick),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(popup) {\n  popup.classList.add(\"popup_is-opened\");\n  popup.addEventListener(\"click\", handleOverlayClick);\n  document.addEventListener(\"keydown\", handleEscClose);\n}\nfunction closeModal(popup) {\n  popup.classList.remove(\"popup_is-opened\");\n  popup.removeEventListener(\"click\", handleOverlayClick);\n  document.removeEventListener(\"keydown\", handleEscClose);\n}\nfunction handleEscClose(event) {\n  if (event.key === \"Escape\") {\n    var popup = document.querySelector(\".popup_is-opened\");\n    if (popup) {\n      closeModal(popup);\n      console.log(\"Escape\");\n    }\n  }\n}\nfunction handleOverlayClick(event) {\n  if (event.target === event.currentTarget) {\n    closeModal(event.currentTarget);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nfunction clearValidation(formElement, config) {\n  var inputs = Array.from(formElement.querySelectorAll(config.inputSelector));\n  var buttonElement = formElement.querySelector(config.submitButtonSelector);\n  formElement.reset();\n  inputs.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement, config);\n  });\n  toggleButtonState(inputs, buttonElement, config);\n}\nvar enableValidation = function enableValidation(config) {\n  var formList = Array.from(document.querySelectorAll(config.formSelector));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n    });\n    setEventListeners(formElement, config);\n  });\n};\nvar setEventListeners = function setEventListeners(formElement, config) {\n  var inputs = Array.from(formElement.querySelectorAll(config.inputSelector));\n  var buttonElement = formElement.querySelector(config.submitButtonSelector);\n  toggleButtonState(inputs, buttonElement, config);\n  inputs.forEach(function (inputElement) {\n    inputElement.addEventListener(\"input\", function () {\n      validateInput(formElement, inputElement, config);\n      toggleButtonState(inputs, buttonElement, config);\n    });\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputs, buttonElement, config) {\n  if (hasInvalidInput(inputs)) {\n    buttonElement.classList.add(config.inactiveButtonClass);\n    buttonElement.disabled = true;\n  } else {\n    buttonElement.classList.remove(config.inactiveButtonClass);\n    buttonElement.disabled = false;\n  }\n};\nvar hasInvalidInput = function hasInvalidInput(inputs) {\n  return inputs.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\nfunction validateInput(formElement, inputElement, config) {\n  if (inputElement.validity.valid) {\n    hideInputError(formElement, inputElement, config);\n  } else {\n    if (inputElement.validity.patternMismatch) {\n      inputElement.setCustomValidity(inputElement.dataset.errorMessage);\n    } else {\n      inputElement.setCustomValidity(\"\");\n    }\n    showInputError(formElement, inputElement, inputElement.validationMessage, config);\n  }\n}\nfunction showInputError(formElement, inputElement, errorMessage, config) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  errorElement.textContent = errorMessage;\n  inputElement.classList.add(config.inputErrorClass);\n  errorElement.classList.add(config.errorClass);\n}\nfunction hideInputError(formElement, inputElement, config) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(config.inputErrorClass);\n  errorElement.classList.remove(config.errorClass);\n  errorElement.textContent = \"\";\n}\n\n//# sourceURL=webpack:///./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.css */ \"./src/index.css\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validation */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n// Импорты\n\n\n\n\n\n\n// Константы\nvar cardsContainer = document.querySelector(\".places__list\");\nvar profileEditBtn = document.querySelector(\".profile__edit-button\");\nvar addCardButton = document.querySelector(\".profile__add-button\");\nvar popupEditProfile = document.querySelector(\".popup_type_edit\");\nvar popupNewCard = document.querySelector(\".popup_type_new-card\");\nvar popupImage = document.querySelector(\".popup_type_image\");\nvar profileTitle = document.querySelector(\".profile__title\");\nvar profileDescription = document.querySelector(\".profile__description\");\nvar formEditProfile = document.forms[\"edit-profile\"];\nvar popup = document.querySelectorAll(\".popup\");\nvar closeButtons = document.querySelectorAll(\".popup__close\");\nvar formAddCard = document.forms[\"new-place\"];\nvar inputCardTitle = formAddCard[\"place-name\"];\nvar inputCardLink = formAddCard.link;\nvar inputName = formEditProfile.name;\nvar inputJob = formEditProfile.description;\nvar avatarImg = document.querySelector(\".profile__image\");\nvar avatarPopup = document.querySelector(\".popup_type_new-avatar\");\nvar template = document.querySelector(\"#card-template\").content;\nvar avatarInput = document.forms[\"new-avatar_img\"];\nvar avatarUrlInput = avatarInput.link;\nvar avatarImgBlock = document.querySelector(\".profile__image\");\nvar validationConfig = {\n  formSelector: \".popup__form\",\n  inputSelector: \".popup__input\",\n  submitButtonSelector: \".popup__button\",\n  inactiveButtonClass: \"popup__button__disabled\",\n  inputErrorClass: \"popup__input_type_error\",\n  errorClass: \"popup__error_visible\"\n};\n\n// Слушатели событий\nprofileEditBtn.addEventListener(\"click\", function () {\n  return handleEditProfileOpen();\n});\naddCardButton.addEventListener(\"click\", function () {\n  return handleNewCardOpen();\n});\navatarImg.addEventListener(\"click\", function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(avatarPopup);\n});\nformEditProfile.addEventListener(\"submit\", profileFormHandler);\nformAddCard.addEventListener(\"submit\", addCard);\navatarInput.addEventListener(\"submit\", editAvatarInputSubmit);\ncloseButtons.forEach(function (button) {\n  return button.addEventListener(\"click\", function () {\n    return (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(button.closest(\".popup\"));\n  });\n});\npopup.forEach(function (popup) {\n  return popup.classList.add(\"popup_is-animated\");\n});\n\n// Функции\nfunction handleEditProfileOpen() {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupEditProfile);\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(formEditProfile, validationConfig);\n  fillProfileForm(profileTitle, profileDescription);\n}\nfunction handleNewCardOpen() {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupNewCard);\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(formAddCard, validationConfig);\n}\nfunction fillProfileForm(title, description) {\n  inputName.value = title.textContent;\n  inputJob.value = description.textContent;\n}\nfunction setButtonLoadingState(isLoading, form) {\n  var saveButton = form.querySelector(\".popup__button__save\");\n  saveButton.textContent = isLoading ? \"Сохранение...\" : \"Сохранить\";\n}\nfunction profileFormHandler(event) {\n  event.preventDefault();\n  setButtonLoadingState(true, formEditProfile);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.modifyUserDetails)(inputJob.value, inputName.value).then(function (res) {\n    profileTitle.textContent = res.name;\n    profileDescription.textContent = res.about;\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupEditProfile);\n  }).catch(function (err) {\n    return console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err));\n  }).finally(function () {\n    return setButtonLoadingState(false, formEditProfile);\n  });\n}\nfunction addCard(event) {\n  event.preventDefault();\n  setButtonLoadingState(true, formAddCard);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.createNewCard)(inputCardTitle.value, inputCardLink.value).then(function (card) {\n    var newCard = (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(card, template, _components_card__WEBPACK_IMPORTED_MODULE_2__.handleLikeClick, handleImageClick, card.owner._id);\n    cardsContainer.prepend(newCard);\n    formAddCard.reset();\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupNewCard);\n  }).catch(function (err) {\n    return console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err));\n  }).finally(function () {\n    return setButtonLoadingState(false, formAddCard);\n  });\n}\nfunction editAvatarInputSubmit(event) {\n  event.preventDefault();\n  setButtonLoadingState(true, avatarInput);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.changeUserAvatar)(avatarUrlInput.value).then(function (data) {\n    avatarImgBlock.style.backgroundImage = \"url(\".concat(data.avatar, \")\");\n    avatarInput.reset();\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(avatarPopup);\n  }).catch(function (err) {\n    return console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err));\n  }).finally(function () {\n    return setButtonLoadingState(false, avatarInput);\n  });\n}\nfunction handleImageClick(cardInfo) {\n  var popupImageElement = popupImage.querySelector(\".popup__image\");\n  var caption = popupImage.querySelector(\".popup__caption\");\n  popupImageElement.alt = cardInfo.name;\n  popupImageElement.src = cardInfo.link;\n  caption.textContent = cardInfo.name;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupImage);\n}\nfunction drawCards(cards, userId) {\n  cards.forEach(function (item) {\n    var card = (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(item, template, _components_card__WEBPACK_IMPORTED_MODULE_2__.handleLikeClick, handleImageClick, userId);\n    cardsContainer.append(card);\n  });\n}\n(0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.enableValidation)(validationConfig);\nPromise.all([(0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getCurrentUser)(), (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getCardList)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    user = _ref2[0],\n    cards = _ref2[1];\n  profileTitle.textContent = user.name;\n  profileDescription.textContent = user.about;\n  avatarImgBlock.style.backgroundImage = \"url(\".concat(user.avatar, \")\");\n  drawCards(cards, user._id);\n}).catch(function (err) {\n  return console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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