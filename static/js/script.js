// SQL Learning Website JavaScript

// Function to copy SQL command to clipboard
function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    // Show feedback
    const button = document.querySelector(`[onclick="copyToClipboard('${elementId}')"]`);
    const originalText = button.innerHTML;
    button.innerHTML = 'Copied!';
    setTimeout(() => {
        button.innerHTML = originalText;
    }, 2000);
}

// Initialize tabs
document.addEventListener('DOMContentLoaded', function() {
    // Activate the current page's nav link
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Add syntax highlighting effect to SQL commands
    const sqlCommands = document.querySelectorAll('.sql-command');
    sqlCommands.forEach(cmd => {
        cmd.style.position = 'relative';
        const copyBtn = document.createElement('button');
        copyBtn.className = 'btn btn-sm btn-outline-light position-absolute top-0 end-0 m-2';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyBtn.onclick = function() {
            copyToClipboard(cmd.id || 'sql-cmd-' + Math.random().toString(36).substr(2, 9));
        };
        cmd.appendChild(copyBtn);
    });
});

// Function to toggle SQL command examples
function toggleExample(elementId) {
    const example = document.getElementById(elementId);
    if (example.style.display === 'none' || example.style.display === '') {
        example.style.display = 'block';
    } else {
        example.style.display = 'none';
    }
}