// 机场PRO 全站通用交互脚本 (纯原生 JavaScript，零外部依赖)
document.addEventListener('DOMContentLoaded', function () {
  // 1. 移动端菜单切换
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var mobileDrawer = document.querySelector('.mobile-drawer');

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', function () {
      var isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // 点击抽屉内链接自动关闭
    var drawerLinks = mobileDrawer.querySelectorAll('a');
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 2. 表格横向滚动提示优化
  var tables = document.querySelectorAll('.table-container');
  tables.forEach(function (table) {
    table.setAttribute('role', 'region');
    table.setAttribute('tabindex', '0');
    table.setAttribute('aria-label', '可左右滑动的比对表格');
  });
});

// 3. 全局联络弹窗交互与剪贴板复制工具
window.openContactModal = function () {
  var overlay = document.getElementById('contactModalOverlay');
  if (overlay) {
    overlay.style.display = 'flex';
    void overlay.offsetWidth; // 触发 reflow 启用淡入动画
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.closeContactModal = function () {
  var overlay = document.getElementById('contactModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    setTimeout(function () {
      if (!overlay.classList.contains('active')) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    }, 250);
  }
};

window.handleContactOverlayClick = function (e) {
  if (e.target && e.target.id === 'contactModalOverlay') {
    window.closeContactModal();
  }
};

window.copyContactText = function (text, label) {
  function showSuccess() {
    var toast = document.getElementById('contactToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'contactToast';
      toast.className = 'contact-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = '✅ 已成功复制 ' + label + ' 到剪贴板！可以直接粘贴添加';
    toast.classList.add('show');
    clearTimeout(window.__contactToastTimer);
    window.__contactToastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 2600);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showSuccess).catch(function () {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }

  function fallbackCopy(val) {
    var ta = document.createElement('textarea');
    ta.value = val;
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    ta.style.left = '-9999px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      var ok = document.execCommand('copy');
      if (ok) {
        showSuccess();
      } else {
        prompt('请手动按 Ctrl+C 复制账号：', val);
      }
    } catch (err) {
      prompt('请手动按 Ctrl+C 复制账号：', val);
    }
    document.body.removeChild(ta);
  }
};

// 键盘 ESC 键全局监听关闭
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.keyCode === 27) {
    window.closeContactModal();
  }
});

