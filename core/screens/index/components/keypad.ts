export const keyPad = () => {
    const keys = ["1","2","3","4","5","6","7","8","9","*","0","#"]
    let keysElement = ``
    const keyPadElement = (keys:string)=>{
        return `
         <!-- Keypad -->
            <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-6 dark:text-white">Keypad</h2>
                <div class="grid grid-cols-3 gap-4">
                    ${keys}                    
                </div>
            </div>
        `
    }
    for(const key of keys){
        keysElement+=keyElement(key)
    }
    return keyPadElement(keysElement)
};

function keyElement(keyValue:string){
    return `<button class="keypad-button bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-6 rounded-lg text-2xl transition duration-300 ease-in-out transform hover:scale-105">${keyValue}</button>`
}
