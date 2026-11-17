// 机场PRO 横向比较工具核心逻辑 (纯前端动态渲染，零依赖)
document.addEventListener('DOMContentLoaded', function () {
  var data = window.AIRPORTS_DATA || [];
  if (!data || data.length === 0) return;

  var selectorContainer = document.getElementById('compare-selectors');
  var tableWrapper = document.getElementById('compare-table-wrapper');
  if (!selectorContainer || !tableWrapper) return;

  // 默认对比排名前3家代表性机场 (微风网络、暮光网络、飞猫云)
  var selectedSlugs = ['breezenet', 'muguang', 'feimaoyun'];

  // 渲染选择器
  function renderSelectors() {
    selectorContainer.innerHTML = '';
    var label = document.createElement('div');
    label.style.fontWeight = '600';
    label.style.fontSize = '0.95rem';
    label.style.color = 'var(--text-main)';
    label.textContent = '选择对比机场（支持在 14 款精选中勾选 2 ~ 4 家）：';
    selectorContainer.appendChild(label);

    var checkboxWrap = document.createElement('div');
    checkboxWrap.style.display = 'flex';
    checkboxWrap.style.flexWrap = 'wrap';
    checkboxWrap.style.gap = '1rem';
    checkboxWrap.style.marginTop = '0.5rem';

    data.forEach(function (airport) {
      var labelItem = document.createElement('label');
      labelItem.style.display = 'inline-flex';
      labelItem.style.alignItems = 'center';
      labelItem.style.gap = '0.35rem';
      labelItem.style.fontSize = '0.9rem';
      labelItem.style.cursor = 'pointer';

      var chk = document.createElement('input');
      chk.type = 'checkbox';
      chk.value = airport.slug;
      chk.checked = selectedSlugs.indexOf(airport.slug) !== -1;

      chk.addEventListener('change', function () {
        if (this.checked) {
          if (selectedSlugs.length >= 4) {
            alert('最多同时支持横向对比 4 家机场');
            this.checked = false;
            return;
          }
          selectedSlugs.push(airport.slug);
        } else {
          if (selectedSlugs.length <= 2) {
            alert('请至少保留 2 家机场以供横向比对');
            this.checked = true;
            return;
          }
          var idx = selectedSlugs.indexOf(airport.slug);
          if (idx !== -1) selectedSlugs.splice(idx, 1);
        }
        renderTable();
      });

      labelItem.appendChild(chk);
      labelItem.appendChild(document.createTextNode(airport.name));
      checkboxWrap.appendChild(labelItem);
    });

    selectorContainer.appendChild(checkboxWrap);
  }

  // 渲染对比表格
  function renderTable() {
    var items = data.filter(function (item) {
      return selectedSlugs.indexOf(item.slug) !== -1;
    });

    if (items.length === 0) {
      tableWrapper.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--text-muted)">请至少选择 2 家机场进行比对</p>';
      return;
    }

    var html = '<div class="table-container"><table class="data-table"><thead><tr><th style="min-width:130px">对比维度</th>';
    items.forEach(function (item) {
      html += '<th style="text-align:center;min-width:180px">' + item.name + 
              (item.coupon ? '<br><span class="coupon-tag" style="margin-top:0.25rem">券: ' + item.coupon + '</span>' : '') + 
              '</th>';
    });
    html += '</tr></thead><tbody>';

    // 1. 线路与入口
    html += '<tr><td><strong>线路类型</strong></td>';
    items.forEach(function (i) {
      html += '<td><span class="pill-tag">' + i.lineType + '</span></td>';
    });
    html += '</tr>';

    // 2. 起步价格
    html += '<tr><td><strong>起步价格</strong></td>';
    items.forEach(function (i) {
      html += '<td style="color:var(--primary);font-weight:700">' + i.currency + i.startingPrice + ' / ' + i.billingCycle + '</td>';
    });
    html += '</tr>';

    // 3. 入门套餐单价 (每GB)
    html += '<tr><td><strong>入门套餐单价</strong></td>';
    items.forEach(function (i) {
      var plan = i.plans[0];
      html += '<td>¥' + plan.unitPrice + ' / GB<br><small style="color:var(--text-muted)">(' + plan.traffic + ' / ' + plan.price + '元)</small></td>';
    });
    html += '</tr>';

    // 4. 传输协议
    html += '<tr><td><strong>支持协议</strong></td>';
    items.forEach(function (i) {
      html += '<td>' + i.protocols.join(', ') + '</td>';
    });
    html += '</tr>';

    // 5. 覆盖地区
    html += '<tr><td><strong>节点覆盖地区</strong></td>';
    items.forEach(function (i) {
      html += '<td style="font-size:0.85rem">' + i.regions.slice(0, 5).join('、') + (i.regions.length > 5 ? ' 等' : '') + '</td>';
    });
    html += '</tr>';

    // 6. 设备限制
    html += '<tr><td><strong>设备在线限制</strong></td>';
    items.forEach(function (i) {
      html += '<td>' + i.deviceLimit + '</td>';
    });
    html += '</tr>';

    // 7. AI 支持情况
    html += '<tr><td><strong>ChatGPT / Claude 支持</strong></td>';
    items.forEach(function (i) {
      html += '<td style="font-size:0.85rem;color:var(--success)">' + i.aiSupport.join('、') + '</td>';
    });
    html += '</tr>';

    // 8. 流媒体支持
    html += '<tr><td><strong>流媒体解锁</strong></td>';
    items.forEach(function (i) {
      html += '<td style="font-size:0.85rem">' + i.streamingSupport.slice(0, 4).join('、') + '</td>';
    });
    html += '</tr>';

    // 9. 核心优势
    html += '<tr><td><strong>主要核心优势</strong></td>';
    items.forEach(function (i) {
      html += '<td style="font-size:0.82rem"><ul>';
      i.advantages.slice(0, 2).forEach(function (adv) {
        html += '<li>' + adv + '</li>';
      });
      html += '</ul></td>';
    });
    html += '</tr>';

    // 10. 适用人群
    html += '<tr><td><strong>最适合人群</strong></td>';
    items.forEach(function (i) {
      html += '<td style="font-size:0.82rem;color:var(--text-body)">' + i.suitableFor.join('；') + '</td>';
    });
    html += '</tr>';

    // 11. 详细评测与直达官网
    html += '<tr><td><strong>评测与官网直达</strong></td>';
    items.forEach(function (i) {
      html += '<td style="text-align:center;display:flex;flex-direction:column;gap:0.4rem;align-items:center">' +
              '<a href="../review/' + i.slug + '/index.html" class="btn btn-outline btn-sm" style="width:100%">查看评测</a>' +
              '<a href="' + i.affiliateUrl + '" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="width:100%">前往官网 ↗</a>' +
              '</td>';
    });
    html += '</tr>';

    html += '</tbody></table></div>';
    tableWrapper.innerHTML = html;
  }

  renderSelectors();
  renderTable();
});
