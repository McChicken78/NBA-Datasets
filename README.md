# NBA-Player Recent Game Trends

## Overview

## Languages Used
* Python for data scraping
* JSON to exchange data from backend to frontend
* Javascript for manipulating table and running scripts on data
* React for dynamic, interactive UI components
* CSS for styling 
* HTML for webpage structuring
### This is a small but full-stack web application designed to create easy to read recent stats on specific players. Similar to a few betting apps like fanduel, this software is meant to act as a helper for users to recieve quick and readable data on the trends of players in there last X games. 

## Programming languages Purpose
* Python Jupyter Notebook -> Data Processing, analysis, and preparation of data
* JSON -> Exchange data from backend to frontend
* Python (Flask) ->  REST API for serving processed data
* Javascript -> Data maipulation, table logic, and client-side scripting
* React -> Dynamic, interactive user interface components
* CSS -> Styling webpage to make data presentable
* HTML -> Webpage structuring

## Tech Stack
### Backend / Data
    * Python (Jupyter Notebook)
    * Flask
    * JSON

### Frontend
    * JavaScript
    * React (Vite)
    * HTML
    * CSS

## Data Flow
    Jupyter Notebook -> JSON -> Flask API -> React Frontend

## Features
* Interactive player cards that display 5-game trends for points, assists, and rebounds
* Rest API for data access

## Dependencies
- Python 3.10+
- Flask
- flask-cors
- pandas
- numpy

## Installation / Usage

### Installation
1. Clone the repository:
   ```bash 
   git clone <your-repo-url>
2. Install python dependencies:
    ```bash
    pip install -r requirements.txt
3. Install frontend dependencies:
    ```bash
    npm install
3. Run Frontend and Backend
    ```bash
    npm run start:all
4. Open Browser using local host:
    ```bash
    http://localhost:5173/
### NBA player stats JSON is available locally at "http://127.0.0.1:5000/data"


# Player Card Mockup
- Created in Figma using a color palette I enjoyed from https://colorhunt.co
- Also created created initial images using Copilot to create animated player images
    * Originally got inspiration for images from StatMuse.com
- Inspiration for the player information visualization from Fanduel.com

    <img src = "Player Card Mockup.png" width = "400" height = "500">

# Demo
## Image of the graphical user interface (GUI)
![App Page screenshot](/NBA-Datasets/global%20assets/App%20start%20screen.png)
## CSV files of post-processed data
![NBA Dataset CSV](/NBA-Datasets/global%20assets/NBA%20Dataset%20CSV.png)
## This demo is to show the current state of the project, including both the web application and the REST API data.
![App and API Demo](/NBA-Datasets/global%20assets/NBA%20Dataset%20Example%20-%20GIfFinal.gif)


# Future Features
* Increase number of players
* Add filtering by team, stat, and player
* Automate player scraping / reload data button


# Noted Details
### Player images were create using Copilot, however due to Lebron having legal issues with AI image generation, I was unable to create his image and therefore used an online photograph.
