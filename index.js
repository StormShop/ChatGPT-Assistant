// Configs
require('dotenv').config()
const config = require('./config')

// Display console logs
console.log('[\u001b[1;36mINFO\u001b[0m] : Setting up...')

console.table({
    "GPT-Version": config.gpt_version,
    "Max-Tokens": config.max_tokens
})

// Display location status from config
if(!config.locations.console) console.log('[\u001b[1;31mOFF\u001b[0m] : Console Application')
else console.log('[\u001b[1;32mON\u001b[0m] : Console Application')

if(!config.locations.api) console.log('[\u001b[1;31mOFF\u001b[0m] : API')
else console.log('[\u001b[1;32mON\u001b[0m] : API')

if(!config.locations.discord) console.log('[\u001b[1;31mOFF\u001b[0m] : Discord Bot')
else console.log('[\u001b[1;32mON\u001b[0m] : Discord Bot')

if(!config.locations.telegram) console.log('[\u001b[1;31mOFF\u001b[0m] : Telegram Bot')
else console.log('[\u001b[1;32mON\u001b[0m] : Telegram Bot')

// API routes
const { apiApplication } = require('./locations/api')
apiApplication(config)

// Discord bot
require('./locations/discord')

// Telegram bot
require('./locations/telegram')

// Console application
const { consoleApplication } = require('./locations/console')
consoleApplication(config)