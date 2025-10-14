
interface Product{
    id:number;
    name:string;
    price:number;
}

const products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Headphones', price: 200 },
    { id: 3, name: "Monitor", price: 350 }
];

export const fetchProductCatalog = (): Promise<{id:number, name:string, price:number}[]> =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(Math.random()< 0.8){
                 console.log("Product catalog was fetched successfully");
                 resolve(products); [            
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
          { id: 3, name: "Monitor", price: 350 },
        ];
               } else {
                 reject(new NetworkError('Failed to fetch product catalog;'));
        }
        },1000);
});
}; 

fetchProductCatalog()
    .then(products => console.log(products))
    .catch(products => console.log(products));
       
export const fetchProductReviews = (productId: number) : Promise<{ user: string; rating: number; comment: string }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        console.log(`Reviews fetched for product ID ${productId}.`);
        resolve([
          { user: "Erica", rating: 6, comment: "Excellent quality!" },
          { user: "Tom", rating: 5, comment: "Good value for money." },
        ]);
      } else {
        reject(new DataError(`Failed to fetch reviews for product ID ${productId}`));
      }
    }, 1500);
  });
};

fetchProductReviews(1)
    .then(review => console.log(review))
    .catch(e => console.error(e));


export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; avgPrice: number }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.85) {
        console.log("Sales report fetched successfully.");
        resolve({
          totalSales: 50000,
          unitsSold: 300,
          avgPrice: 166.67,
        });
      } else {
        reject(new NetworkError("Failed to fetch sales report"));
      }
    }, 1000);
  });
};

fetchSalesReport()
    .then(report => console.log(report))
    .catch(e => console.error(e));


export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}