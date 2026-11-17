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
