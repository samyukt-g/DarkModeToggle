# DarkModeToggle

In CSS, the colors of elements are set using pre-defined variables. Each theme is essentially just a different set of values for these variables. 
Different themes are declared in CSS `html[data-theme="dark"]`.

Here a toggle key is used to change the theme. Any other input can be used.

JavaScript takes the input from the toggle key and changes the value of the `data-theme` attribute of the `<html>` tag. This causes the value of the CSS variables to change as the dark theme has different values for them. 
