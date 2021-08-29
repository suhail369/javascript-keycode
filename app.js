// Variable declaration
const insert = document.getElementById('insert');

// Event Listener
window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div class="key-code">${event.keyCode}</div>
        <div class="card">
            <div class="card-header">event.key</div>
            <div class="card-item">${
              event.key === ' ' ? 'Space' : event.key
            }</div>
        </div>
        <div class="card">
            <div class="card-header">event.keyCode <span class="deprecated">(Deprecated)</span></div>
            <div class="card-item">${event.keyCode}</div>
        </div>
        <div class="card">
            <div class="card-header">event.code</div>
            <div class="card-item">${event.code}</div>
        </div>
    `;
});
