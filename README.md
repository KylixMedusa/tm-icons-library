# tm-icons-library

`tm-icons-library` is a React icon library providing a set of scalable, customizable icons for your React applications.

## Installation

Install `tm-icons-library` using npm:

```bash
npm install tm-icons-library
```

Or using yarn:

```bash
yarn add tm-icons-library
```

## Usage

Here is a basic example of how to use `tm-icons-library` in your React application:

```jsx
import React from 'react';
import { IconName } from 'tm-icons-library';

const App = () => {
  return (
    <div>
      <IconName name="alarm-outline" size="24px" color="blue" />
      {/* Replace 'alarm-outline' with the name of the icon you want to use */}
    </div>
  );
};

export default App;
```

## API Reference

### Icon Component

`IconName` component is the primary component of `tm-icons-library`. You can use it to display icons with custom sizes and colors.

#### Props

- `name`: String - The name of the icon to display. (e.g., `"alarm-outline"`)
- `size`: String (optional) - Size of the icon (default: `"24px"`).
- `color`: String (optional) - Color of the icon (default: `"currentColor"`).

## Customizing Icons

You can customize the icons using the `size` and `color` props:

```jsx
<IconName name="alarm-outline" size="32px" color="red" />
```

## List of Available Icons

(Here, list all the available icons with their names as users will refer to them.)

- `alarm-outline`
- `add-circle`
- ... (other icons)

## Contributing

We welcome contributions to `tm-icons-library`! If you have suggestions or would like to contribute code, please feel free to open an issue or a pull request.

## License

`tm-icons-library` is [MIT licensed](./LICENSE).

---

### Notes for Further Documentation Development

- **Examples**: Include more examples demonstrating different use cases.
- **Advanced Features**: If your library has advanced features, like custom icon loading or additional props, document these thoroughly.
- **Contribution Guidelines**: Expand the contributing section with specific guidelines, code style requirements, and how to set up the development environment.
- **Build and Deployment**: Instructions on how to build and deploy the library might be useful for contributors.
- **Changelog**: Maintain a changelog to track changes, improvements, and fixes across versions.

This template should provide a solid foundation for your library's documentation, ensuring that users and contributors have a clear understanding of how to use and contribute to `tm-icons-library`.
