// this.toastr.success('Hello world!', 'Toastr fun!', {
//   // 1. التحكم في الوقت
//   timeOut: 5000, // 5 ثواني
//   progressBar: true, // اظهر شريط التحميل
//   progressAnimation: 'decreasing', // الشريط ينقص مش يزيد

//   // 2. التحكم في التفاعل
//   closeButton: true, // اظهر زرار القفل
//   newestOnTop: true, // التوست الجديد يظهر فوق القديم

//   // 3. التحكم في الشكل (باستخدام Tailwind لو حابب)
//   toastClass: 'ngx-toastr shadow-2xl rounded-2xl border-2 border-white bg-primary',
//   titleClass: 'font-bold text-xl text-yellow-200',
//   messageClass: 'italic text-sm text-white',

//   // 4. المكان
//   positionClass: 'toast-top-right',
// });
const toastBaseConfig = {
  timeOut: 3000,
  progressBar: true,
  closeButton: true,
  newestOnTop: true,
  positionClass: 'toast-top-right',
};

// حالة الـ Success بلون أخضر وحجم معين
const successConfig = {
  ...toastBaseConfig, // جيب كل اللي فوق
  toastClass: 'ngx-toastr !bg-primary', // غير بس الكلاس
};

// حالة الـ Error بلون أحمر ووقت أطول
const errorConfig = {
  ...toastBaseConfig,
  timeOut: 8000, // هنا بنغير الوقت مخصوص للـ Error
  toastClass: 'ngx-toastr !bg-danger',
};

export const toastConfig = {
  successConfig,
  errorConfig,
};
