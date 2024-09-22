// import { Configs } from "../../configs"

export const homeScreenContent = async () => {
    return `
      <div class="max-w-4xl mx-auto p-4 md:flex md:space-x-4">
          <div class="md:w-1/2 space-y-4">
              <!-- Bluetooth Connection Status -->
              <div class="bg-white shadow-md rounded-lg p-4">
                  <h2 class="text-lg font-semibold mb-2">Bluetooth Status</h2>
                  <div class="flex items-center justify-between">
                      <span id="connectionStatus" class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                          </svg>
                          <span id="deviceName">Disconnected</span>
                      </span>
                      <button id="connectButton" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                          Connect
                      </button>
                  </div>
              </div>
  
              <!-- Door State -->
              <div class="bg-white shadow-md rounded-lg p-4">
                  <h2 class="text-lg font-semibold mb-4">Door State</h2>
                  <div class="flex flex-col items-center">
                      <button id="lockButton" class="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                      </button>
                      <span id="lockStatus" class="text-lg font-semibold">Locked</span>
                  </div>
              </div>
  
              <!-- Face ID Unlock Option -->
              <div class="bg-white shadow-md rounded-lg p-4">
                  <h2 class="text-lg font-semibold mb-4">Unlock with Face ID</h2>
                  <button id="faceIdButton" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Unlock with Face ID
                  </button>
              </div>
          </div>
  
          <div class="md:w-1/2 space-y-4 mt-4 md:mt-0">
              <!-- Submit PIN Section -->
              <div class="bg-white shadow-md rounded-lg p-4">
                  <h2 class="text-lg font-semibold mb-4">Enter PIN</h2>
                  <div class="mb-4">
                      <input type="password" id="keypadInput" class="w-full p-2 border rounded" placeholder="Enter PIN" readonly>
                  </div>
                  <button id="submitPin" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
                      Unlock
                  </button>
              </div>
  
              <!-- Keypad -->
              <div class="bg-white shadow-md rounded-lg p-4">
                  <h2 class="text-lg font-semibold mb-4">Keypad</h2>
                  <div class="grid grid-cols-3 gap-2">
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">1</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">2</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">3</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">4</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">5</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">6</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">7</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">8</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">9</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">*</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">0</button>
                      <button class="keypad-button bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded">#</button>
                  </div>
              </div>
          </div>
      </div>
  
      <script>
          const connectButton = document.getElementById('connectButton');
          const deviceName = document.getElementById('deviceName');
          const lockButton = document.getElementById('lockButton');
          const lockStatus = document.getElementById('lockStatus');
          const keypadButtons = document.querySelectorAll('.keypad-button');
          const keypadInput = document.getElementById('keypadInput');
          const submitPin = document.getElementById('submitPin');
          const faceIdButton = document.getElementById('faceIdButton');
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
                  // In a real application, you would verify the PIN here
                  isLocked = false;
                  updateLockStatus();
                  keypadInput.value = '';
              }
          });
  
          faceIdButton.addEventListener('click', () => {
              if (isConnected && isLocked) {
                  // In a real application, you would trigger Face ID verification here
                  isLocked = false;
                  updateLockStatus();
              }
          });
      </script>`;
  };
  