import"../../js/modulepreload-polyfill.B5Qt9EMX.js";const t=sessionStorage.getItem("authToken");t?(document.getElementById("logoutButton").addEventListener("click",()=>{sessionStorage.removeItem("authToken"),window.location.href="../Pages/login.html"}),document.getElementById("cancelLogoutButton").addEventListener("click",()=>{window.location.href="../Pages/dashboard.html"})):window.location.href="../index.html";
