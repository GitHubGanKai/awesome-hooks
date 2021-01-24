## Overview

Here is a modest list of hooks that I use every day. I will add more in the next few days, keep watching. And if you have some good hooks I would love to add them. So feel free to open a pull request.

## Hooks



### `useFetch` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useFetch.js)

Useful hook if you want to fetch data.

#### How to use:

```javascript
const { response, errors } = useFetch("https://github.com/api/get");
```

Demo

----



### `useFullScreen` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useFullScreen.js)

Useful hook if you want to fullscreen an element of your page.

#### How to use:

```javascript
const { elementFS, triggerFS, exitFS, isFS } = useFullScreen();
```

Then use like this :

```html
<div ref={elementFS}>I want to fullscreen this div.</div>
<button onClick={triggerFS}>Trigger fullscreen</button>
<button onClick={exitFS}>Exit fullscreen</button>
```

Check if fullscreen is triggered :

```javascript
console.log(isFS);
```

-----



### `useHover` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useHover.js)

Useful hook if you want to detect when the mouse is hovering an element.

#### How to use

Import hook :

```javascript
import useHover from "hooks/useHover";
```

Add :

```javascript
const [hoverRef, isHovered] = useHover();
```

Then use like this :

```javascript
<div ref={hoverRef}>{isHovered ? "Hovered !" : "Hover me !"}</div>
```

-----



### `useKeyPress` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useKeyPress.js)

Useful hook if you want to detect when user is pressing a specific key.

#### How to use

Import hook :

```javascript
import useKeyPress from "hooks/useKeyPress";
```

Then use like this :

```javascript
const hKeyPressed = useKeyPress("h");

console.log(hKeyPressed && "Hello !");
// → Hello !
```

----



### `useSlug` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useSlug.js)

Useful hook if you want to slug content for urls.

#### How to use

Import hook :

```javascript
import useSlug from "hooks/useSlug";
```

Then use like this :

```javascript
useSlug("Omégà! Pèlô Fùll");
// → omega-pelo-full
```

#### Demo

---



### `useSwap` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useSwap.js)

Useful hook if you want to swap the keys and values of a given object.

#### How to use

Import hook :

```javascript
import useSwap from "hooks/useSwap";
```

Then use like this :

```javascript
useSwap({ name: "A", init: "bootstrap" });
// → {A: "name", bootstrap: "init"}
```

#### Demo

---



### `useTitle` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useTitle.js)

Useful hook if you want to set a specific title to page.

#### How to use

Import hook :

```javascript
import useTitle from "hooks/useTitle";
```

Then use like this :

```javascript
useTitle("My title");
```

#### Demo

---



### `useToggle` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useToggle.js)

Useful hook if you want display/hide something with toggle.

#### How to use

Import hook :

```javascript
import useToggle from "hooks/useToggle";
```

Then use like this :

```javascript
const [open, toggle] = useToggle(false);

<Button onClick={toggle}>Show filters</Button>;

{
	open && <Filters />;
}
```

#### Demo

---

### `useEventListener` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useEventListener.js)

Useful hook if you want to create an event handler.

#### How to use

Import hook :

```javascript
import useEventListener from "hooks/useEventListener";
```

Then use like this :

```javascript
const [coords, setCoords] = useState({ x: 0, y: 0 });

useEventListener("mousemove", ({ clientX, clientY }) =>
	setCoords({ x: clientX, y: clientY })
);

console.log(coords);
```

#### Demo



----

### `useInfiniteScroll` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useInfiniteScroll.js)

Useful hook if you want to add the infinite scroll feature to your website.

#### How to use

Import hook :

```javascript
import useInfiniteScroll from "hooks/useInfiniteScroll";
```

Then use like this :

```javascript
const [isFetching, setIsFetching] = useInfiniteScroll(fetchData);

const fetchData = () => {
	// ...
};
```

#### Demo

---

### `useFavicon` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useFavicon.js)

Useful hook if you want to set a specific favicon to the page.

#### How to use

Import hook :

```
import useFavicon from "hooks/useFavicon";
```

Then use like this :

```
useFavicon("/path/image.png", "image/png");
```

#### Demo

---

# useLocalStorage

`useLocalStorage` behaves just like the native react `useState` hook, except that any and all state updates are automatically saved in the browser's localstorage under the provided key. The first argument is the name of the key to save it under, and the second argument is the initial value. The hook returns the current state and an updater function just like `useState`.

When the app reloads, the hook will first look for a previously cached value. If one is found, it will be used as the initial value instead of the provided initial value.

```javascript
import { useLocalStorage } from 'hooks'

const App = () => {
  const [state, setState] = useLocalStorage("LOCAL_STORAGE_KEY", initialValue)

  return (
    <div>App</div>
  )
}
```



# useFiler

`useFiler` manages a simple virtual file system using the browser's localstorage. This is especially useful for quick prototyping. Any type of data can be saved in a file provided that it's JSON-serializable.

### Basic Usage

When the hook is first initialized it returns the files as an empty object.

```javascript
import { useFiler } from 'hooks'

const App = () => {
  const [files, {add, remove, update, clear}] = useFiler("LOCAL_STORAGE_KEY")

  return (
    <div>App</div>
  )
}
```

#### File Structure

By default, each file has an automatically generated id generated using the [shortid](https://www.npmjs.com/package/shortid) package. Each single file is structured as follows:

```json
{
  id: "ogn41na",
  created: 489108491,
  modified: 489108561,
  data: "The file's data."
}
```

The `files` object returned as the first parameter of the hook represents all of the current files as an object, with each file's ID as the key, and the file as the value.

#### Adding Files

The first parameter of the add function may be any JSON-serializable data and is required. The data will be saved as a new file with an automatically generated ID. If you would like to override the automatically-generated ID, you may pass a String or Int as the second parameter and it will be used as the ID. If the ID already exists, the existing file will be overwritten.

```javascript
add("Any JSON-serializable data to be saved as a new file.")
```

#### Updating Files

To update a file, pass as the first parameter, the ID of the file you want to update. The second parameter is the data you want to overwrite the file with.

```javascript
update("jal31af", "The new data to overwrite the file with.")
```

As with the native `useState`, `update()` accepts a callback function injected with the previous file.

```javascript
update("jal31af", file => ([...file.data, "New item"]))
```

#### Removing Files

The remove function simply accepts a file ID of the file you wish to remove.

```javascript
remove("zoep31a")
```

#### Clearing all Files

```javascript
clear()
```



# useKeyboardShortcut

The `useKeyboardShortcut` hook listens to "keydown" events on the Document, and will call the provided action when the specified Javascript keyCode is detected. The shortcut listener is enabled by default, but can be declaratively disabled by passing `disabled: true` to the hook.

[keyboard.info](https://keycode.info/) is a great resource for finding Javascript keyCodes.

#### Basic Usage

```javascript
import { useKeyboardShortcut } from 'hooks'

const App = () => {
  const submit = () => {
    console.log('Submitted')
  }

  const {enable, disable} = useKeyboardShortcut({
    keyCode: 13,
    action: submit,
    disabled: false // This key is not required
  })

  return (
    <div>
      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button>
    </div>
  )
}
```

With keyboard shortcuts, there are times when you may want to imperatively enable or disable the shortcut listener. For these occasions, the hook returns `enable` and `disable` functions.

# 

----



# useOnClickOutside

`useOnClickOutside` accepts a function that will be called when there's a click outside of a target element. The hook returns a ref, which you pass to the ref attribute of the element you want to target.

#### Basic Usage

```javascript
import { useOnClickOutside } from 'hooks'

const App = () => {
  const handleClickOutside = () => {
    console.log("You clicked outside of the blue box")
  }

  const outsideRef = useOnClickOutside(handleClickOutside)

  return (
    <div>
      <div ref={outsideRef}> I'm a blue box </div>
    </div>
  )
}
```

#### Disabling the listener

For performance reasons, you may not want to always listen for clicks outside of an element. For these times you can pass a `Boolean` as a second parameter to this hook representing whether or not the listener should be disabled like so:

```javascript
import { useState } from 'react'
import { useOnClickOutside } from 'hooks'

const App = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const disableOnOutside = () => setIsDisabled(true)

  const handleClickOutside = () => {
    console.log("You clicked outside of the blue box")
  }

  const outsideRef = useOnClickOutside(handleClickOutside, isDisabled)

  return (
    <div>
      <button onClick={disableOnOutside}>Stop listening for outside clicks</button>
      <div ref={outsideRef}> I'm a blue box </div>
    </div>
  )
}
```











## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!