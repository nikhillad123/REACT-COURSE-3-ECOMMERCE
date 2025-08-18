# 🛒 REACT-COURSE-3-ECOMMERCE  

A **full-stack e-commerce application** built with **React (Vite)** on the frontend and a lightweight **Node.js + Express** backend powered by JSON data.  
This project demonstrates real-world features like product browsing, cart management, checkout flow, order tracking, and testing – making it a complete learning and showcase project.  

---

## 🚀 Tech Stack  

### Frontend  
- ⚛️ **React (Vite)** – Fast, modern frontend build tool  
- 🎨 **CSS Modules** – Component-scoped styling  
- 🛣️ **React Router** – Client-side navigation  
- 🧪 **Vitest + React Testing Library** – Unit & integration testing  

### Backend  
### Backend  
- 🟢 **Node.js + Express** – RESTful API server  
- 🗄️ **MySQL** – Relational database for storing products, cart, orders, and delivery options  
- 🌐 **REST Endpoints** – Products, cart, orders, payment summaries, delivery options  

---

## 📂 Project Structure  

```
├── ecommerce-backend
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── README.md
    ├── backend
    │   ├── cart.json
    │   ├── deliveryOptions.json
    │   ├── orders.json
    │   └── products.json
    ├── defaultData
    │   ├── defaultCart.js
    │   ├── defaultDeliveryOptions.js
    │   ├── defaultOrders.js
    │   └── defaultProducts.js
    ├── documentation.md
    ├── images
    │   ├── appliance-instructions.png
    │   ├── appliance-warranty.png
    │   ├── clothing-size-chart.png
    │   ├── icons
    │   │   ├── buy-again.png
    │   │   ├── cart-icon.png
    │   │   ├── checkmark-white.png
    │   │   ├── checkmark.png
    │   │   ├── checkout-lock-icon.png
    │   │   └── search-icon.png
    │   ├── logo-white.png
    │   ├── logo.png
    │   ├── mobile-logo-white.png
    │   ├── mobile-logo.png
    │   ├── products
    │   │   ├── 2-slot-toaster-white.jpg
    │   │   ├── 3-piece-cooking-set.jpg
    │   │   ├── adults-plain-cotton-tshirt-2-pack-teal.jpg
    │   │   ├── artistic-bowl-set-6-piece.jpg
    │   │   ├── athletic-cotton-socks-6-pairs.jpg
    │   │   ├── athletic-skateboard-shoes-gray.jpg
    │   │   ├── bath-towel-set-gray-rosewood.jpg
    │   │   ├── bathroom-mat.jpg
    │   │   ├── black-and-silver-espresso-maker.jpg
    │   │   ├── blackout-curtain-set-beige.jpg
    │   │   ├── blackout-curtains-set-teal.jpg
    │   │   ├── countertop-push-blender-black.jpg
    │   │   ├── crystal-zirconia-stud-earrings-pink.jpg
    │   │   ├── duvet-cover-set-gray-queen.jpg
    │   │   ├── electric-steel-hot-water-kettle-white.jpg
    │   │   ├── elegant-white-dinner-plate-set.jpg
    │   │   ├── facial-tissue-2-ply-8-boxes.jpg
    │   │   ├── glass-screw-lid-food-containers.jpg
    │   │   ├── intermediate-composite-basketball.jpg
    │   │   ├── kitchen-paper-towels-8-pack.jpg
    │   │   ├── knit-athletic-sneakers-gray.jpg
    │   │   ├── laundry-detergent-tabs.jpg
    │   │   ├── luxury-towel-set.jpg
    │   │   ├── men-athletic-shoes-white.jpg
    │   │   ├── men-brown-flat-sneakers.jpg
    │   │   ├── men-chino-pants-beige.jpg
    │   │   ├── men-cozy-fleece-hoodie-light-teal.jpg
    │   │   ├── men-golf-polo-t-shirt-gray.jpg
    │   │   ├── men-navigator-sunglasses-black.jpg
    │   │   ├── men-stretch-wool-sweater-black.jpg
    │   │   ├── non-stick-cooking-set-4-pieces.jpg
    │   │   ├── round-sunglasses-gold.jpg
    │   │   ├── sky-leaf-branch-earrings.jpg
    │   │   ├── straw-sunhat.jpg
    │   │   ├── vanity-mirror-pink.jpg
    │   │   ├── women-knit-ballet-flat-white.jpg
    │   │   ├── women-knit-beanie-pom-pom-blue.jpg
    │   │   ├── women-plain-cotton-oversized-sweater-gray.jpg
    │   │   ├── women-relaxed-lounge-pants-pink.jpg
    │   │   ├── women-sandal-heels-white-pink.jpg
    │   │   ├── women-striped-beach-dress.jpg
    │   │   └── women-summer-jean-shorts.jpg
    │   └── ratings
    │   │   ├── rating-0.png
    │   │   ├── rating-10.png
    │   │   ├── rating-15.png
    │   │   ├── rating-20.png
    │   │   ├── rating-25.png
    │   │   ├── rating-30.png
    │   │   ├── rating-35.png
    │   │   ├── rating-40.png
    │   │   ├── rating-45.png
    │   │   ├── rating-5.png
    │   │   └── rating-50.png
    ├── models
    │   ├── CartItem.js
    │   ├── DeliveryOption.js
    │   ├── Order.js
    │   ├── Product.js
    │   └── index.js
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   ├── cartItems.js
    │   ├── deliveryOptions.js
    │   ├── orders.js
    │   ├── paymentSummary.js
    │   ├── products.js
    │   └── reset.js
    ├── server.js
    ├── troubleshooting.md
    ├── vercel.json
    └── zipFiles.js
└── ecommerce-project
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
        ├── cart-favicon.png
        ├── home-favicon.png
        ├── images
        │   ├── appliance-instructions.png
        │   ├── appliance-warranty.png
        │   ├── clothing-size-chart.png
        │   ├── products
        │   │   ├── 2-slot-toaster-white.jpg
        │   │   ├── 3-piece-cooking-set.jpg
        │   │   ├── adults-plain-cotton-tshirt-2-pack-teal.jpg
        │   │   ├── artistic-bowl-set-6-piece.jpg
        │   │   ├── athletic-cotton-socks-6-pairs.jpg
        │   │   ├── athletic-skateboard-shoes-gray.jpg
        │   │   ├── bath-towel-set-gray-rosewood.jpg
        │   │   ├── bathroom-mat.jpg
        │   │   ├── black-and-silver-espresso-maker.jpg
        │   │   ├── blackout-curtain-set-beige.jpg
        │   │   ├── blackout-curtains-set-teal.jpg
        │   │   ├── countertop-push-blender-black.jpg
        │   │   ├── crystal-zirconia-stud-earrings-pink.jpg
        │   │   ├── duvet-cover-set-gray-queen.jpg
        │   │   ├── electric-steel-hot-water-kettle-white.jpg
        │   │   ├── elegant-white-dinner-plate-set.jpg
        │   │   ├── facial-tissue-2-ply-8-boxes.jpg
        │   │   ├── glass-screw-lid-food-containers.jpg
        │   │   ├── intermediate-composite-basketball.jpg
        │   │   ├── kitchen-paper-towels-8-pack.jpg
        │   │   ├── knit-athletic-sneakers-gray.jpg
        │   │   ├── laundry-detergent-tabs.jpg
        │   │   ├── luxury-towel-set.jpg
        │   │   ├── men-athletic-shoes-white.jpg
        │   │   ├── men-brown-flat-sneakers.jpg
        │   │   ├── men-chino-pants-beige.jpg
        │   │   ├── men-cozy-fleece-hoodie-light-teal.jpg
        │   │   ├── men-golf-polo-t-shirt-gray.jpg
        │   │   ├── men-navigator-sunglasses-black.jpg
        │   │   ├── men-stretch-wool-sweater-black.jpg
        │   │   ├── non-stick-cooking-set-4-pieces.jpg
        │   │   ├── round-sunglasses-gold.jpg
        │   │   ├── sky-leaf-branch-earrings.jpg
        │   │   ├── straw-sunhat.jpg
        │   │   ├── vanity-mirror-pink.jpg
        │   │   ├── women-knit-ballet-flat-white.jpg
        │   │   ├── women-knit-beanie-pom-pom-blue.jpg
        │   │   ├── women-plain-cotton-oversized-sweater-gray.jpg
        │   │   ├── women-relaxed-lounge-pants-pink.jpg
        │   │   ├── women-sandal-heels-white-pink.jpg
        │   │   ├── women-striped-beach-dress.jpg
        │   │   └── women-summer-jean-shorts.jpg
        │   └── ratings
        │   │   ├── rating-0.png
        │   │   ├── rating-10.png
        │   │   ├── rating-15.png
        │   │   ├── rating-20.png
        │   │   ├── rating-25.png
        │   │   ├── rating-30.png
        │   │   ├── rating-35.png
        │   │   ├── rating-40.png
        │   │   ├── rating-45.png
        │   │   ├── rating-5.png
        │   │   └── rating-50.png
        ├── orders-favicon.png
        ├── tracking-favicon.png
        └── vite.svg
    ├── setupTests.js
    ├── src
        ├── App.css
        ├── App.jsx
        ├── assets
        │   ├── images
        │   │   ├── icons
        │   │   │   ├── buy-again.png
        │   │   │   ├── cart-icon.png
        │   │   │   ├── checkmark-white.png
        │   │   │   ├── checkmark.png
        │   │   │   ├── checkout-lock-icon.png
        │   │   │   └── search-icon.png
        │   │   ├── logo-white.png
        │   │   ├── logo.png
        │   │   ├── mobile-logo-white.png
        │   │   └── mobile-logo.png
        │   └── react.svg
        ├── components
        │   ├── Header.jsx
        │   └── header.css
        ├── index.css
        ├── main.jsx
        ├── pages
        │   ├── checkout
        │   │   ├── CartItemDetails.jsx
        │   │   ├── CheckoutHeader.css
        │   │   ├── CheckoutHeader.jsx
        │   │   ├── CheckoutPage.css
        │   │   ├── CheckoutPage.jsx
        │   │   ├── DeliveryDate.jsx
        │   │   ├── DeliveryOptions.jsx
        │   │   ├── OrderSummary.jsx
        │   │   ├── PaymentSummary.jsx
        │   │   └── PaymentSummary.test.jsx
        │   ├── errors
        │   │   ├── ErrorPage.css
        │   │   └── ErrorPage.jsx
        │   ├── home
        │   │   ├── HomePage.css
        │   │   ├── HomePage.jsx
        │   │   ├── HomePage.test.jsx
        │   │   ├── Product.jsx
        │   │   ├── Product.test.jsx
        │   │   └── ProductsGrid.jsx
        │   ├── orders
        │   │   ├── OrderDetailsGrid.jsx
        │   │   ├── OrderHeader.jsx
        │   │   ├── OrdersGrid.jsx
        │   │   ├── OrdersPage.css
        │   │   └── OrdersPage.jsx
        │   └── trackings
        │   │   ├── TrackingPage.css
        │   │   └── TrackingPage.jsx
        └── utils
        │   ├── money.js
        │   └── money.test.js
    ├── starting-code
        ├── backend
        │   ├── cart.json
        │   ├── deliveryOptions.json
        │   ├── orders.json
        │   └── products.json
        └── data
        │   └── products.js
    ├── vercel.json
    ├── vite.config.js
    └── vitest.config.js

```

---

## 🌟 Features  

✅ **Home Page** – Browse products, view details, and add items to cart  
✅ **Cart & Checkout** – Review cart, choose delivery date/options, and view payment summary  
✅ **Order Management** – Place orders and view past order history  
✅ **Tracking Page** – Simple interface to track order status  
✅ **Error Handling** – User-friendly fallback “Not Found” page  
✅ **Reusable Components** – Header, product cards, grids, and utility functions  
✅ **Testing** – Unit tests for components & utilities (`money.js`, `PaymentSummary`, etc.)  
✅ **Deployment Ready** – Configured for **Vercel** with SPA routing support  

---

## 📽️ Demo Video

[![Watch the video](https://img.youtube.com/vi/VIDEO_ID_HERE/0.jpg)](VIDEO_LINK_HERE)

---

## 📸 Screenshots  

| Page | Screenshot |  
|------|------------|  
| Home | (Add screenshot here) |  
| Checkout | (Add screenshot here) |  
| Orders | (Add screenshot here) |  
| Tracking | (Add screenshot here) |  

---

## 🎯 Contributors  

👤 **Nikhil Lad** – *Developer & Maintainer*  
📧 Email: [nikhil.lad24india@gmail.com](mailto:nikhil.lad24india@gmail.com)  
🔗 GitHub: [@Gyanthakur](https://github.com/Gyanthakur)  

---

## 🙏 Acknowledgments  

This project was created as part of a **React learning journey**, with the goal of building a **practical full-stack e-commerce app** from scratch.  

---

## 🎉 Thank you for checking out **REACT-COURSE-3-ECOMMERCE**!  
