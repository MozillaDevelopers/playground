webpackJsonp([0xf5d73857f1be],{225:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),o=l(n),i=a(44),r=l(i),u=a(12),s=l(u),h=a(14),d=l(h),c=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"Find the Value of a Variable"),o.default.createElement("p",null,"A good first step towards moving away from console.log is to tackle one of its primary use cases: finding the value of a variable."),o.default.createElement("p",null,"Let’s take a look at a simple to-do app:"," ",o.default.createElement("a",{href:"#",target:"_blank"},"Open to-do app in new tab.")),o.default.createElement("p",null,"This app has a function called ",o.default.createElement("code",null,"addTodo")," which will take the value of the input form, create an object, and then push that object onto an array of tasks. Let’s test it out by adding a new task. You’d expect to have this new task added to the list, but instead you see"," ",'"[object HTMLInputElement]".'," "),o.default.createElement("p",null,"Something is broken, and we need to debug the code. The temptation is to start adding console.log throughout the function, to pinpoint where the problem is:"),o.default.createElement(d.default,null,"\nconst addTodo = e => {\n  e.preventDefault();\n  const title = document.querySelector(\".todo__input\");\n  console.log('title is: ', title);\n  const todo = { title };\n  console.log('todo is: ', todo');\n  \n  items.push(todo);\n  saveList();\n  console.log(‘The updated to-do list is: ‘, items);\n  document.querySelector(\".todo__add\").reset();\n};\n      "),o.default.createElement("p",null,"This can work, but it is cumbersome and awkward. We also have to remember to remove these lines after fixing the code. There’s a much better way to do it with Debugger using what is called a breakpoint."),o.default.createElement("p",null,"A breakpoint is something that signals to Debugger that we wish to pause at a specific place in the code. While paused, we can view the value of a variable at that particular point in the code. Using the example linked above, let’s add a breakpoint to line 12. We can do this by clicking on the number 12 to the left of the code. If done correctly, a little blue flag will appear."," "),o.default.createElement("img",{src:"http://placehold.it/1000x500",alt:"placeholder"}),o.default.createElement("p",null,"Now try adding a task. Because of the breakpoint, execution of the code will pause inside the",o.default.createElement("code",null,"addTodo")," function, just before line 12 is executed. We want to track the value of the ",o.default.createElement("code",null,"title")," and ",o.default.createElement("code",null,"todo")," variables to see why the value of the input form isn’t being used when rendering the to-do list. There are a few ways we can check the value of a variable."),o.default.createElement("h4",null,"Method 1: Use the console"),o.default.createElement("p",null,"When we hit a breakpoint, and pause execution, we can use the console within the scope of where the code was paused. This means we can type ",o.default.createElement("code",null,"title")," into the console, hit enter, and view the value of that variable."),o.default.createElement("h4",null,"Method 2: Hover"),o.default.createElement("p",null,"We can also hover over the variable in the source pane to view the value of that variable. Try hovering over other items such as an object or a function. Hovering provides us with quick access to all sorts of information that can be helpful for debugging."),o.default.createElement("img",{src:"http://placehold.it/1000x500",alt:"placeholder"}),o.default.createElement("h4",null,"Method 3: Scope Section"),o.default.createElement("p",null,"At the bottom right of the Firefox Debugger is a section that displays all objects that are in scope at this point in the program. The first block will list the variables in the current block/function and their values."),o.default.createElement("img",{src:"http://placehold.it/1000x500",alt:"placeholder"}),o.default.createElement("p",null,"If you tried any of those methods while paused at line 12, you may have noticed a little problem: all of the variables are undefined. This is because execution has paused just before line 12, and the lines that would assign a value to those variables haven’t been executed yet. We need to continue to move through the script until those variables are assigned a value. This is where the toolbar comes in."),o.default.createElement("img",{src:"http://placehold.it/1000x500",alt:"placeholder"}),o.default.createElement("p",null,"As a refresher, here is what those first four buttons of the toolbar do:"),o.default.createElement("dl",null,o.default.createElement("dt",null,"Play/Pause"),o.default.createElement("dd",null,"Pauses or resumes execution of the script you're debugging. When it displays a \"play\" icon, that means the script is paused, either because you've paused it with this button or because you've hit a breakpoint."),o.default.createElement("dt",null,"Step over"),o.default.createElement("dd",null,"Steps across current line of JavaScript code."),o.default.createElement("dt",null,"Step in"),o.default.createElement("dd",null,"Steps into the function call on the current line of JavaScript code."),o.default.createElement("dt",null,"Step out"),o.default.createElement("dd",null,"Runs the script until the current function exits.")),o.default.createElement("p",null,"Right now, we are going to focus on the ‘Step Over’ button. This will step through the code one line at a time. If it comes across a function, it will execute the entire function. This is different from the ‘Step In’ button which will enter into that function instead of executing it. Don’t worry about understanding the difference just yet. We’ll cover ‘Step In’ more in the next section."),o.default.createElement("p",null,"Press the ‘Step Over’ button once. The code is still paused, but line 13 is now highlighted. This means line 12 has executed. The ",o.default.createElement("title",null,"title")," variable is still undefined, but that is because we have paused just before line 13. Press ‘Step Over’ one more time and...now we are getting somewhere! We can now hover over ",o.default.createElement("code",null,"title")," to get the value. We can also check the scope section."," "),o.default.createElement("img",{src:"http://placehold.it/1000x500",alt:"placeholder"}),o.default.createElement("p",null,"If we use one of the three methods to look at the value of ",o.default.createElement("code",null,"title"),", we can spot our issue. The value isn’t a string like we’d expect, but rather it is an entire object! If we hover over ",o.default.createElement("code",null,"title")," and scroll through its different properties, we’ll find that we should have referenced the ‘value’ property of the object instead of the entire object itself. Fix line 13 and the app will work properly."),o.default.createElement("p",null,"When we are done stepping through the code, we can press the 'play/pause' button which will resume execution of the script (until it hits another breakpoint)."),o.default.createElement("p",null,"Phew. That was a lot of information. Try adding some other breakpoints in the app, and stepping through the code a bit more. As you get comfortable with the basics of breakpoints and stepping through code, you will start to understand how powerful Debugger is."),o.default.createElement("p",null,"When you are ready, move on to the next section of the tutorial to learn more about the debugging your code with Debugger"))},p=function(){return o.default.createElement(s.default,{title:"Firefox DevTools: Hot Tip"},o.default.createElement("p",null,"Another handy tip for monitoring the value of a variable (or any expression) is to use the Watch Expressions section in the sidebar. You can set a watch expression by clicking “Add Watch Expression”, and typing the expression (in this case a variable), that you’d like to watch. Using the example above, try adding an expression for ‘title’ and another for ‘todo’. Set a breakpoint on line 12, add a todo to trigger the breakpoint, and start stepping through the function. When a value is assigned to the variable, the value will appear in the ‘Watch Expressions’ section. Handy right?"),o.default.createElement("img",{src:"http://placehold.it/1000x500",alt:"placeholder"}))};t.default=function(){return o.default.createElement(r.default,{currentPageNum:2,tutorial:o.default.createElement(c,null),homework:o.default.createElement(p,null)})},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-debugger-02-check-variable-values-js-f7863d1b9a2696b9753b.js.map