document.getElementById('saveButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to save the settings?')) {
        // Place your save logic here
        alert('Settings saved!');
    } else {
        alert('Save cancelled.');
    }
});

document.getElementById('cancelButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to cancel?')) {
        alert('Cancelled.');
        // Optionally add logic to revert changes or close dialog
    } else {
        alert('Cancel aborted.');
    }
});