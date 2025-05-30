how to set up

1. fork repo
2. create a folder
3. run ```git clone <your github link```
4. run ```npm install discordjs nodemon```
5. change config.example.json to config.json and fill it out
6. go to [Discord developer portal](https://discord.dev)
7. click on application and make a new application
8. click the bot tab and click rest token
9. copy the token and place it where "your token here" is in config.json
10. enable Presence Intent and Server Members Intent in bot tab
11. go to oauth2 tab and copy the application id to "your app id here" in config.json
12. scroll down and select scopes application.commands and bot
13. scroll down and copy the generated url, no perms needed
14. copy the link into your browser and invite it to your guild
15. once your bot is in your server, right-click your server icon and click copy server id
16. put your guild id into the "your guild id" slot in config.json
17. in a terminal, run ```node run src/register-commands.js``` to register slash commands
18. run nodemon to start the bot
 