# Creating Playlists using React.js

## Description

This app allows users to create and modify their own music playlists. Connected to the iTunes API, the user can create multiple of their own custom playlists.

This is my first project using React.js

## Deployment Link

https://comfy-maamoul-eccabd.netlify.app/

(No API keys needed)

## Getting Started/Code Installation

Fork and clone should work, there's no API keys needed for this one as it's an open API. 
Want to use `npm start` in terminal to get a local version.

## Timeframe & Working Team

- This was a solo project. I spent 4 days in total. 
- 1 day was planning. 2 days building out the app and 1 day refactoring and adding CSS.

## Technologies used
- React.js
    - Components and Hooks
- CSS
- Netlify
- CLI
- Axios
- iTunes open API
- MockFlow WireframePro

## Brief

As an MVP version, the user should be able to search for songs, add them to a playlist and discover new songs that can also be added to playlists.

I will use the iTunes search API (20 calls limit per minute) for the initial MVP features

Wireframes below and download link: [Wireframes - Project 2 V1.pdf](https://github.com/justinpjtate1/React.js_Music_UI/files/10480485/Wireframes.-.Project.2.V1.pdf)

<img width="1010" alt="Screenshot 2023-01-27 at 14 23 09" src="https://user-images.githubusercontent.com/119341279/215109602-5d6794ef-9afc-4602-926f-80b63a2b92c5.png">
<img width="995" alt="Screenshot 2023-01-27 at 14 23 20" src="https://user-images.githubusercontent.com/119341279/215109609-ec38a908-bfc3-4b9d-945d-502d378c3a33.png">



## Planning

user stories for MVP:
- As a user I should be able to search songs by song name or by artist
- As a user, I should be able to create playlists
- As a user, I should be able to add searched songs to playlist(s) of choice.
- As a user, I want to remove songs from my playlist
- As a user, I want to clear all songs in a playlist

Components required:
* Base app
* Search container
* Search result
* Discovery items
* Playlist container
* List item for each playlist
* list item for each song added

States:
* search results
* All Playlists (object)
* Songs in each playlist (array)
* Songs to discover (array)

## Build/Code Process

- Started by creating static Components for each of the components above.
- Realised that with search and playlists being separate components, a lot of the functions would have to be defined in the parent App
- Started by creating the search functionality. There were a few functions required:
    - handling the search input
    - Passing the search input into the API call and returning an array of objects with 5 results
    - Adding the selected songs to an array that can eventually be added to a playlist
<img width="897" alt="Screenshot 2023-01-27 at 13 33 29" src="https://user-images.githubusercontent.com/119341279/215107818-e3bb9e18-4b94-4261-adf5-b2f5e13278b0.png">


- Next step was to set the add to playlist functionality.
    - Firstly I wanted a state that showed which playlist the user had selected to add to.
    - Then I had to push the selected songs into the selected playlist
        - The challenge here was that my array of playlists was an array of objects, so when I wanted to add songs to a playlist, I had to create a whole new object for the playlist, and replace it in the playlist array state.
    - Next step was to be able to remove some items and all items from a playlist.
        - Had a similar challenge to adding a playlist, but I was able to work out a helper function that removed duplicated code.
    - I wanted the user to be able to add and rename playlists
<img width="1056" alt="Screenshot 2023-01-27 at 13 33 43" src="https://user-images.githubusercontent.com/119341279/215107822-141c882b-1c80-458e-b1e2-48cd613507f1.png">


- Then I had to render the child components and pass the functions down effectively
<img width="752" alt="Screenshot 2023-01-27 at 13 34 32" src="https://user-images.githubusercontent.com/119341279/215107828-d3cd87a3-0221-41e1-957c-7467069dfa70.png">



- The parts I was most proud of:
    - The helper function for modifying the playlists array. Managed to save duplicated code.
<img width="960" alt="Screenshot 2023-01-27 at 13 30 13" src="https://user-images.githubusercontent.com/119341279/215107812-82f0b642-ebe1-4fdd-9157-1b033f6d40d5.png">
    - Using the useState() hook to make state setting more straightforward
<img width="746" alt="Screenshot 2023-01-27 at 13 29 38" src="https://user-images.githubusercontent.com/119341279/215107806-2db524da-3e03-4499-9651-00c5ef470679.png">
    - Being able to pass functions from the top component through child components to update states on the parent level.
    - Using a callback function on the checkboxes to introduce a side-effect I needed
<img width="961" alt="Screenshot 2023-01-27 at 13 31 44" src="https://user-images.githubusercontent.com/119341279/215107816-eb8e7ac4-2698-446c-88ca-599ea4649def.png">
    
    


## Challenges

- Passing functions through components was challenging at first
- Having the playlists array as an array of objects made the state tougher to update
- Refactoring code from using classes to functions with useState hooks introduced bugs.
    - Need to research useEffect better going forward
- Finding an api that had everything I needed for the MVP

## Wins

- Moving from managing one playlist to multiple playlists
- Refactoring to React Hooks made the code look much cleaner
- Responsive design
- Regular use of array methods

## Key Learnings

- Understanding how to operate using React as the functionality differs
- Understanding the pace I can work at. The design for my MVP app had a lot more functionality than I could end up managing
- New React techniques.
- Solidfying my knowledge on array methods and when to use each method.
- Doing CSS at the end worked well - this was a learning from a previous project

## Future Improvements

- Actually pulling some music files for the user to listen to (even if just samples)
- Allowing removal of playlists.
- Use of some Bootstrap components to improve the UI
- Allowing an order change in the playlists
- Introducing a third party API to allow the user to search for lyrics and background info on the song selected.
- Having a screen that recommends songs based on a search
- Sharing
