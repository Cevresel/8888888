// Veri Girişi ve Hesaplama
document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var school = document.getElementById('school').value;
    var type = document.getElementById('type').value;
    var weight = document.getElementById('weight').value;
    var points = 0;

    if (type === "Kağıt/Karton") {
        points = weight * 10;
    } else if (type === "Plastik") {
        points = weight * 15;
    } else if (type === "Cam") {
        points = weight * 20;
    } else if (type === "Metal") {
        points = weight * 25;
    } else if (type === "Pil ve Elektronik Atık") {
        points = weight * 50;
    }

    var resultText = `${name}, ${school} okulundan, ${weight} kg ${type} atığı ile ${points} puan kazandı.`;
    document.getElementById('result').textContent = resultText;

    // Veriyi localStorage'a kaydet
    localStorage.setItem('userData', JSON.stringify({
        name: name,
        school: school,
        type: type,
        weight: weight,
        points: points
    }));
});

// Kullanıcı Girişi
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var storedData = localStorage.getItem('userData');
    if (storedData) {
        var userData = JSON.parse(storedData);
        document.getElementById('login-result').textContent = `Hoş geldiniz ${userData.name}! Puanınız: ${userData.points}`;
    } else {
        document.getElementById('login-result').textContent = "Kullanıcı bulunamadı!";
    }
});
