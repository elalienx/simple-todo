# Todo list

This is a simple todo list based on the De-Coding the Technical Interview Process book by Emma Bostian.

# Installation

In order to run the project you need to have Node.js installed in your computer. Here are the steps to open the project: 0. `npm install` to install the dependencies. 0. `npm run` to view the project.

# Tech stack

0. NPM, Webpacl, Create React App for the app bundler
1. React

# Project structure

The `App.jsx` inside the `scr/` folder is the entry point of the project.
The components, its test and its specific CSS styles are placed inside the `components/` folder.
For opening the modal window we use `createPortal` from `ReactDOM`.

# Task

## Main requirements

0. Add tasks ✅
1. Complete tasks (mark them as done)
2. Edit tasks
3. Delete tasks
4. See how many tasks are remaining

## Extra requirements

0. Adding animations when task are deleted
1. The ability to favorite a task and have it appear at the top of the list
2. The ability to create groups or categories of tasks (i.e. home, work)
3. Light and dark theme

## Deliverables

0. Hosted with password to enter.
1. Private git repo.
2. Provide Readme file.

## Notes

- Deleting tasks means i cannot use indexes for the tasks. I can use the date for it.
- Creating groups needs a special field at creation time. Moving items from categories wasn't requested.
- Creating groups also means keeping a separate array for the groups?
