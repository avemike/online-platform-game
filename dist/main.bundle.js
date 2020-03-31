/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/Object.js":
/*!*******************************!*\
  !*** ./src/classes/Object.js ***!
  \*******************************/
/*! exports provided: _Object */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Object", function() { return _Object; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// create handling for SpriteReference as null
var _Object = /*#__PURE__*/function () {
  function _Object() {
    var SpriteReference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var args = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, _Object);

    this.data = {
      SpriteReference: SpriteReference,
      x: args.x || 0,
      y: args.y || 0,
      spriteProperties: SpriteReference.getProperties(),
      listeners: []
    };
  }

  _createClass(_Object, [{
    key: "run",
    value: function run() {
      return {
        ImageReference: this.data.SpriteReference.getImageReference(),
        width: this.data.spriteProperties.width,
        height: this.data.spriteProperties.height,
        x: this.data.x - this.data.spriteProperties.width / 2,
        y: this.data.y - this.data.spriteProperties.height / 2
      };
    }
  }, {
    key: "addListener",
    value: function addListener(type, inputFunc) {
      var func = inputFunc.bind(this);
      document.addEventListener(type, func);
      this.data.listeners.push({
        type: type,
        func: func
      });
    }
  }]);

  return _Object;
}();

/***/ }),

/***/ "./src/classes/Room.js":
/*!*****************************!*\
  !*** ./src/classes/Room.js ***!
  \*****************************/
/*! exports provided: _Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Room", function() { return _Room; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _Room = /*#__PURE__*/function () {
  function _Room() {
    _classCallCheck(this, _Room);

    this.data = {
      objectsReferences: [],
      x: 0
    };
  }

  _createClass(_Room, [{
    key: "addObjectReference",
    value: function addObjectReference(ObjectReference) {
      if (ObjectReference) this.data.objectsReferences.push(ObjectReference);
    }
  }, {
    key: "run",
    value: function run(ctx) {
      this.data.objectsReferences.map(function (obj) {
        // console.log(obj.run())
        var _obj$run = obj.run(ctx),
            ImageReference = _obj$run.ImageReference,
            width = _obj$run.width,
            height = _obj$run.height,
            x = _obj$run.x,
            y = _obj$run.y;

        ctx.drawImage(ImageReference, x, y, width, height);
      });
    }
  }]);

  return _Room;
}();

/***/ }),

/***/ "./src/classes/Sprite.js":
/*!*******************************!*\
  !*** ./src/classes/Sprite.js ***!
  \*******************************/
/*! exports provided: _Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Sprite", function() { return _Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _Sprite = /*#__PURE__*/function () {
  function _Sprite(imagesReference, args) {
    _classCallCheck(this, _Sprite);

    this.data = {
      imagesReference: imagesReference,
      properties: {
        width: args.width || 40,
        height: args.height || 40
      }
    };
  }

  _createClass(_Sprite, [{
    key: "getProperties",
    value: function getProperties() {
      return this.data.properties;
    }
  }, {
    key: "getImageReference",
    value: function getImageReference() {
      return this.data.imagesReference;
    }
  }]);

  return _Sprite;
}();

/***/ }),

/***/ "./src/classes/Window.js":
/*!*******************************!*\
  !*** ./src/classes/Window.js ***!
  \*******************************/
/*! exports provided: _Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Window", function() { return _Window; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _Window = /*#__PURE__*/function () {
  function _Window(elementReference) {
    _classCallCheck(this, _Window);

    this.data = {
      elementReference: elementReference,
      ctx: canvas.getContext('2d', {
        alpha: false
      }),
      // set alpha channel on false
      RoomReference: null
    };
  }

  _createClass(_Window, [{
    key: "selectRoom",
    value: function selectRoom(RoomReference) {
      this.data.RoomReference = RoomReference;
    }
  }, {
    key: "start",
    value: function start() {
      this.data.RoomReference.run(this.data.ctx);
      window.requestAnimationFrame(this.start.bind(this));
    }
  }]);

  return _Window;
}();

/***/ }),

/***/ "./src/classes/dot_40x40.png":
/*!***********************************!*\
  !*** ./src/classes/dot_40x40.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "58777f9b2767dceb4f683b0d02a9443c.png");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Object */ "./src/classes/Object.js");
/* harmony import */ var _classes_Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Room */ "./src/classes/Room.js");
/* harmony import */ var _classes_Window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Window */ "./src/classes/Window.js");
/* harmony import */ var _classes_Sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Sprite */ "./src/classes/Sprite.js");
/* harmony import */ var _classes_dot_40x40_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/dot_40x40.png */ "./src/classes/dot_40x40.png");





var DotImage = new Image(40, 40);
DotImage.src = _classes_dot_40x40_png__WEBPACK_IMPORTED_MODULE_4__["default"];
var SprPlayer = new _classes_Sprite__WEBPACK_IMPORTED_MODULE_3__["_Sprite"](DotImage, {
  width: 40,
  height: 40
});
var MainWindow = new _classes_Window__WEBPACK_IMPORTED_MODULE_2__["_Window"](document.querySelector('#canvas'));
var MainRoom = new _classes_Room__WEBPACK_IMPORTED_MODULE_1__["_Room"]();
var Player = new _classes_Object__WEBPACK_IMPORTED_MODULE_0__["_Object"](SprPlayer, {});
Player.addListener('keypress', function (e) {
  switch (e.code) {
    case 'KeyA':
      this.data.x -= 5;
      break;

    case 'KeyW':
      this.data.y -= 5;
      break;

    case 'KeyD':
      this.data.x += 5;
      break;

    case 'KeyS':
      this.data.y += 5;
      break;
  }
});
MainWindow.selectRoom(MainRoom);
MainRoom.addObjectReference(Player);
MainWindow.start();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1Jvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvU3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9kb3RfNDB4NDAucG5nIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbIl9PYmplY3QiLCJTcHJpdGVSZWZlcmVuY2UiLCJhcmdzIiwiZGF0YSIsIngiLCJ5Iiwic3ByaXRlUHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJsaXN0ZW5lcnMiLCJJbWFnZVJlZmVyZW5jZSIsImdldEltYWdlUmVmZXJlbmNlIiwid2lkdGgiLCJoZWlnaHQiLCJ0eXBlIiwiaW5wdXRGdW5jIiwiZnVuYyIsImJpbmQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiX1Jvb20iLCJvYmplY3RzUmVmZXJlbmNlcyIsIk9iamVjdFJlZmVyZW5jZSIsImN0eCIsIm1hcCIsIm9iaiIsInJ1biIsImRyYXdJbWFnZSIsIl9TcHJpdGUiLCJpbWFnZXNSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwiX1dpbmRvdyIsImVsZW1lbnRSZWZlcmVuY2UiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwiYWxwaGEiLCJSb29tUmVmZXJlbmNlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RhcnQiLCJEb3RJbWFnZSIsIkltYWdlIiwic3JjIiwiRG90U3JjIiwiU3ByUGxheWVyIiwiTWFpbldpbmRvdyIsInF1ZXJ5U2VsZWN0b3IiLCJNYWluUm9vbSIsIlBsYXllciIsImFkZExpc3RlbmVyIiwiZSIsImNvZGUiLCJzZWxlY3RSb29tIiwiYWRkT2JqZWN0UmVmZXJlbmNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDTyxJQUFNQSxPQUFiO0FBQ0UscUJBQTBDO0FBQUEsUUFBOUJDLGVBQThCLHVFQUFaLElBQVk7QUFBQSxRQUFOQyxJQUFNOztBQUFBOztBQUN4QyxTQUFLQyxJQUFMLEdBQVk7QUFDVkYscUJBQWUsRUFBZkEsZUFEVTtBQUVWRyxPQUFDLEVBQUVGLElBQUksQ0FBQ0UsQ0FBTCxJQUFVLENBRkg7QUFHVkMsT0FBQyxFQUFFSCxJQUFJLENBQUNHLENBQUwsSUFBVSxDQUhIO0FBSVZDLHNCQUFnQixFQUFHTCxlQUFlLENBQUNNLGFBQWhCLEVBSlQ7QUFNVkMsZUFBUyxFQUFFO0FBTkQsS0FBWjtBQVFEOztBQVZIO0FBQUE7QUFBQSwwQkFXUTtBQUNKLGFBQU87QUFDTEMsc0JBQWMsRUFBRSxLQUFLTixJQUFMLENBQVVGLGVBQVYsQ0FBMEJTLGlCQUExQixFQURYO0FBRUxDLGFBQUssRUFBRSxLQUFLUixJQUFMLENBQVVHLGdCQUFWLENBQTJCSyxLQUY3QjtBQUdMQyxjQUFNLEVBQUUsS0FBS1QsSUFBTCxDQUFVRyxnQkFBVixDQUEyQk0sTUFIOUI7QUFJTFIsU0FBQyxFQUFFLEtBQUtELElBQUwsQ0FBVUMsQ0FBVixHQUFjLEtBQUtELElBQUwsQ0FBVUcsZ0JBQVYsQ0FBMkJLLEtBQTNCLEdBQW1DLENBSi9DO0FBS0xOLFNBQUMsRUFBRSxLQUFLRixJQUFMLENBQVVFLENBQVYsR0FBYyxLQUFLRixJQUFMLENBQVVHLGdCQUFWLENBQTJCTSxNQUEzQixHQUFvQztBQUxoRCxPQUFQO0FBT0Q7QUFuQkg7QUFBQTtBQUFBLGdDQW9CY0MsSUFwQmQsRUFvQm9CQyxTQXBCcEIsRUFvQitCO0FBQzNCLFVBQU1DLElBQUksR0FBR0QsU0FBUyxDQUFDRSxJQUFWLENBQWUsSUFBZixDQUFiO0FBRUFDLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJMLElBQTFCLEVBQWdDRSxJQUFoQztBQUNBLFdBQUtaLElBQUwsQ0FBVUssU0FBVixDQUFvQlcsSUFBcEIsQ0FBeUI7QUFBRU4sWUFBSSxFQUFKQSxJQUFGO0FBQVFFLFlBQUksRUFBSkE7QUFBUixPQUF6QjtBQUNEO0FBekJIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFNSyxLQUFiO0FBQ0UsbUJBQWM7QUFBQTs7QUFDWixTQUFLakIsSUFBTCxHQUFZO0FBQUVrQix1QkFBaUIsRUFBRSxFQUFyQjtBQUF5QmpCLE9BQUMsRUFBRTtBQUE1QixLQUFaO0FBQ0Q7O0FBSEg7QUFBQTtBQUFBLHVDQUlxQmtCLGVBSnJCLEVBSXNDO0FBQ2xDLFVBQUlBLGVBQUosRUFBcUIsS0FBS25CLElBQUwsQ0FBVWtCLGlCQUFWLENBQTRCRixJQUE1QixDQUFpQ0csZUFBakM7QUFDdEI7QUFOSDtBQUFBO0FBQUEsd0JBT01DLEdBUE4sRUFPVztBQUNQLFdBQUtwQixJQUFMLENBQVVrQixpQkFBVixDQUE0QkcsR0FBNUIsQ0FBZ0MsVUFBQUMsR0FBRyxFQUFJO0FBQ3JDO0FBRHFDLHVCQUVTQSxHQUFHLENBQUNDLEdBQUosQ0FBUUgsR0FBUixDQUZUO0FBQUEsWUFFOUJkLGNBRjhCLFlBRTlCQSxjQUY4QjtBQUFBLFlBRWRFLEtBRmMsWUFFZEEsS0FGYztBQUFBLFlBRVBDLE1BRk8sWUFFUEEsTUFGTztBQUFBLFlBRUNSLENBRkQsWUFFQ0EsQ0FGRDtBQUFBLFlBRUlDLENBRkosWUFFSUEsQ0FGSjs7QUFJckNrQixXQUFHLENBQUNJLFNBQUosQ0FBY2xCLGNBQWQsRUFBOEJMLENBQTlCLEVBQWlDQyxDQUFqQyxFQUFvQ00sS0FBcEMsRUFBMkNDLE1BQTNDO0FBQ0QsT0FMRDtBQU1EO0FBZEg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1nQixPQUFiO0FBQ0UsbUJBQVlDLGVBQVosRUFBNkIzQixJQUE3QixFQUFtQztBQUFBOztBQUNqQyxTQUFLQyxJQUFMLEdBQVk7QUFDVjBCLHFCQUFlLEVBQUVBLGVBRFA7QUFFVkMsZ0JBQVUsRUFBRTtBQUNWbkIsYUFBSyxFQUFFVCxJQUFJLENBQUNTLEtBQUwsSUFBYyxFQURYO0FBRVZDLGNBQU0sRUFBRVYsSUFBSSxDQUFDVSxNQUFMLElBQWU7QUFGYjtBQUZGLEtBQVo7QUFRRDs7QUFWSDtBQUFBO0FBQUEsb0NBV2tCO0FBQUUsYUFBTyxLQUFLVCxJQUFMLENBQVUyQixVQUFqQjtBQUE2QjtBQVhqRDtBQUFBO0FBQUEsd0NBWXNCO0FBQUUsYUFBTyxLQUFLM0IsSUFBTCxDQUFVMEIsZUFBakI7QUFBa0M7QUFaMUQ7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1FLE9BQWI7QUFDRSxtQkFBWUMsZ0JBQVosRUFBOEI7QUFBQTs7QUFDNUIsU0FBSzdCLElBQUwsR0FBWTtBQUNWNkIsc0JBQWdCLEVBQWhCQSxnQkFEVTtBQUVWVCxTQUFHLEVBQUVVLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixJQUFsQixFQUF3QjtBQUFDQyxhQUFLLEVBQUU7QUFBUixPQUF4QixDQUZLO0FBRW9DO0FBQzlDQyxtQkFBYSxFQUFFO0FBSEwsS0FBWjtBQUtEOztBQVBIO0FBQUE7QUFBQSwrQkFRYUEsYUFSYixFQVE0QjtBQUN4QixXQUFLakMsSUFBTCxDQUFVaUMsYUFBVixHQUEwQkEsYUFBMUI7QUFDRDtBQVZIO0FBQUE7QUFBQSw0QkFXVTtBQUNOLFdBQUtqQyxJQUFMLENBQVVpQyxhQUFWLENBQXdCVixHQUF4QixDQUE0QixLQUFLdkIsSUFBTCxDQUFVb0IsR0FBdEM7QUFFQWMsWUFBTSxDQUFDQyxxQkFBUCxDQUE2QixLQUFLQyxLQUFMLENBQVd2QixJQUFYLENBQWdCLElBQWhCLENBQTdCO0FBQ0Q7QUFmSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLElBQU13QixRQUFRLEdBQUcsSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBYyxFQUFkLENBQWpCO0FBQ0FELFFBQVEsQ0FBQ0UsR0FBVCxHQUFlQyw4REFBZjtBQUVBLElBQU1DLFNBQVMsR0FBRyxJQUFJaEIsdURBQUosQ0FBWVksUUFBWixFQUFzQjtBQUFDN0IsT0FBSyxFQUFFLEVBQVI7QUFBWUMsUUFBTSxFQUFFO0FBQXBCLENBQXRCLENBQWxCO0FBQ0EsSUFBTWlDLFVBQVUsR0FBRyxJQUFJZCx1REFBSixDQUFZZCxRQUFRLENBQUM2QixhQUFULENBQXVCLFNBQXZCLENBQVosQ0FBbkI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsSUFBSTNCLG1EQUFKLEVBQWpCO0FBRUEsSUFBTTRCLE1BQU0sR0FBRyxJQUFJaEQsdURBQUosQ0FBYTRDLFNBQWIsRUFBd0IsRUFBeEIsQ0FBZjtBQUNBSSxNQUFNLENBQUNDLFdBQVAsQ0FBbUIsVUFBbkIsRUFBK0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ3pDLFVBQU9BLENBQUMsQ0FBQ0MsSUFBVDtBQUNFLFNBQUssTUFBTDtBQUNFLFdBQUtoRCxJQUFMLENBQVVDLENBQVYsSUFBZSxDQUFmO0FBQ0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0UsV0FBS0QsSUFBTCxDQUFVRSxDQUFWLElBQWUsQ0FBZjtBQUNBOztBQUNGLFNBQUssTUFBTDtBQUNFLFdBQUtGLElBQUwsQ0FBVUMsQ0FBVixJQUFlLENBQWY7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDRSxXQUFLRCxJQUFMLENBQVVFLENBQVYsSUFBZSxDQUFmO0FBQ0E7QUFaSjtBQWNELENBZkQ7QUFpQkF3QyxVQUFVLENBQUNPLFVBQVgsQ0FBc0JMLFFBQXRCO0FBQ0FBLFFBQVEsQ0FBQ00sa0JBQVQsQ0FBNEJMLE1BQTVCO0FBQ0FILFVBQVUsQ0FBQ04sS0FBWCxHIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIi8vIGNyZWF0ZSBoYW5kbGluZyBmb3IgU3ByaXRlUmVmZXJlbmNlIGFzIG51bGxcbmV4cG9ydCBjbGFzcyBfT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoU3ByaXRlUmVmZXJlbmNlID0gbnVsbCwgYXJncykge1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIFNwcml0ZVJlZmVyZW5jZSxcbiAgICAgIHg6IGFyZ3MueCB8fCAwLFxuICAgICAgeTogYXJncy55IHx8IDAsXG4gICAgICBzcHJpdGVQcm9wZXJ0aWVzIDogU3ByaXRlUmVmZXJlbmNlLmdldFByb3BlcnRpZXMoKSxcblxuICAgICAgbGlzdGVuZXJzOiBbXVxuICAgIH1cbiAgfVxuICBydW4oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEltYWdlUmVmZXJlbmNlOiB0aGlzLmRhdGEuU3ByaXRlUmVmZXJlbmNlLmdldEltYWdlUmVmZXJlbmNlKCksXG4gICAgICB3aWR0aDogdGhpcy5kYXRhLnNwcml0ZVByb3BlcnRpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZGF0YS5zcHJpdGVQcm9wZXJ0aWVzLmhlaWdodCxcbiAgICAgIHg6IHRoaXMuZGF0YS54IC0gdGhpcy5kYXRhLnNwcml0ZVByb3BlcnRpZXMud2lkdGggLyAyLFxuICAgICAgeTogdGhpcy5kYXRhLnkgLSB0aGlzLmRhdGEuc3ByaXRlUHJvcGVydGllcy5oZWlnaHQgLyAyXG4gICAgfVxuICB9XG4gIGFkZExpc3RlbmVyKHR5cGUsIGlucHV0RnVuYykge1xuICAgIGNvbnN0IGZ1bmMgPSBpbnB1dEZ1bmMuYmluZCh0aGlzKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKVxuICAgIHRoaXMuZGF0YS5saXN0ZW5lcnMucHVzaCh7IHR5cGUsIGZ1bmMgfSlcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBfUm9vbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YSA9IHsgb2JqZWN0c1JlZmVyZW5jZXM6IFtdLCB4OiAwIH1cbiAgfVxuICBhZGRPYmplY3RSZWZlcmVuY2UoT2JqZWN0UmVmZXJlbmNlKSB7XG4gICAgaWYgKE9iamVjdFJlZmVyZW5jZSkgdGhpcy5kYXRhLm9iamVjdHNSZWZlcmVuY2VzLnB1c2goT2JqZWN0UmVmZXJlbmNlKVxuICB9XG4gIHJ1bihjdHgpIHtcbiAgICB0aGlzLmRhdGEub2JqZWN0c1JlZmVyZW5jZXMubWFwKG9iaiA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhvYmoucnVuKCkpXG4gICAgICBjb25zdCB7SW1hZ2VSZWZlcmVuY2UsIHdpZHRoLCBoZWlnaHQsIHgsIHl9ID0gb2JqLnJ1bihjdHgpXG5cbiAgICAgIGN0eC5kcmF3SW1hZ2UoSW1hZ2VSZWZlcmVuY2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgfSlcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBfU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzUmVmZXJlbmNlLCBhcmdzKSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgaW1hZ2VzUmVmZXJlbmNlOiBpbWFnZXNSZWZlcmVuY2UsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHdpZHRoOiBhcmdzLndpZHRoIHx8IDQwLFxuICAgICAgICBoZWlnaHQ6IGFyZ3MuaGVpZ2h0IHx8IDQwXG4gICAgICB9LFxuXG4gICAgfVxuICB9XG4gIGdldFByb3BlcnRpZXMoKSB7IHJldHVybiB0aGlzLmRhdGEucHJvcGVydGllcyB9XG4gIGdldEltYWdlUmVmZXJlbmNlKCkgeyByZXR1cm4gdGhpcy5kYXRhLmltYWdlc1JlZmVyZW5jZSB9XG59IiwiZXhwb3J0IGNsYXNzIF9XaW5kb3cge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmZXJlbmNlKSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgZWxlbWVudFJlZmVyZW5jZSxcbiAgICAgIGN0eDogY2FudmFzLmdldENvbnRleHQoJzJkJywge2FscGhhOiBmYWxzZX0pLCAvLyBzZXQgYWxwaGEgY2hhbm5lbCBvbiBmYWxzZVxuICAgICAgUm9vbVJlZmVyZW5jZTogbnVsbFxuICAgIH1cbiAgfVxuICBzZWxlY3RSb29tKFJvb21SZWZlcmVuY2UpIHtcbiAgICB0aGlzLmRhdGEuUm9vbVJlZmVyZW5jZSA9IFJvb21SZWZlcmVuY2VcbiAgfVxuICBzdGFydCgpIHtcbiAgICB0aGlzLmRhdGEuUm9vbVJlZmVyZW5jZS5ydW4odGhpcy5kYXRhLmN0eClcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGFydC5iaW5kKHRoaXMpKVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU4Nzc3ZjliMjc2N2RjZWI0ZjY4M2IwZDAyYTk0NDNjLnBuZ1wiOyIsImltcG9ydCB7IF9PYmplY3QgfSBmcm9tICcuL2NsYXNzZXMvT2JqZWN0J1xuaW1wb3J0IHsgX1Jvb20gfSBmcm9tICcuL2NsYXNzZXMvUm9vbSdcbmltcG9ydCB7IF9XaW5kb3cgfSBmcm9tICcuL2NsYXNzZXMvV2luZG93J1xuaW1wb3J0IHsgX1Nwcml0ZSB9IGZyb20gJy4vY2xhc3Nlcy9TcHJpdGUnXG5cbmltcG9ydCBEb3RTcmMgZnJvbSAnLi9jbGFzc2VzL2RvdF80MHg0MC5wbmcnXG5jb25zdCBEb3RJbWFnZSA9IG5ldyBJbWFnZSg0MCwgNDApXG5Eb3RJbWFnZS5zcmMgPSBEb3RTcmNcblxuY29uc3QgU3ByUGxheWVyID0gbmV3IF9TcHJpdGUoRG90SW1hZ2UsIHt3aWR0aDogNDAsIGhlaWdodDogNDB9KVxuY29uc3QgTWFpbldpbmRvdyA9IG5ldyBfV2luZG93KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKSlcbmNvbnN0IE1haW5Sb29tID0gbmV3IF9Sb29tKClcblxuY29uc3QgUGxheWVyID0gbmV3IF9PYmplY3QoIFNwclBsYXllciwge30pXG5QbGF5ZXIuYWRkTGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuICBzd2l0Y2goZS5jb2RlKSB7XG4gICAgY2FzZSAnS2V5QSc6XG4gICAgICB0aGlzLmRhdGEueCAtPSA1XG4gICAgICBicmVhaztcbiAgICBjYXNlICdLZXlXJzpcbiAgICAgIHRoaXMuZGF0YS55IC09IDVcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0tleUQnOlxuICAgICAgdGhpcy5kYXRhLnggKz0gNVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnS2V5Uyc6XG4gICAgICB0aGlzLmRhdGEueSArPSA1XG4gICAgICBicmVhaztcbiAgfVxufSlcblxuTWFpbldpbmRvdy5zZWxlY3RSb29tKE1haW5Sb29tKVxuTWFpblJvb20uYWRkT2JqZWN0UmVmZXJlbmNlKFBsYXllcilcbk1haW5XaW5kb3cuc3RhcnQoKSJdLCJzb3VyY2VSb290IjoiIn0=