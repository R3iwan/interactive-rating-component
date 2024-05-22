const buttons = document.querySelectorAll('.buttons button');
const submitButton = document.querySelector('.submit button');
let selectedRating = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('Button clicked');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        selectedRating = this.innerText;
    });
});

submitButton.addEventListener('click', function() {
    if (selectedRating) {
        document.querySelector('.main-page-1').style.display = 'none';
        document.querySelector('.main-page-2').style.display = 'block';
        document.getElementById('rating').innerText = selectedRating;
    } else {
        alert('Please select a rating before submitting.');
    }
});
