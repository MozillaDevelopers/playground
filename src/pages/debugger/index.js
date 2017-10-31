import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';

const Tutorial = () => (
  <div>
    <h2>Introduction to Firefox Debugger</h2>

    <p>
      <strong>Stop using console.log!</strong>
    </p>
    <p>
      Are you still using console.log to debug your JavaScript code? It is OK to admit. Using
      console.log is easy and convenient, but it has limitations. It isn’t great for catching things
      as they happen, or diving deep into code to see exactly where it is broken. To do that, you’ll
      need a full-featured debugger. The Firefox Debugger has comprehensive tools to evaluate and
      repair broken code. Once you learn the basics, you’ll find that using a debugger is not only
      fast and easy, but it can save you from hours of frustration, and potential
      ‘bang-head-on-desk’ sessions.
    </p>
    <p>
      We’ll learn the basics of Firefox Debugger by debugging a simple to-do app. You will need
      Firefox to follow along. Don’t have Firefox? Check out{' '}
      <a href="#">Firefox Developer Edition</a>.
    </p>
    <p>
      Before diving in, let’s take a look at the Debugger interface. Hit option-command-S on Mac or
      option-control-S on Windows to open the Debugger.{' '}
    </p>
    <p>
      The Debugger is divided into three panes: The source list pane, the source pane, and a tool
      pane.
    </p>
    <img src="http://placehold.it/1000x500" alt="placeholder" />
    <p>
      The source list pane shows all the JavaScript files related to the current page or project.
      The source pane shows the content of those files, and the tool pane contains the toolbar,
      watch expressions, breakpoints, the call stack, and variables.{' '}
    </p>
    <p>The toolbar has controls for pausing and stepping into (and out of) scripts as you debug.</p>
    <img src="http://placehold.it/1000x300" alt="placeholder" />
    <p>
      Don’t worry if you don’t understand what all of these terms and symbols mean. We’ll cover them
      in the following sections. Just take note of where things are so that you can follow along.
    </p>
    <p>Now that we’ve reviewed the Debugger interface, lets use it to fix a broken to-do app.</p>
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>
      Sometimes JavaScript code will be “minified” so that the file size is smaller, and faster to
      load. This is great for your users, but it can make the code impossible to read in the
      Debugger. Thankfully, Firefox has a great option for viewing minified code. When you view a
      minified file in the source pane, an icon will appear at the bottom. After clicking this icon,
      Debugger will format the code into something that is human-readable, and display it as a new
      file in the source pane.
    </p>
    <p>
      Give it a try! The link below will bring you to a to-do app that is using a minified
      JavaScript file. Simply:
    </p>
    <ol>
      <li>Open Debugger (option-command-S on Mac or option-control-S on Windows)</li>
      <li>Find and click on app.js in the source list pane</li>
      <li>Locate and click on the format icon</li>
    </ol>
  </DevHomework>
);

export default () => <Main currentPageNum={1} tutorial={<Tutorial />} homework={<Homework />} />;
