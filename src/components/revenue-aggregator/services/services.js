export const loadBranchData = async () => {
  return Promise.all([1, 2, 3].map(id => 
    fetch(`api/branch${id}.json`).then(resp => resp.json())
  )).then(res => {
    return res;
  })
}

export const mergeArray = (data) => {
  return Object.values(
    data[0].products.concat(data[1].products, data[2].products).reduce((obj, product) => { 
      if (!obj[product.id]) {
        obj[product.id] = { ...product };
      } else {
        obj[product.id].sold += product.sold;
      }

      return obj;
    }, {})
  )
}

export const sortByName = (data) => {
  return data.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })
}
