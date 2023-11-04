document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inquiryForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const email = document.getElementById("email").value;
        const inquiry = document.getElementById("inquiry").value;

        // Create an object with the form data
        const formData = {
            name,
            contactNumber,
            email,
            inquiry
        };

        // Send the form data to your server using AJAX or fetch
        // Replace 'your-server-url' with the actual URL to your server-side script
        fetch('https://web.whatsapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Form data sent successfully!');
                // You can add code here to clear the form or perform other actions
            } else {
                alert('Failed to send form data.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
