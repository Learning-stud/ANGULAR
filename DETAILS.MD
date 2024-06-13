# ANGULAR BIGBASKET API

# ProductsComponent

## Components

ProductsComponent is a modular Angular component designed for managing a list of products with an integrated side panel form for editing product details. The component utilizes Angular Material for UI components and Bootstrap for responsive design.

### Functionality

- **Product List:** Displays a list of products, each represented with attributes such as name, description, and an image.

- **Side Panel Form:** A toggleable side panel featuring a form for editing product details. Form inputs are dynamically bound to `productObj` properties via two-way data binding.

- **Toggle Side Panel:** Buttons to control the visibility of the side panel form (`openSidePanel()` and `closeSidePanel()` methods).

### Key Methods

- **openSidePanel():** Method to open the side panel for editing product details.

- **closeSidePanel():** Method to close the side panel form.

### Binding

- **Two-way Data Binding:** Ensures synchronization between form inputs and `productObj` properties, enabling seamless updates and edits.

### Notes

- Ensure Bootstrap and Angular Material CSS are included in `angular.json` under the `styles` array for consistent styling and responsive behavior.

- The dynamic rendering of the form and product list is controlled by the state of `productObj` and `sidePanelVisible` boolean.

### Conclusion

This Angular project exemplifies effective product management through a well-structured component (`ProductsComponent`). It leverages Angular Material for enhanced user experience and Bootstrap for responsive design. The component design emphasizes maintainability and modular separation of concerns, promoting a clean codebase and intuitive user interactions.
