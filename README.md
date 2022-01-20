# FPLxStockX

A dashboard built for Fantasy Premier League users assistance.

 ### Inspiration
 a. [this](https://dribbble.com/shots/9166970-Stocks-Dashboard/attachments/1209597?mode=media) dashboard i found on dribble
 
 b. [stockX](https://stockx.com/) where i got the idea for related items and graphs to show trends - while here it's for sneakers, i applied it for players. for example, [here](https://stockx.com/new-balance-550-syracuse)

###Architecture

The raw data is pulled from https://fantasy.premierleague.com/api/bootstrap-static/, for things like prices and transfer in/out events - live real time data.

After being processed and manipulated, the data is saved to firestore DB, along with the users and other data.




## Setting up the project
### Requirements:

In order to run the project please make sure the following software is installed:
- Node.js Version 10+
- Yarn 1+

    cd shared
    run yarn 
    cd ..
    run yarn shared:upgrade

  
To run the FE:

    cd frontend
    yarn
    yarn start
 
 
 To run the BE:
 
    cd ../backend
    yarn
    yarn start

 ### Disclaimer
  - The code and the project is still under construction, some of its UI and functionality are not top level, but more of high level required behaviour and layout
  - Optimized for Big screens
 

 
 
 ## About
 
 ### What's FPL?
 
 FPL is a game that casts you in the role of a Fantasy manager of Premier League players.
  
 You must pick a squad of 15 players from the 2021/22 Premier League, who score points for your team based on their performances for their clubs in PL matches.
 
 Prices are given to players based on the number of FPL points they are projected to deliver and you are limited to a budget of £100.0m for your 15-man squad.  
 
 Players prices are always changing, based on their real-life performance and the demand.
 
 As in real life stock prices - so is the player price.
 If a player is doing well - the demand for him will increase, and so will his price, and vice versa - if he is in bad form, his price will fall and lots of FPL managers will sell him.
 
 What this dashboard is trying to achieve is the prediction of price changes, trends and more