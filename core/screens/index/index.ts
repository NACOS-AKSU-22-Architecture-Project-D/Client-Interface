// import { Configs } from "../../configs"

import { keyPad } from "./components/keypad";

export const homeScreenContent = async () => {
  return `
<body class="bg-gray-100 dark:bg-gray-900 font-sans transition-colors duration-300">
    <div class="max-w-6xl mx-auto p-4 lg:flex lg:space-x-8">
        <div class="lg:w-1/2 space-y-6">

            <!-- Bluetooth Connection Status -->
            <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 dark:text-white">Bluetooth Status</h2>
                <div class="flex items-center justify-between">
                    <span id="connectionStatus" class="flex items-center text-lg dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        </svg>
                        <span id="deviceName">Disconnected</span>
                    </span>
                    <button id="connectButton" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Connect
                    </button>
                </div>
            </div>

            <!-- Door State -->
            <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-6 dark:text-white">Door State</h2>
                <div class="flex flex-col items-center">
                    <button id="lockButton" class="bg-red-500 hover:bg-red-600 text-white font-bold py-8 px-12 rounded-full mb-6 transition duration-300 ease-in-out transform hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </button>
                    <span id="lockStatus" class="text-2xl font-semibold dark:text-white">Locked</span>
                </div>
            </div>
        </div>

        <div class="lg:w-1/2 space-y-6 mt-6 lg:mt-0">
            <!-- Submit PIN Section -->
            <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-6 dark:text-white">Enter PIN</h2>
                <div class="mb-4 flex space-x-2">
                    <input type="password" id="keypadInput" class="w-full p-3 border rounded-lg text-lg dark:bg-gray-700 dark:text-white dark:border-gray-600" placeholder="Enter PIN" readonly>
                    <button id="clearInput" class="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
                        Clear
                    </button>
                </div>
                <button id="submitPin" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg w-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Authenticate Pin
                </button>
            </div>
            ${keyPad()}
        </div>
          <!-- Face ID Unlock Option -->
            <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-6 dark:text-white">Unlock with Face ID</h2>
                <button id="faceIdButton" class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg w-full flex items-center justify-center text-lg transition duration-300 ease-in-out transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Unlock with Face ID
                </button>
            </div>
    </div>
    <script src="/javascripts/index.js"></script>
`;
};
