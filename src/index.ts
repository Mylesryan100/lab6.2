
import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
  NetworkError,
  DataError,
} from "./apiSimulator";


async function retry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying..., ${retries}, "attempt(s) left`);
      return retry(fn, retries - 1);
    } else {
      throw error;
    }
  }
}

async function main() {
  console.log("Starting e-commerce dashboard simulation...");

  try {
    // Fetching product catalog
    const products = await retry(fetchProductCatalog);
    console.log("🛍️ Product Catalog:", products);

    // Fetching reviews for each product
    for (const product of products) {
      try {
        const reviews = await retry(() => fetchProductReviews(product.id));
        console.log(`Reviews for ${product.name}:`, reviews);
      } catch (error) {
        if (error instanceof DataError) {
          console.error("Data error:", error);
        } else {
          console.error("Unexpected error while fetching reviews:", error);
        }
      }
    }

    // Fetching the sales report
    const report = await retry(fetchSalesReport);
    console.log("Sales Report:", report);

  } catch (error) {
    if (error instanceof NetworkError) {
      console.error("Network error:", error);
    } else {
      console.error("Unexpected error:", error);
    }
  } finally {
    console.log("All API calls attempted. Cleaning up...");
  }
}

main();