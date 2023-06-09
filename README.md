## Calculator

This is a calculator for calculations with the basic operators.
You can make your inputs with mouse clicks the keyboard or both.

```
listenToMouseClick()
```

This function registers the mouse click and which button was clicked.
Depending on the button, different actions follow.

```
document.addEventListener("keydown,(event) =>{})
```

Does the same as the previous function but for keyboard inputs.

```
showNumber1()
showNumber2()
```

These functions get the numbers before and after the selected operator. They are being pushed into an array
and then joined into one number to be shown on the lower display and saved for later calculation.

```
showCalculation()
```

Gets every input made and pushes them into an array, joins them and shows them on the upper display,
so you can follow your current calculation.

```
calculation()
```

Basic function that calculates the input numbers based on the selected operator and rounds the result if necessary.
Then it shows the result on the lower display.

```
reset()
```

When you click on the "AC" button (or the "del" key on your keyboard), this function resets all inputs made.
