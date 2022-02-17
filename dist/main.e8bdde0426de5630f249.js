/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/MobileMenu.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.hamburger = document.querySelector('.hamburger');
    this.mainNav = document.querySelector('.main-nav');
    this.mainMenu = document.querySelector('.main-menu');
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      this.hamburger.addEventListener('click', this.menuToggle.bind(this));
    }
  }, {
    key: "menuToggle",
    value: function menuToggle() {
      this.hamburger.classList.toggle('hamburger-active');
      this.mainNav.classList.toggle('main-nav-active');
      this.mainMenu.classList.toggle('main-menu-active');
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ const modules_MobileMenu = (MobileMenu);
;// CONCATENATED MODULE: ./src/scripts/modules/ScrollTo.js
function ScrollTo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ScrollTo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ScrollTo_createClass(Constructor, protoProps, staticProps) { if (protoProps) ScrollTo_defineProperties(Constructor.prototype, protoProps); if (staticProps) ScrollTo_defineProperties(Constructor, staticProps); return Constructor; }

var ScrollTo = /*#__PURE__*/function () {
  function ScrollTo() {
    ScrollTo_classCallCheck(this, ScrollTo);

    this.navigation = document.querySelector('.main-menu');
    this.events();
  }

  ScrollTo_createClass(ScrollTo, [{
    key: "events",
    value: function events() {
      console.log(this.navigation);
      this.navigation.addEventListener('click', this.scroll.bind(this));
    }
  }, {
    key: "scroll",
    value: function scroll(e) {
      e.preventDefault();
      this.id = e.target.getAttribute('href');
      document.querySelector(this.id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }]);

  return ScrollTo;
}();

/* harmony default export */ const modules_ScrollTo = (ScrollTo);
;// CONCATENATED MODULE: ./src/scripts/main.js




if (false) {}

var mobileMenu = new modules_MobileMenu();
var main_scroll = new modules_ScrollTo(); // Add other JS functionality here :)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lOGJkZGUwNDI2ZGU1NjMwZjI0OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFNQTtBQUNGLHdCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsU0FBTCxHQUFpQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0JILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFoQjtBQUNBLFNBQUtHLE1BQUw7QUFDSDs7OztXQUVELGtCQUFTO0FBQ0wsV0FBS0wsU0FBTCxDQUFlTSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxLQUFLQyxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQixDQUF6QztBQUNIOzs7V0FFRCxzQkFBYTtBQUNULFdBQUtSLFNBQUwsQ0FBZVMsU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0Msa0JBQWhDO0FBQ0EsV0FBS1AsT0FBTCxDQUFhTSxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixpQkFBOUI7QUFDQSxXQUFLTixRQUFMLENBQWNLLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLGtCQUEvQjtBQUNIOzs7Ozs7QUFJTCx5REFBZVgsVUFBZjs7Ozs7Ozs7SUNwQk1ZO0FBQ0Ysc0JBQWM7QUFBQTs7QUFDVixTQUFLQyxVQUFMLEdBQWtCWCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxTQUFLRyxNQUFMO0FBQ0g7Ozs7V0FFRCxrQkFBUztBQUNMUSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLRixVQUFqQjtBQUNBLFdBQUtBLFVBQUwsQ0FBZ0JOLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxLQUFLUyxNQUFMLENBQVlQLElBQVosQ0FBaUIsSUFBakIsQ0FBMUM7QUFDSDs7O1dBRUQsZ0JBQU9RLENBQVAsRUFBVTtBQUNOQSxNQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxXQUFLQyxFQUFMLEdBQVVGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxZQUFULENBQXNCLE1BQXRCLENBQVY7QUFDQW5CLE1BQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUFLZ0IsRUFBNUIsRUFBZ0NHLGNBQWhDLENBQStDO0FBQUNDLFFBQUFBLFFBQVEsRUFBRTtBQUFYLE9BQS9DO0FBQ0g7Ozs7OztBQUlMLHVEQUFlWCxRQUFmOztBQ25CQTtBQUNBO0FBQ0E7O0FBRUEsSUFBR2EsS0FBSCxFQUFlLEVBRWQ7O0FBRUQsSUFBSUcsVUFBVSxHQUFHLElBQUk1QixrQkFBSixFQUFqQjtBQUNBLElBQUlnQixXQUFNLEdBQUcsSUFBSVEsZ0JBQUosRUFBYixFQUNBLHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbW9kdWxlcy9Nb2JpbGVNZW51LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsVG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb2JpbGVNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpXHJcbiAgICAgICAgdGhpcy5tYWluTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2JylcclxuICAgICAgICB0aGlzLm1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudScpXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWVudVRvZ2dsZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIG1lbnVUb2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyLWFjdGl2ZScpXHJcbiAgICAgICAgdGhpcy5tYWluTmF2LmNsYXNzTGlzdC50b2dnbGUoJ21haW4tbmF2LWFjdGl2ZScpXHJcbiAgICAgICAgdGhpcy5tYWluTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLW1lbnUtYWN0aXZlJylcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7IiwiY2xhc3MgU2Nyb2xsVG8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYXZpZ2F0aW9uKVxyXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2Nyb2xsLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5pZCkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUbzsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9kdWxlcy9Nb2JpbGVNZW51JztcclxuaW1wb3J0IHNjcm9sbFRvIGZyb20gJy4vbW9kdWxlcy9TY3JvbGxUbyc7XHJcblxyXG5pZihtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XHJcblxyXG5sZXQgbW9iaWxlTWVudSA9IG5ldyBNb2JpbGVNZW51O1xyXG5sZXQgc2Nyb2xsID0gbmV3IHNjcm9sbFRvO1xyXG4vLyBBZGQgb3RoZXIgSlMgZnVuY3Rpb25hbGl0eSBoZXJlIDopXHJcbiJdLCJuYW1lcyI6WyJNb2JpbGVNZW51IiwiaGFtYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpbk5hdiIsIm1haW5NZW51IiwiZXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lbnVUb2dnbGUiLCJiaW5kIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiU2Nyb2xsVG8iLCJuYXZpZ2F0aW9uIiwiY29uc29sZSIsImxvZyIsInNjcm9sbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInNjcm9sbFRvIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwibW9iaWxlTWVudSJdLCJzb3VyY2VSb290IjoiIn0=