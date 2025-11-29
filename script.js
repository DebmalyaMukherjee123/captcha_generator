 const db = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captchaText = "";

    function generateCaptcha() {
        captchaText = "";
        for (let i = 0; i < 6; i++) {
            captchaText += db[Math.floor(Math.random() * db.length)];
        }
        document.querySelector(".captcha").textContent = captchaText;
    }

    generateCaptcha();

    document.querySelector(".submit").addEventListener('click', function () {
        const userInput = document.getElementById('txt').value.trim();

        if (!userInput) {
            document.querySelector(".header").innerHTML = "<h2>Please Enter The Text Shown Below</h2>";
            return;
        }

        if (userInput === captchaText) {
            document.querySelector(".header").innerHTML = "<h2 style='color:green'>Captcha Verified ✅</h2>";
        } else {
            document.querySelector(".header").innerHTML = "<h2 style='color:red'>Incorrect Captcha❗</h2>";
        }
    });

    document.querySelector(".refresh").addEventListener('click', function () {
        generateCaptcha();
        document.getElementById('txt').value = "";          
    });
