# Grid Guide

For this project we are using a custom grid that matches the Amp style guide for responsive grids.  It utilizes CSS grid and assumes the following:

- On Mobile, the grid should only be 4 columns wide per row.
- on Tablet, the grid grows to 12 columns wide per row.
- The outer container is using the `--layout-wide-size` set in theme.json to set the max with of the container.
- The gap between the grid columns(s) uses a global CSS property called `--amp-grid-gutter` that can be responsive. This is set in `shared/grid.css`.


## Set The Grid Container

Grid should be wrapped in outer `amp-grid` class or use mixin.  Can be applied to any markup tag.

Example 1, using helper class:
```html
<div class="amp-grid">
...
</div>
```

Example 2, using mixin:

```html
<section>
...
</section>
```

```css
section {
  @mixin amp-grid;
}
```

## Grid Columns

Define grid columns so that you can determine how wide you want your column to span.

### Columns
Columns can be defined using helper classes or using mixins.

To set a basic grid column `<div class="col-{x}">...</div>` where x is the number of cols you want the column to span.

In CSS:

```css
  .some-class {
    @mixin grid-col 3; /* 3 columns */
  }
```

#### Wrapping

If the number of columns per row are higher than the number of allowed columns per row per breakpoint, the columns may wrap.  Remember, max cols per row is 4 for mobile, and 12 on every other breakpoint:

For example, if you set a grid layout with 14 columns:

```html
<div class="amp-grid">
  <div class="col-4">...</div>
  <div class="col-4">...</div>
  <div class="col-4">...</div>
  <div class="col-2">This column will wrap</div>
```

on Tablet+, the last column will be on its own "row". on Mobile, each column will be on its own "row" because there is a max of 4 columns per row on mobile.

For best results, just ensure your column totals add up to the cols per row total per breakpoint.

### Offsets

You may offset a column if you want gap between your columns. This can be done using helper classes or a mixin.

The rule of thumb for using the helper class is:

* col-`x`-offset-`y` where:
  * `x` = number of cols the column to span
  * `y` = the "offset" from 1 where you want the column to start
  * `x` + `y` should equal cols per row (4 or 12)

```html
<div class="amp-grid">
  <div class="col-4">...</div>
  <div class="col-4-offset-8">...</div>
```


```css
  .some-class {
    @mixin grid-offset 3, 9; /* 3 columns, offset 9 cols */
  }
```

## Responsiveness

The grid was set up to follow 4 breakpoints as defined in the styleguide.
In case these values change you can base/grid.css to fit the breakpoints for your design. This assumes you have custom media queries defined for those breakpoints.

To utilize using markup:

```html
  <div class="amp-grid">
    <div class="col-desktop-8 col-desktop-sm-3 col-tablet-6 col-mobile-4 has-text-align-center">Desktop lg 8 / Desktop sm 3 / Tablet 6 / Mobile 4</div>
    <div class="col-desktop-4 col-desktop-sm-9 col-tablet-6 col-mobile-4 has-text-align-center">Desktop lg 4 / Desktop sm 9 / Tablet 6 / Mobile 4</div>
  </div>
```

This can also work with the offsets:

```html
<div class="amp-grid">
  <div class="col-desktop-8-offset-4 col-tablet-2-offset-10">...</div>
</div>
```

To utilize using css, simply write your own media queries and apply the grid you want at that breakpoint:

```css
  .my-column {
    @mixin grid-col 4;
    @media screen and (min-width: 800px) {
      @mixin grid-col 8;
    }
  }
```

## Testing / Debugging

Add a `.debug-grid` class to a parent selector to show the grid in red.  This will only work with the helper classes!
