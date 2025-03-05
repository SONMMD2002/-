// عند تحميل الصفحة، تنفيذ الأكواد التالية
document.addEventListener('DOMContentLoaded', function() {
  // مثال على شريط تمرير للصور في قسم العرض الرئيسي (Hero)
  let hero = document.querySelector('.hero');
  let images = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg']; // قائمة بالصور البديلة للـ hero
  let currentIndex = 0;

  // دالة لتغيير صورة الخلفية في قسم الـ hero
  function changeHeroImage() {
    currentIndex = (currentIndex + 1) % images.length;
    hero.style.backgroundImage = 'url(' + images[currentIndex] + ')';
  }

  // تغيير الصورة كل 5 ثوانٍ
  setInterval(changeHeroImage, 5000);
});
(function() {
  var savedLang = localStorage.getItem('language') || 'ar';
  document.documentElement.lang = savedLang;
  document.documentElement.dir = (savedLang === 'en' || savedLang === 'pt') ? 'ltr' : 'rtl';
})();
