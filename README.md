# Dev Stack

Dev Stack is a web application where users can explore different technologies and build their own development stack. Users can add technologies to their stack and remove them when needed.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify

## Features

- Explore different frontend, backend, database, language, styling, DevOps, and tool technologies.
- Add technologies to your personal stack and remove them when needed.
- Prevent duplicate technologies and show toast notifications for different actions.

---

# React Questions

## 1. What is JSX, and why is it used in React?

JSX is a syntax that is used to write HTML-like code inside JavaScript. It makes React easier to read and create.

## 2. What is the difference between props and state?

Props are used to passed data from a parent component to a child component. State is used to managed data inside a component and can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows us to store and update data in a component. In this project, I used it to store the selected technologies in the `selectedStack`.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used for side effects such as fetching data. It can be used to load JSON data when a component is rendered. In this project I used 'Suspense + use()' to load JSON data.

## 5. Why does every item in a .map() list need a unique key prop?

A unique `key` helps React identify each item in a list. This helps React update the correct item accurately.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. In this project, I used it in the `YourStack` component to show an empty message when no technology is selected.

```tsx
{selectedStack.length === 0 ? (
    <div>Your stack is empty.</div>
) : (
    <div>
        {Selected technologies}
    </div>
)}


## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed from a parent component to a child component using props. A child can send something back by calling a function passed from the parent through props.

