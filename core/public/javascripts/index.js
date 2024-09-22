const connectButton = document.getElementById('connectButton');
const deviceName = document.getElementById('deviceName');
const lockButton = document.getElementById('lockButton');
const lockStatus = document.getElementById('lockStatus');
const keypadButtons = document.querySelectorAll('.keypad-button');
const keypadInput = document.getElementById('keypadInput');
const submitPin = document.getElementById('submitPin');
const faceIdButton = document.getElementById('faceIdButton');
const clearInput = document.getElementById('clearInput');
let isConnected = false;
let isLocked = true;

connectButton.addEventListener('click', () => {
    isConnected = !isConnected;
    if (isConnected) {
        deviceName.textContent = 'Bluetooth Module';
        connectButton.textContent = 'Disconnect';
        connectButton.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        connectButton.classList.add('bg-red-500', 'hover:bg-red-600');
    } else {
        deviceName.textContent = 'Disconnected';
        connectButton.textContent = 'Connect';
        connectButton.classList.remove('bg-red-500', 'hover:bg-red-600');
        connectButton.classList.add('bg-blue-500', 'hover:bg-blue-600');
    }
});

lockButton.addEventListener('click', () => {
    if (isConnected) {
        isLocked = !isLocked;
        updateLockStatus();
    }
});

function updateLockStatus() {
    if (isLocked) {
        lockButton.classList.remove('bg-green-500', 'hover:bg-green-600');
        lockButton.classList.add('bg-red-500', 'hover:bg-red-600');
        lockStatus.textContent = 'Locked';
    } else {
        lockButton.classList.remove('bg-red-500', 'hover:bg-red-600');
        lockButton.classList.add('bg-green-500', 'hover:bg-green-600');
        lockStatus.textContent = 'Unlocked';
    }
}

keypadButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (keypadInput.value.length < 4) {
            keypadInput.value += button.textContent;
        }
    });
});

submitPin.addEventListener('click', () => {
    if (isConnected && isLocked && keypadInput.value.length === 4) {
        // Pin Unlock Goes Here
        isLocked = true;
        updateLockStatus();
        keypadInput.value = '';
    }
});

faceIdButton.addEventListener('click', () => {
    if (isConnected && isLocked) {
        // FaceID Logic Goes Here
        isLocked = true;
        updateLockStatus();
    }
});

clearInput.addEventListener('click', () => {
    keypadInput.value = '';
});