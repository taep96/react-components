# 📊 React Auto Columns

A React component that automatically arranges child elements into columns based
on the available screen space, similar to the Discord GIF browser. This package
is great for creating product listings, galleries, and more.

## 🚀 Demo

You can see the package in action on the
[demo website](https://react-components.taep96.moe/).

## ⚙️ Installation

```sh
npm install react-auto-columns
```

Or if you're using pnpm:

```sh
pnpm add react-auto-columns
```

## 🚀 Usage Example

```tsx
import { Columns } from "react-auto-columns";
```

```jsx
<Columns
  className="flex gap-4"
  columnClassName="flex flex-col gap-4 flex-1"
  columns={{ 1024: 2, 1280: 3 }}
>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</Columns>;
```

While the default value for the columns prop is 3, if no breakpoints match it
will automatically use 1 column.

If you want to override this behavior, you can pass an object with a 0 key like
this:

```tsx
<Columns columns={{ 0:3, ... }}>
  ...
</Columns>
```

## Props 🎛

| Prop name         | Type                                  | Default value | Description                                                                  |
| ----------------- | ------------------------------------- | ------------- | ---------------------------------------------------------------------------- |
| `columns`         | `number \| { [key: number]: number }` | `3`           | A fixed amount of columns or an object mapping breakpoints to column counts. |
| `columnClassName` | `string`                              | `""`          | Class name to apply to each column.                                          |

## 🤝 Contributing

Contributions to any of the packages are welcome!

If you have any questions, please reach out to me via Discord or email.

## 📝 License

All packages in this monorepo are licensed under the MIT License.
