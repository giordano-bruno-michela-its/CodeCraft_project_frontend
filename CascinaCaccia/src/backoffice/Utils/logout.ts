
const token = sessionStorage.getItem('authToken');


if (!token) {
    window.location.href = '../index.html';
} else {
    const logoutButton = document.getElementById('logoutButton') as HTMLButtonElement;

    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('authToken');

        window.location.href = '../Pages/login.html';
    });


    const cancelLogoutButton = document.getElementById('cancelLogoutButton') as HTMLButtonElement;

    cancelLogoutButton.addEventListener('click', () => {
      
        window.location.href = '../Pages/dashboard.html';
    });

}

