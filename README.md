# proportional-height-box

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://beta.webcomponents.org/element/diddledan/proportional-height-box)

An element to resize child element to proportional height based on the width similar to fitvids.

## Installation

Install into your project with bower:

`bower install --save proportional-height-box`

## Usage

<!--
```
<custom-element-demo>
    <template>
        <link rel="import" href="proportional-height-box.html">
        <proportional-height-box width="300" height="200">
            <img src="https://placekitten.com/300/200/" />
        </proportional-height-box>
    </template>
</custom-element-demo>
```
-->
```
<proportional-height-box width="300" height="200">
    <img src="https://placekitten.com/300/200/" />
</proportional-height-box>
```

Width and Height can be any arbitrary values which are used to
create the aspect ratio calculation. You can, for example, use
the original dimensions of the image or video in pixels or the
aspect ratio values such as `16:9` where width is set to `16` and
height is set to `9`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

### Today
* not documented yet.

## License

The MIT License (MIT)

Copyright (c) 2016 Daniel Llewellyn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.