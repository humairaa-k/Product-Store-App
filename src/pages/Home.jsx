import {useProducts} from '../hooks/useProducts'
import ProductList from '../components/product/productList'

const Home = () => {

  const { data, isLoading, isError } = useProducts();

  if(isLoading) return <h3>Loading  products...</h3>
  if(isError) return <h4>Error loading data </h4>


  return (
    <div className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">
      <ProductList products={data.products}/>
    </div>
  )
}

export default Home
