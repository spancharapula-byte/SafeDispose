# SafeDispose

SafeDispose is a web application that helps Orange County residents figure out how to properly dispose of common household items, including batteries, electronics, light bulbs, paint, medication, and appliances.

Live Website: https://safedispose.netlify.app 

## Why I Built It

Disposing of household items isn't always straightforward. Many items cannot simply be thrown into the trash, and finding the correct disposal instructions and disposal collection locations can be confusing. I built SafeDispose to make this information easier to find in one place.

## Features

- **Search and Categories:** Search for items or browse categories to find disposal instructions.
- **Disposal Guidance:** View step-by-step instructions, safety precautions, and official sources for each item.
- **Disposal List:** Save multiple items you want to dispose of in one list, which is stored locally in your browser.
- **Collection Location Matching:** Find collection locations that accept your saved items, ranked by how many items each location accepts.
- **Directions:** Open Google Maps directions and official information for each collection location.

## How To Use

Visit the live website and search for an item or browse through the categories. Open an item to read its disposal information, then save it to your disposal list. Once you've added your items, open your disposal list to view matching collection locations, along with official information and directions.

## Built With

**React, JavaScript, CSS, and Vite**

The application uses browser localStorage to save disposal lists and a structured catalog of items and collection locations using unique IDs to determine which locations accept each item.


