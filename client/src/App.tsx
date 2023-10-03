import useSetLocalStorage from "./hooks/UseLocalStorage";
import { fetchAllItemsFromLocalStorage } from "./utils/LocalStorageUtils";
import { LocalStorageContext } from "./context/DataContext";
import { StorageData } from "./utils/Types";
import ProductCard from "./components/ProductCard";


const fakeUser: StorageData = {
  user: "Larkin",
};

const fakeUserTwo: StorageData = {
  user: "Josh",
  cart: {
    iceCream: [{
      name: "strawberry shortcake",
      quantity: 5
    }],
    toppings: [{
      name: "sprinkles",
      quantity: 1
    }]
  }
};

export default function App() {
  const localStorageCopy: StorageData | null = fetchAllItemsFromLocalStorage();
  console.log(localStorageCopy);
  const [storage, setStorage] = useSetLocalStorage(localStorageCopy, "Test");

  return (
    <LocalStorageContext.Provider value={storage}>
      <div>
        <button onClick={() => setStorage(fakeUser)}>1</button>
        <button onClick={() => setStorage(fakeUserTwo)}>2</button>
        <p>{storage?.user}</p>
        {/* <p>{value.value}</p> */}

      </div>
      <ProductCard name={""} description={""} image={""} creator={""} purchaseHistory={0} />
    </LocalStorageContext.Provider>
  );
}