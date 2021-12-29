# MyReads Project

This application has been created using create-react-app. It's an application where you can view books that you have read / want to read / currently reading. You can also search for books and add them to your categories/shelves mentioned before.

## TL;DR

To start the application:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

├── CONTRIBUTING.md
├── .env
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
├── components # a folder containing all components other than App.js and index.js
│   ├── Home.js # homepage component (showing the bookshelves)
│   ├── Search.js # search component (showing the search page)
│   └── Book.js
│   └── BookShelf.js
│   └── BookShelfChanger.js
├── App.css # Styles for your app. Feel free to customize this as you desire.
├── App.js # This is the root of your app. Contains static HTML right now.
├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
├── icons # Helpful images for your app. Use at your discretion.
│   ├── add.svg
│   ├── arrow-back.svg
│   └── arrow-drop-down.svg
├── index.css # Global styles. You probably won't need to change anything here.
└── index.js # You should not need to modify this file. It is used for DOM rendering only.
