 
        
        let app = angular.module("app", ['ngRoute', 'ngCookies'])
        app.controller("test123", function ($scope, $location, $http, $rootScope, $routeParams) {
            $scope.s = ''
            let uploadPromises = [];
            var firebaseConfig = {
                apiKey: "AIzaSyBnSgLNQca9x6g5SFN8CU9YA1tBz5gGn6c",
                authDomain: "travel-bee-e0b59.firebaseapp.com",
                projectId: "travel-bee-e0b59",
                storageBucket: "travel-bee-e0b59.appspot.com",
                messagingSenderId: "991526403311",
                appId: "1:991526403311:web:24e7a3ba76e7d0d769af1a",
                measurementId: "G-DE29CFQQMY"
            };
            var config = firebase.initializeApp(firebaseConfig);
            $scope.image = ''
            document.getElementById('fileInputfb').onchange = function (e) {
                let files = e.target.files;
                $scope.uploadfirebase(files)




            }



            $scope.uploadfirebase = function (files) {
                const ref = firebase.storage().ref();

                if (files.length === 0) {
                    console.log("Vui lòng chọn ít nhất một tệp hình ảnh.");
                    return;
                }

                const uploadPromises = [];

                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const metadata = {
                        contentType: file.type,
                    };
                    const name = file.name;
                    const uploadIMG = ref.child(name).put(file, metadata);

                    const promise = uploadIMG
                        .then((snapshot) => snapshot.ref.getDownloadURL())
                        .then((url) => {
                            return url;
                        });

                    uploadPromises.push(promise);
                }

                Promise.all(uploadPromises)
                    .then((downloadURLs) => {
                        list = downloadURLs;
                        
                        console.log(list.join(","))
                    })
                    
                    .catch((error) => {
                        console.error("Lỗi khi tải lên hình ảnh: " + error);
                    });
            }





        })