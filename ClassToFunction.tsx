import { useEffect } from 'react';

//Component did Mount
//useEffect(() => {}, [])

//Component did Update
//useEffect(() => {});

//Component will unMount
//useEffect(() => {
  //return () => console.log()
//}, [_]);


/* 
useEffect() is a React Hook that tells React to DO SOME CODE WHEN (pick one):

This component re-renders.

This component mounts.

The state of a value changes.

There are three ways to use useEffect():

useEffect(() => {}): Runs after every re-render.

useEffect(() => {}, []): Runs only on mount.

useEffect(() => {}, [value]): Runs on mount and when the value changes.

useEffect() is used for the following:

Event Listeners.

DOM manipulation.

Subscriptions (real-time updates).

Fetching Data from an API.

Clean up when a component unmounts. 
*/