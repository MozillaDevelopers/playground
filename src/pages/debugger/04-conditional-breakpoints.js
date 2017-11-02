import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import CodeBlock from '../../components/CodeBlock';

const Tutorial = () => (
  <div>
    <h2>Conditional Breakpoints</h2>
    <p>
      Breakpoints are a powerful tool for debugging JavaScript code, but what if we have a
      breakpoint inside a loop, or a function that is constantly being called? It can become tedious
      to have to constantly be resuming the execution of our code. It would be much better if we
      could control when a breakpoint is triggered. Lucky for us, Firefox DevTools has a useful
      feature called conditional breakpoints.
    </p>

    <p>
      A conditional breakpoint allows us to associate a condition with a breakpoint. When the
      program reaches the a conditional breakpoint, the debugger pauses only if the condition
      provided evaluates to true.
    </p>

    <p>
      The best way to understand this, is with an example. Open up the to-do app below in a new tab
      and follow along.
    </p>

    <p>
      <a
        href="https://mozilladevelopers.github.io/sample-todo/03-conditional-breakpoints/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open to-do app in new tab.
      </a>
    </p>

    <p>
      In the first tutorial, we added a breakpoint inside the <code>addTodo</code> function. This
      breakpoint can be useful, but it will trigger every single time we add a to-do item.
    </p>

    <p>
      Let’s say we only want to trigger this breakpoint when the to-do item contains the word
      "turtle". We can do this by right clicking on the line number we want to add a breakpoint to
      (in this case, line 24), and choosing “Add Conditional Breakpoint” from the menu.
    </p>

    <img src="http://placehold.it/1000x300" alt="placeholder" />

    <p>We can now enter an expression. Try the following:</p>

    <CodeBlock>
      {`
title.indexOf("turtle") != -1;
      `}
    </CodeBlock>

    <p>
      The indexOf() method will returns -1 if the specified value (in this case, “turtle”) is not
      found. This means the expression provided to our conditional breakpoint will only evaluate to
      true if the string contains the word “turtle”.
    </p>

    <img src="http://placehold.it/1000x400" alt="placeholder" />

    <p>
      We can use any type of expression for a conditional breakpoint. We can even use console.log. A
      console.log expression will return <code>undefined</code> so it won’t pause execution, but it
      will still print to the console. Let’s try it out.
    </p>

    <p>
      Add a conditional breakpoint on line 68, right after we define the <code>index</code>{' '}
      variable. Enter the following as the condition:
    </p>

    <CodeBlock>
      {`
console.log(items[index].title;
      `}
    </CodeBlock>

    <p>
      Now, every time we delete an item, the name of that item will be printed to the console. We
      get all of the benefits of using <code>console.log</code>, but we don’t have to worry about
      littering our code with lines that we will need to eventually delete.
    </p>
  </div>
);

const Homework = () => (
  <DevHomework title="Firefox DevTools: Hot Tip">
    <p>
      Occasionally, we may find ourselves wanting to define our breakpoints in our code, rather than
      in the debugger. If we call <code>debugger</code> from our code, then Firefox Debugger will
      pause execution at that line. Here is an example:
    </p>

    <CodeBlock>
      {`
const addTodo = (e) => {
  debugger;
  e.preventDefault();
  const title = document.querySelector('.todo__input').value;
  const todoForm = document.querySelector('.todo__add');
  const todo = {
    title,
    done: false,
  };

  items.push(todo);
  saveList();
  todoForm.reset();
}
      `}
    </CodeBlock>

    <p>
      Notice how a line has been added that says: <code>debugger</code>. This means we do not have
      to add the breakpoint from Firefox DevTools.
    </p>

    <p>
      Try it out.{' '}
      <a
        href="https://mozilladevelopers.github.io/sample-todo/code-breakpoint/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open this link
      </a>, launch Firefox Debugger, and add a task. Execution will be paused on that line because
      we defined that breakpoint in our code.
    </p>
  </DevHomework>
);

export default () => <Main currentPageNum={4} tutorial={<Tutorial />} homework={<Homework />} />;
