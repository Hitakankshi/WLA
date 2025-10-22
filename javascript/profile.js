document.addEventListener('DOMContentLoaded', function() {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    if (!userData) {
        window.location.href = 'login.html';
        return;
    }
    
    // Display user data
    const profileContent = document.getElementById('profileContent');
    profileContent.innerHTML = `
        <div class="profile-detail">
            <span class="detail-label"><i class="fas fa-user"></i> Full Name:</span>
            <span class="detail-value">${userData.name}</span>
        </div>
        <div class="profile-detail">
            <span class="detail-label"><i class="fas fa-birthday-cake"></i> Age:</span>
            <span class="detail-value">${userData.age}</span>
        </div>
        <div class="profile-detail">
            <span class="detail-label"><i class="fas fa-envelope"></i> Email:</span>
            <span class="detail-value">${userData.email}</span>
        </div>
        <div class="profile-detail">
            <span class="detail-label"><i class="fas fa-phone"></i> Phone:</span>
            <span class="detail-value">${userData.phone}</span>
        </div>
        <div class="profile-detail">
            <span class="detail-label"><i class="fas fa-globe"></i> Nationality:</span>
            <span class="detail-value">${getCountryName(userData.nationality)}</span>
        </div>
        <div class="profile-membership">
            <div class="membership-card">
                <i class="fas fa-id-card"></i>
                <h3>Travel Explorer Membership</h3>
                <p>Member since ${new Date().toLocaleDateString()}</p>
                <div class="membership-status active">Active</div>
            </div>
        </div>
    `;
    
    // Logout button
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('userData');
        window.location.href = 'login.html';
    });
    
    // Edit profile button
    document.getElementById('editProfile').addEventListener('click', function() {
        window.location.href = 'login.html';
    });
    
    function getCountryName(code) {
        const countries = {
            'US': 'United States',
            'UK': 'United Kingdom',
            'CA': 'Canada',
            'AU': 'Australia',
            'IN': 'India'
        };
        return countries[code] || code;
    }
});