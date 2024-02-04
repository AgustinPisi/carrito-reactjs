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
      img: 'https://i.postimg.cc/nLY1rvRf/81-J-9s-W-T4-L-AC-UF894-1000-QL80.jpg',
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
    },

    {
      id: '4',
      name: 'Hot Toys - Prey - Feral Predator ',
      price: 230,
      category: 'Figuras',
      img: 'https://i.postimg.cc/HxF1xDvN/feral.png',
      stock: 5,
      description: 'Hot Toys 1/6 - Feral Predator - Prey'
    },

    {
      id: '5',
      name: 'Iron Studios - Darth Maul',
      price: 150,
      category: 'Estatuas',
      img: 'https://i.postimg.cc/sg3xy7hh/darthmaul.png',
      stock: 12,
      description: 'Darth Maul 1/10 - Star Wars - Iron Studios'
    },

    {
      id: '6',
      name: 'NECA - Ultimate Leatherface',
      price: 37,
      category: 'Figuras',
      img: 'https://i.postimg.cc/J06Q5MZr/leatherface-Mesa-de-trabajo-1.png',
      stock: 8,
      description: 'NECA Ultimate Leatherface - The Texas Chain Saw Massacre'
    },

    {
      id: '7',
      name: 'Sideshow - Oglavaeil - Court Of The Dead',
      price: 1000,
      category: 'Estatuas',
      img: 'https://i.postimg.cc/2j78GTyB/062ceca3-d76c-4fc6-aab5-c812c0dfadfd.jpg',
      stock: 1,
      description: 'Court Of The Dead - Oglavaeil - Dreadsbane Enforcer 1/4 Premium Format'
    },

    {
      id: '8',
      name: 'Prime 1 - Alien - Queen Alien Diorama ',
      price: 1500,
      category: 'Estatuas',
      img: 'https://i.postimg.cc/QdmjkMMG/pmdhal-03-a04-02-height.jpg',
      stock: 2,
      description: 'Queen Alien - Battle Diorama - Prime 1'
    },

    {
      id: '9',
      name: 'Mafex - The Boys - Homelander',
      price: 80,
      category: 'Figuras',
      img: 'https://i.postimg.cc/vH1nNpVN/D-Q-NP-704449-MLU71044203354-082023-O.jpg',
      stock: 10,
      description: 'Homelander 1/12 - The Boys - Mafex'
    },

    {
      id: '10',
      name: 'Sideshow - Jason Voorhees',
      price: 850,
      category: 'Estatuas',
      img: 'https://i.postimg.cc/c46z54TG/11160153-3954319494452636.jpg',
      stock: 3,
      description: 'Jason Voorhees 1/4 - Friday the 13th Part III- Sideshow'
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
  
  