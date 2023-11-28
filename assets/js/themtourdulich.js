app.controller('ThemTourCtrl', function ($timeout) {

    $timeout(function () {

        var diemDi = document.getElementsByClassName("diemDi")[0];
        var diemDen = document.getElementsByClassName("diemDen")[0];

        // Danh sách các tỉnh thành Việt Nam
        var tinhThanhVietNam = [
            "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh",
            "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau",
            "Cao Bằng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp",
            "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang",
            "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu",
            "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An",
            "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Quảng Bình", "Quảng Nam", "Quảng Ngãi",
            "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình",
            "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh",
            "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái", "Phú Yên", "Cần Thơ",
            "Đà Nẵng", "Hải Phòng", "Hà Nội", "Hồ Chí Minh"
        ];

        // Thêm từng tỉnh thành vào dropdown list 
        for (var i = 0; i < tinhThanhVietNam.length; i++) {
            var option = document.createElement('option');
            option.text = tinhThanhVietNam[i];
            diemDi.appendChild(option);
        }

        for (var i = 0; i < tinhThanhVietNam.length; i++) {
            var option = document.createElement('option');
            option.text = tinhThanhVietNam[i];
            diemDen.appendChild(option);
        }

    });

});