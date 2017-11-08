import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import CodeBlock from '../../components/CodeBlock';
import ImgCaption from '../../components/ImgCaption';

// images
import stepin from './img/p3/stepin.png';
import callstack from './img/p3/callstack.png';
import index from './img/p3/index.png';
import search from './img/p3/search.gif';

const Tutorial = () => (
  <div>
    <h2>The Call Stack</h2>

    <p>
      Now let’s add some functionality to our todo app. In this example we’ve added the ability to
      delete a task. Open the app in a new tab to follow along:
    </p>

    <p>
      <a
        href="https://mozilladevelopers.github.io/sample-todo/02-call-stack/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open to-do app in new tab.
      </a>
    </p>

    <p>
      Try adding a few tasks. Now try deleting the first task. It seems to be working. Now try
      deleting the final task. <em>Uh-Oh</em>. Something is not quite right. The top task is deleted
      from the app every time, regardless of which task we try to delete.
    </p>

    <p>
      Let’s dive into Debugger to see what’s going on in the code. Locate the{' '}
      <code>removeSingle</code>
      function on Line 39 of app.js. This is the function that handles the removal of a task. Insert
      a breakpoint on line 40, which will trigger right after an item is deleted. Try to delete the
      last item in our to-do list to trigger this breakpoint. Now we can step through the code to
      find the root of our problem.
    </p>

    <p>
      In the previous section, we learned how to use the ‘Step Over’ button to step across lines of
      JavaScript code. We can use the 'Step Over’ button here, but when we reach the{' '}
      <code>spliceItem</code> function, it will execute the function and then move on to the next
      line. This is great, but what if the problem exists inside that <code>spliceItem</code>{' '}
      function? This is where we can use the ‘Step In’ button.
    </p>

    <ImgCaption src={stepin} alt="step in" caption="The 'step in' button in the toolbar" />

    <p>
      The ‘Step In’ button is similar to the ‘Step Over’ Button, but it will allow us to step into a
      function for debugging, instead of executing it and moving on. Let’s use the ‘Step In’ button
      until we find ourselves on line 24, inside the <code>createList</code> function. Don’t worry
      if you are a bit confused about what is happening. It will all start to make sense.
    </p>

    <p>
      The <code>createList</code> function receives an object called <code>list</code>, and uses
      that object to create an updated to-do list. If we hover over the <code>list</code> object, we
      can see the list of to-do items that was provided to this function. We can also see that the
      item we intended to delete is still there, which means that this function was provided the
      wrong information. The bug is not in this function, but rather somewhere in the code before
      this function was invoked.
    </p>

    <p>
      On the right side of the Firefox Debugger, there is a section called{' '}
      <strong>Call Stack</strong>. This section provides us with information about which functions
      we have stepped into, what lines those function are on, and how deep we are in the call stack.
      If you are following along, you will see that there are four items in the call stack. We
      started at the <code>spliceItem</code> function, which invoked the <code>saveList</code>{' '}
      function, which invoked the <code>saveList</code> function, which invoked the{' '}
      <code>createList</code> function.
    </p>

    <ImgCaption src={callstack} alt="step in" caption="The call stack" />

    <p>
      The Call Stack section allows us to move back through the call stack so that we can figure out
      where this problem started. If we click on <code>saveList</code> in the call stack section, we
      can see that it is a simple (and probably unnecessary) function that takes the global{' '}
      <code>items</code> object and passes it to the <code>createList</code> function. The bug can’t
      be here so let’s click on the <code>spliceItem</code> function in the call stack. Do you spot
      the issue here? The <code>index</code> argument is undefined! Now we are getting somewhere.
    </p>

    <ImgCaption
      src={index}
      alt="index is undefinfed"
      caption="Spotting a bug by moving through the call stack"
    />

    <p>
      Let’s continue through the call stack to the <code>removeSingle</code> function. Look at the
      following:
    </p>
    <CodeBlock>
      {`
const index = el.dataset.number;
      `}
    </CodeBlock>
    <p>
      If we hover over <code>index</code> (or <code>number</code>), we see that it is undefined. If
      we hover over <code>dataset</code> we’ll see that there is no number property. There is only{' '}
      <code>index</code>. A typo! The line should say:
    </p>
    <CodeBlock>
      {`
const index = el.dataset.index;
      `}
    </CodeBlock>
    <p>Once this is fixed, everything starts working.</p>
  </div>
);

const Homework = () => (
  <DevHomework title="Firefox DevTools: Hot Tip">
    <p>
      It was easy to find the function in this example, but what if we had fifty functions across
      multiple files? Thankfully, you can search for a function in the source pane. Just hit{' '}
      <span className="shortcut">shift</span> + <span className="shortcut">command</span> +{' '}
      <span className="shortcut">O</span> on Mac or <span className="shortcut">shift</span> +{' '}
      <span className="shortcut">control</span> + <span className="shortcut">O</span> on Windows to
      bring up a search field in the source pane. You can search for a function or arrow through the
      provided list.
    </p>

    <ImgCaption src={search} alt="searching" caption="Searching for a function" dark />
  </DevHomework>
);

export default () => <Main currentPageNum={3} tutorial={<Tutorial />} homework={<Homework />} />;
