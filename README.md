# step-bullets-indicator
Ionic step bullets component example.

This is an angular component inside a Ionic project where you can specify the number of bullets do you want and the active one.
It is also configurable if the bullets has the number of each one inside them.

The number of bullets should be between 3 and 15. The minimThere are always only 3 visible bullets. 

You can change params and update with the form of the page.

![step-bullets-indicator-image](/demo/demo-screenshot.PNG)

## Usage

To use it simply copy the step-bullets-indicator folder inside your project and add to the app or page module dependencies. 
In the page you want to use it, just add this code.

```html
<step-bullets-indicator [bulletsList]="bulletsList" [selectedIndex]="selectedIndex" [showNumbers]="showNumbers"></step-bullets-indicator>

```

The params allow set up the component:

<ul>
  <li>bulletsList: items list with text that will be shown (String []).</li>
  <li>selectedIndex: number to set up the active bullet (number).</li>
  <li>showNumbers: if false, only bullets without numbers will be shown (boolean).</li>
</ul>

All this params should be define in the container page of the component, like has been done in this project in home page.
