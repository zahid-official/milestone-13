function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);



function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filtered = items.filter((item) => item.rating > 4);
  return filtered;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const arr = [] as T[];
  return arr.concat(...arrays);
}

class Vehicle {
  constructor(private make: string, private year: number) {}
  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  const highestPrice = products.reduce((previousValue, currentValue) =>
    currentValue.price > previousValue.price ? currentValue : previousValue
  );
  return highestPrice;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      return reject("Error: Negative number not allowed");
    } else {
      setTimeout(function () {
        return resolve(n * n);
      }, 1000);
    }
  });
}

squareAsync(4).then(console.log);
squareAsync(-4).catch(console.error);
