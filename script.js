document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });
    });

    // Handle checkbox clicks
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const card = e.target.closest('.card');
            if (checkbox.checked) {
                card.style.borderColor = '#666';
            }
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('card-checkbox') && 
                !e.target.classList.contains('settings')) {
                const checkbox = card.querySelector('.card-checkbox');
                checkbox.checked = !checkbox.checked;
            }
        });
    });

    const settings = document.querySelectorAll('.settings');
    settings.forEach(setting => {
        setting.addEventListener('click', (e) => {
            e.stopPropagation();
            // Add your settings logic here
        });
    });
});

function showAlert(cardName) {
  alert('You clicked ' + cardName + '!');
}