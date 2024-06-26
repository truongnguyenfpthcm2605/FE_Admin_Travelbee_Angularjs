app.config(function ($routeProvider) {
  $routeProvider
    .when("/main", {
      templateUrl: "./pages/main.html",
      controller: "mainController",
    })
    .when("/QuanLyPhanHoi", {
      templateUrl: "./pages/QuanLyPhanHoi.html"

    })
    .when("/modalFeedback", {
      templateUrl: "./pages/modalFeedback.html",
      controller: "modalFeedbackController",
    })
    .when("/profile", {
      templateUrl: "./pages/profile.html",
    })
    .when("/QuanLyVouCher", {
      templateUrl: "./pages/QuanLyVouCher.html",
      controller: "voucherController"

    })
    .when("/CRUDVoucher", {
      templateUrl: "./pages/CRUDVoucher.html",
      controller: "CRUDVoucherController",
    })

    .when("/CRUDVoucher/:id", {
      templateUrl: "./pages/CRUDVoucher.html",
      controller: "CRUDVoucherController",
    })

    .when("/login", {
      templateUrl: "./pages/sign-in.html",
      controller: "loginController",
    })
    .when('/hotel', {
      templateUrl: './pages/QLKhachSan.html',
      controller:"KhachSanController",
    })
    .when('/crudHotel', {
      templateUrl: './pages/ThemKhachSan.html',
    })
    .when('/crudHotel/:id', {
      templateUrl: './pages/ThemKhachSan.html'
    })
    .when('/account', {
      templateUrl: './pages/QLTaiKhoan.html'
    })
    .when('/CRUDaccount', {
      templateUrl: './pages/ThemTaiKhoan.html',
      controller:'TaiKhoanController'

    })
    .when('/transport', {
      templateUrl: './pages/QLPhuongTien.html'
    })
    .when('/crudTransport', {
      templateUrl: './pages/ThemPhuongTien.html'
  
    })
    .when('/crudTransport/:id', {
      templateUrl: './pages/ThemPhuongTien.html'
    })

    
    

    .when('/danhsachve', {
      templateUrl: './pages/DanhSachVe.html',
      controller:'danhsachve'
    })

    .when('/ThayDoiThongTinVe', {
      templateUrl: './pages/ThayDoiThongTinVe.html'
    })

    .when('/themDiaDiem', {
      templateUrl: './pages/formThemDiaDiem.html'
    })
    .when('/UpdateLoation', {
      templateUrl: './pages/UpdateLoation.html',
      controller: 'UpdateLoation'
    })
    .when('/ThayDoiThongTintour', {
      templateUrl: './pages/thayDoiThongTinTour.html',
      controller: 'thayDoiThongTinTour'
    })
    .when('/themtourdulich', {
      templateUrl: './pages/themTourDuLich.html',
      controller: 'themTourDuLich'
    })

    .when('/QuanLyTour', {
      templateUrl: './pages/QuanLyTour.html',
      controller: 'QuanLyTour'
    })
    .when('/quanLyDiaDiem', {
      templateUrl: './pages/quanLyDiaDiem.html',
      
    })

    .when('/ticket', {
      templateUrl: './pages/QLVe.html',
      controller: 'quanLyVe'
    })

    .otherwise({
      redirectTo: "/login",
    });
});
app.run(function ($rootScope) {
  $rootScope.$on("$routeChangeStart", function () {
    $rootScope.loading = true;
  });
  $rootScope.$on("$routeChangeSuccess", function () {
    $rootScope.loading = false;
  });
  $rootScope.$on("$routeChangeError", function () {
    $rootScope.loading = false;
    alert("loading Templet Errors");
  });
});
