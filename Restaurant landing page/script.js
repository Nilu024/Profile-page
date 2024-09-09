const form = document.getElementById('order-form');
     const receipt = document.getElementById('receipt');
        const mealName = document.getElementById('meal-name');
        const price = document.getElementById('price');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const selectedMeal = form.querySelector('input[name="meal"]:checked');
            if (selectedMeal) {
                mealName.textContent = selectedMeal.value.charAt(0).toUpperCase() + selectedMeal.value.slice(1);
                price.textContent = selectedMeal.getAttribute('data-price');
                receipt.classList.remove('hidden'); // Show the receipt
            } else {
                alert('Please select a meal.');
            }
    });


document.getElementById('reservation-form').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = this[0].value;
    const email = this[1].value;
    const date = this[2].value;
    const time = this[3].value;

    // Display a confirmation message
    alert(`Thank you, ${name}! Your reservation for ${date} at ${time} has been received.`);
    
    // Reset the form
    this.reset();
});