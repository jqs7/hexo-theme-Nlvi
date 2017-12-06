~function(window, fn) {
  "use strict";

  var tools = fn();
  var Nlvi = {};
  Nlvi.base = {
    isBanderole: function() {
      return nCONFIG.theme === 'banderole';
    },

    isBalance: function () {
      return nCONFIG.theme === 'balance';
    },

    closeAnimate: function() {
      return tools.opreateClass('.syuanpi', 'remove');
    },

  };

  Nlvi.boot = function() {
    var boot = {
      smoothScroll: function() {
        $('.toc-link').click(function () {
          $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 200
          });
        });
      },

      picPos: function () {
        $('.post-content').each(function () {
          $(this).find('img').each(function () {
            $(this).parent('p').css('text-align', 'center');
          });
        });
      }
    };
    for (var i in boot) {
      boot[i]();
    }
  };

  Nlvi.tools = tools;

  window.Nlvi = Nlvi;
}(window, function() {
  var tools = {};

  tools.opreateClass = function (ele, cls, opt) {
    if (!arguments[2]) {
      cls = arguments[0];
      opt = arguments[1];
    }
    return opt === 'remove'
      ? $(ele).removeClass(cls)
      : $(ele).addClass(cls);
  };

  tools.existClass = function (ele, cls) {
    return $(ele).hasClass(cls);
  };

  tools.scroll = function (win) {
    return function(fn) {
      $(win).scroll(function() {
        var sct = $(win).scrollTop();
        fn && fn(sct);
      });
    };
  };

  return tools;
});