import React, { useEffect, useState } from 'react';
import {loadBranchData, mergeArray, sortByName} from './services/services';
import Search from './search/Search';
import Products from './products/Products';
import Footer from './footer/Footer';


const RevenueAggregatorApp = () => {

  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value
    const filtered = products.filter(el => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    setFilteredItems(filtered);
  }

  const total = filteredItems.reduce(
    (acc, curr) => acc + curr.unitPrice * curr.sold
    , 0
  )

  useEffect(() => {

    loadBranchData().then((res) => {
      const newArr = mergeArray(res);
      const sortedData = sortByName(newArr);
      setisLoading(false);
      setProducts(sortedData);
      setFilteredItems(sortedData);
    })

  }, []);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && (
        <div className="product-list">
          <Search handleChange={handleChange}/>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Revenue</th>
              </tr>
            </thead>
            {products.length > 0 &&
              <Products products={filteredItems} />
            }
            <Footer total={total} />
          </table>
        </div>
      )}
    </div>
  )
}

export default RevenueAggregatorApp;
