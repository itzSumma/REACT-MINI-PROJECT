# Follow Button App

A React app I built while learning useState hook.

🔗 Live: [follow-button-app.netlify.app](https://follow-button-app.netlify.app)

---

## What it does

- Click **Follow** → like count goes up + shows a message
- Click **Unfollow** → like count goes down + shows a message
- Click **Reset** → everything goes back to 0, message disappears

---

## What I used

- React (useState)
- Vite
- CSS

---

## Run it locally

```bash
npm install
npm run dev
```

---

## What I learned

This is my first React project. I built it as a task from my course module.

While building this, I learned how `useState` works:

- `useState` lets you store a value that React watches. When it changes, the UI updates automatically.
- You can't change state directly like `likes = 5`. You have to use the setter function like `setLikes(5)`.
- The initial value inside `useState()` is what the variable starts as — `0`, `false`, or `null`.
- In this project I used three states — one for the like count, one to track follow status, and one to control which message is visible.