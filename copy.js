/* 页面文案集中在这里：以后改文字只改这个文件，推送即可生效。
   index.html 里的原始文字作为兜底，本文件加载成功后以这里为准。 */
window.COPY = {
  docTitle: '一份神秘的礼物',
  title: '冬日快乐',
  intro: '你有一份来自张佑旭的冬日礼物，确定是否打开。',
  button: '打 开'
};

(function () {
  var C = window.COPY;
  if (!C) return;

  function apply() {
    if (C.docTitle) document.title = C.docTitle;
    var t = document.querySelector('.card h1');
    var p = document.querySelector('.card p');
    var b = document.getElementById('openBtn');
    if (t && C.title) t.textContent = C.title;
    if (p && C.intro) p.textContent = C.intro;
    if (b && C.button) b.textContent = C.button;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
