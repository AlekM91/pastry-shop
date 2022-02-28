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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ScrollTo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ScrollTo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ScrollTo_createClass(Constructor, protoProps, staticProps) { if (protoProps) ScrollTo_defineProperties(Constructor.prototype, protoProps); if (staticProps) ScrollTo_defineProperties(Constructor, staticProps); return Constructor; }

var ScrollTo = /*#__PURE__*/function () {
  function ScrollTo() {
    ScrollTo_classCallCheck(this, ScrollTo);

    this.navigation = document.querySelector('.main-menu');
    this.arrowButton = document.querySelector('.arrow');
    this.mainSection = document.querySelector('.section-1');
    this.buttonObserver = new IntersectionObserver(this.arrowObserve.bind(this), {
      root: null,
      threshold: 0
    });
    this.events();
  }

  ScrollTo_createClass(ScrollTo, [{
    key: "events",
    value: function events() {
      this.navigation.addEventListener('click', this.scroll.bind(this));
      this.arrowButton.addEventListener('click', this.scrollTop.bind(this));
      this.buttonObserver.observe(this.mainSection);
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
  }, {
    key: "scrollTop",
    value: function scrollTop() {
      scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: "arrowObserve",
    value: function arrowObserve(entries, observer) {
      var _entries = _slicedToArray(entries, 1),
          entry = _entries[0];

      console.log(entries);
      this.arrowButton.classList.remove('arrow-visible');

      if (!entry.isIntersecting) {
        this.arrowButton.classList.add('arrow-visible');
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTNCLENBQStCLGVBQS9CO0FBQ0g7QUFDSjs7Ozs7O0FBSUwsdURBQWU1QixRQUFmOztBQ3RDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRzZCLEtBQUgsRUFBZSxFQUVkOztBQUVELElBQUlHLFVBQVUsR0FBRyxJQUFJNUMsa0JBQUosRUFBakI7QUFDQSxJQUFJcUIsV0FBTSxHQUFHLElBQUlVLGdCQUFKLEVBQWIsRUFDQSxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvTW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbFRvLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKVxyXG4gICAgICAgIHRoaXMubWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpXHJcbiAgICAgICAgdGhpcy5tYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUnKVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1lbnVUb2dnbGUuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBtZW51VG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlci1hY3RpdmUnKVxyXG4gICAgICAgIHRoaXMubWFpbk5hdi5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLW5hdi1hY3RpdmUnKVxyXG4gICAgICAgIHRoaXMubWFpbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi1tZW51LWFjdGl2ZScpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51OyIsImNsYXNzIFNjcm9sbFRvIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUnKTtcclxuICAgICAgICB0aGlzLmFycm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93Jyk7XHJcbiAgICAgICAgdGhpcy5tYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLTEnKVxyXG4gICAgICAgIHRoaXMuYnV0dG9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5hcnJvd09ic2VydmUuYmluZCh0aGlzKSwge3Jvb3Q6IG51bGwsIHRocmVzaG9sZDogMH0pO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zY3JvbGwuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5hcnJvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2Nyb2xsVG9wLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm1haW5TZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGwoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmlkKS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnfSlcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUb3AoKSB7XHJcbiAgICAgICAgc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhcnJvd09ic2VydmUoZW50cmllcywgb2JzZXJ2ZXIpIHtcclxuICAgICAgICBsZXQgW2VudHJ5XSA9IGVudHJpZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW50cmllcylcclxuICAgICAgICB0aGlzLmFycm93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Fycm93LXZpc2libGUnKVxyXG4gICAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFycm93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Fycm93LXZpc2libGUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvOyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9tb2R1bGVzL01vYmlsZU1lbnUnO1xyXG5pbXBvcnQgc2Nyb2xsVG8gZnJvbSAnLi9tb2R1bGVzL1Njcm9sbFRvJztcclxuXHJcbmlmKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cclxuXHJcbmxldCBtb2JpbGVNZW51ID0gbmV3IE1vYmlsZU1lbnU7XHJcbmxldCBzY3JvbGwgPSBuZXcgc2Nyb2xsVG87XHJcbi8vIEFkZCBvdGhlciBKUyBmdW5jdGlvbmFsaXR5IGhlcmUgOilcclxuIl0sIm5hbWVzIjpbIk1vYmlsZU1lbnUiLCJoYW1idXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluTmF2IiwibWFpbk1lbnUiLCJldmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwibWVudVRvZ2dsZSIsImJpbmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJTY3JvbGxUbyIsIm5hdmlnYXRpb24iLCJhcnJvd0J1dHRvbiIsIm1haW5TZWN0aW9uIiwiYnV0dG9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImFycm93T2JzZXJ2ZSIsInJvb3QiLCJ0aHJlc2hvbGQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJvYnNlcnZlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic2Nyb2xsVG8iLCJ0b3AiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiLCJpc0ludGVyc2VjdGluZyIsImFkZCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsIm1vYmlsZU1lbnUiXSwic291cmNlUm9vdCI6IiJ9