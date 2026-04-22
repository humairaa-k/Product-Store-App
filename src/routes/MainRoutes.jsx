import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Settings from "../pages/Settings";
import MainLayout from "../components/layout/MainLayout";


const MainRoutes = {
    path: '/',
    element: <MainLayout/>,
    children: [
     {
       index: true,
       element: <Home/>
     },
     {
      path: 'product/:id',
      element: <ProductDetails/>
     },
     {
      path: 'cart',
      element: <Cart/>
     },
     {
      path: 'settings',
      element: <Settings/>
     }

    ]
}

export default MainRoutes;