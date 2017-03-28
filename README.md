# get-descendant

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Get parent (child element of target)

## Install or Download

```sh
yarn add get-descendant
npm i -S get-descendant
```

## Example

```html
<div id="target">
  <div id="expected">
    <div>
      <div id="el">
      </div>
    </div>
  </div>
</div>

<script>
const result = getDescendant(
  document.getElementById('el'),
  document.getElementById('target')
);
console.log(result); // <div id="expected"/>
</script>
```

## LICENSE

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
