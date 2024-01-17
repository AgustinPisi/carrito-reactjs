const products = [
    {
      id: '1',
      name: 'Sideshow - Michael Myers',
      price: 850,
      category: 'Estatuas',
      img: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/12671922-1694793045951670.jpg',
      stock: 4,
      description: 'Sideshow PCS Collectibles - Halloween - Michael Myers 1/4'
    },
    {
      id: '2',
      name: 'NECA - Ultimate Elder Predator',
      price: 42,
      category: 'Figuras',
      img: 'https://i.postimg.cc/Xv08wM6k/SSSSSSS.png',
      stock: 10,
      description: 'NECA Ultimate Elder Predator - Predator 2'
    },
    {
      id: '3',
      name: 'Hot Toys - IT - Pennywise ',
      price: 200,
      category: 'Figuras',
      img: 'https://i.postimg.cc/mDLy5QDc/SSSSSSSSS.png',
      stock: 2,
      description: 'Pennywise 1/6 - IT - Hot Toys'
    }
  ]
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })
  }
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId));
      }, 500)
    })
  }

  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(product => product.category === category));
      }, 500);
    });
  };
  
  