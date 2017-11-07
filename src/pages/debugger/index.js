import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import DownloadLink from '../../components/DownloadLink';
import ImgCaption from '../../components/ImgCaption';

// images
import overview from './img/p1/overview.png';
import tools from './img/p1/tools.png';

const Tutorial = () => (
  <div>
    <h2>Introduction to Firefox Debugger</h2>
    <p>
      Are you only using <code>console.log</code> to debug your JavaScript code? It is OK to admit.
      Using
      <code>console.log</code> is easy and convenient, but it has limitations. It isn’t great for
      catching things as they happen, or diving deep into code to see exactly where it is broken. To
      do that, you’ll need a full-featured debugger. The Firefox Debugger has comprehensive tools to
      evaluate and repair broken code. Once you learn the basics, you’ll find that using a debugger
      is not only fast and easy, but it can save you from hours of frustration, and potential
      ‘bang-head-on-desk’ sessions.
    </p>
    <p>
      We’ll learn the basics of Firefox Debugger by debugging a simple to-do app. You will need
      Firefox to follow along. Don’t have Firefox? Check out{' '}
      <DownloadLink content="debugger-part1">Firefox Developer Edition</DownloadLink>.
    </p>
    <p>
      Before diving in, let’s take a look at the Debugger interface. Hit{' '}
      <span className="shortcut">option</span> + <span className="shortcut">command</span> +{' '}
      <span className="shortcut">S</span> on Mac or <span className="shortcut">option</span> +{' '}
      <span className="shortcut">ctrl</span> + <span className="shortcut">S</span> on Windows to
      open the Debugger.{' '}
    </p>
    <p>The Debugger is divided into three panes:</p>
    <ImgCaption src={overview} alt="overview" caption="An overview of the Firefox Debugger Panel" />
    <p>
      <ul className="list">
        <li>
          The <strong>source list pane</strong> shows all the JavaScript files related to the
          current page or project.
        </li>
        <li>
          The <strong>source pane</strong> shows the content of those files.
        </li>
        <li>
          The <strong>tool pane</strong> contains info and tools.
        </li>
      </ul>
    </p>

    <p>The tool pane can be broken down into five sections:</p>

    <ImgCaption src={tools} alt="tools" caption="All of the tools available in the tools pane" />

    <p>
      <ul className="list">
        <li>
          The <strong>toolbar</strong> has buttons that control the debugger's movement through the
          script.
        </li>
        <li>
          The <strong>watch expressions</strong> section allows us to watch expressions as
          executions are paused.
        </li>
        <li>
          The <strong>breakpoints</strong> section displays all of the breakpoints that have been
          set. Next to each breakpoint is a checkbox to enable or disable that breakpoint.
        </li>
        <li>
          The <strong>call stack </strong>section displays each level of the call stack, as well as
          the function name, filename, and line number.
        </li>
        <li>
          The <strong>scopes</strong> section displays all objects that are in scope.
        </li>
      </ul>
    </p>

    <p>
      Don’t worry if you don’t understand what all of these terms and symbols mean. We’ll cover them
      in the following sections. Just take note of where things are so that you can follow along.
    </p>
    <p>Now that we’ve reviewed the Debugger interface, let's use it to fix a broken to-do app.</p>
  </div>
);

const Homework = () => (
  <DevHomework title="Firefox DevTools: Hot Tip">
    <p>
      Sometimes JavaScript code will be “minified” so that the file size is smaller and faster to
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
    <ol className="list">
      <li>
        <a
          href="https://mozilladevelopers.github.io/sample-todo/minified/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit this Link
        </a>
      </li>
      <li>
        Open Debugger (<span className="shortcut">option</span> +{' '}
        <span className="shortcut">command</span> + <span className="shortcut">S</span> on Mac or{' '}
        <span className="shortcut">option</span> + <span className="shortcut">control</span> +{' '}
        <span className="shortcut">S</span> on Windows)
      </li>
      <li>Find and click on app.js in the source list pane</li>
      <li>Locate and click on the format icon</li>
    </ol>
  </DevHomework>
);

export default () => <Main currentPageNum={1} tutorial={<Tutorial />} homework={<Homework />} />;
