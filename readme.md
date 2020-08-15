# to-do-list App for Gsquad

### Problem
Build a small app that makes a to-do-list.

No need for backend.

### Analysis
The to-do-list must:
* Be capable of adding a task to a list.
* Render a list, large lists too.
* Show pending or all tasks.
* Show total, completed, and pending tasks count.
* Clear the task list.
* Remove the completed tasks from the list.
* Edit an already added task inline.
* Mark a Task as completed.


### Strategy
To keep simple and clean the code, no extra state management libary was used, instead it was used the context api and hooks (useContext and useReducer).
Function components were used instead of class components.
The state management was separated from the views, the idea was to keep the views as simple as posible and only suscribe to state queries or dispatch events.


The following events where developed on the app (availables on the app for dispatching):
* ADD_TODO -> Add a new Task to the list.
* REMOVE_TODO -> Remove a task from the list.
* TOGGLE_COMPLETE_TODO -> Change the task status between completed | pending.
* SAVE_TODO -> Saves changes to an edited task.
* CLEAR_COMPLETED -> Remove completed tasks from the list.
* EDIT_MODE_ON_TODO -> Enable inline editing of a task (for updating the text/description).
* UPDATE_EDITED_TEXT -> Updates the text of the task that its been edited inline.
* EDIT_MODE_OFF_TODO -> Disable inline editing.
* TOGGLE_SHOW_ALL_TODOS -> Updates the filter, for showing all or only uncompleted tasks.
* RESET -> Clears the task list completly.

The following queries were developed on top the state:
* completedTodoCountQuery -> counts the completed tasks.
* totalTodoCountQuery -> counts the total tasks added to the app.
* notCompletedTodoCountQuery -> counts the not completed tasks.
* getTodoByIdQuery -> get a task from the state by the task id.
* getFilteredTodosQuery -> get the task list applying a filter (show all | show only) the not completed tasks.

FlatList was used for displaying the tasks, for better performance. 
react-native-keyboard-aware-scroll-view library was used for avoiding the keyboard to cover the input text fields.
uuid library was used to generate randoms ids for the new tasks.

Simple and clean desing for the views was opted against any framework (like react-native-elements or such).

### Time spent
Analysis 40 minutes.
Setting up environment 20 minutes.
State management 30 minutes.
Views 70 minutes.
Documentation 40 minutes.

Total 3:30hs

### Tecnologies
The app have been developed using expo-cli (bare minimal template), plain javascript, and minimal dependencies: `react-native-keyboard-aware-scroll-view` `react-native-get-random-values` `uuid`, everything else was provided by expo sdk.

### How to run it
1. Clone the repository
2. `$ npm install`
3. `$ cd ios && pod install && cd ..`
4. `$ npm run ios` or `$ npm run android` (must have an ios simulator or android emulator/device attached).
5. `$ npm start` (some times npm run ios doesnt start metro)

