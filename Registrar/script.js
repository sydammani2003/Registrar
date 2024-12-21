document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form submission (only for validation)
    event.preventDefault();

    // Collect form values
    const name = document.getElementById('name').value.trim();
    const regNo = document.getElementById('reg_no').value.trim();
    const age = document.getElementById('age').value;
    const field = document.getElementById('field').value.trim();
    const timeDate = document.getElementById('time_date').value;
    const department = document.getElementById('department').value;

    // Validate fields
    if (!name || name.length < 3) {
        alert('Please enter a valid name with at least 3 characters.');
        return;
    }

    if (!regNo || !/^[A-Za-z0-9]+$/.test(regNo)) {
        alert('Please enter a valid registration number.');
        return;
    }

    if (!age || age < 18 || age > 60) {
        alert('Age must be between 18 and 60.');
        return;
    }

    if (!field) {
        alert('Please specify your field of interest.');
        return;
    }

    if (!timeDate) {
        alert('Please select a valid time and date.');
        return;
    }

    if (!department) {
        alert('Please select your engineering department.');
        return;
    }

    // If all validations pass, submit the form (let the browser handle submission)
    alert('Registration successful!');
    // Remove the manual this.submit() call, let the form be submitted naturally
    event.target.submit(); 
});
