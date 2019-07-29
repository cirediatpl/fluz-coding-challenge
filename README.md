# fluz-coding-challenge

## Solution

The production version of the page can be found [here](https://cirediatpl.github.io/fluz-coding-challenge/) or at this url: https://cirediatpl.github.io/fluz-coding-challenge/

## Screenshots

![](./src/images/fluz_solution.gif)

## Description

This coding challenge solution uses React, JS, HTML, and CSS in order to replicate the carousel section of the Fluz homepage found on [https://fluz.app/](https://fluz.app/) using assets provided by the company. The front-end results contain basic responsive/mobile optimization.

## Author

[Peter Hwang](https://github.com/cirediatpl)

Please feel free to contact me at peternhwang@gmail.com if you have any suggestions, comments, or concerns.

## Differences

* The text font employed in each carousel card is Din Pro, a premium font available on websites such as FontAwesome. This solution uses the sans-serif 'Roboto' font, which is similar.

* The text container on the right side of the page, which begins with "EARN FOR BEING SOCIAL" was abstracted by the text "Sample components here."

## Improvements

The auto-rotation feature of the carousel originally involved incrementing various elements' z-indices over time. However, the z-index value would grow indefinitely. As a result, this page is prone to breaking, especially as the z-index approaches large numbers (although most users would not stay on the page long enough for errors to manifest).

To solve this issue, I looped through values of 0-3 for the z-indices. Looping values in state or props (instead of growing indefinitely) is a good design practice.

## Suggestions

In order to view the outlines of the carousel container and the text container components, you may comment in the grey borders in Chrome's developer tools. For the elements with class names of "s3-carousel" and "column component", feel free to comment back in the following css style: ```border: 3px solid grey```

## Licensing
  React can be used by the conditions by the MIT License.
  **Resource:** [MIT License](https://opensource.org/licenses/MIT)


