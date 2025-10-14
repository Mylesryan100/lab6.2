# lab6.2

1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

It is important to handle errors for each individual API call becuase each API can fail for different reasons. Individual error handling keeps your app stable, user-friendly, and modular even when part of the system fails.

2. How does using custom error classes improve debugging and error identification?

Using custom error classes like Network Error and DataError improves debugging and error identification by allowing you to spot what type of error occured. Custom classes also improve debugging by allowing you to use "instanceof" checks to handle each type differently, and also allows you to categorize your failures.

3. When might a retry mechanism be more effective than an immediate failure response?