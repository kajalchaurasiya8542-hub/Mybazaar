import { Link } from 'react-router-dom';
import products from '../Data/Product';

export default function Productcard() {
  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
          <p className="mt-3 text-gray-600">Choose fresh products at the best prices.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((card) => (
            <div key={card.id} className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
             <Link to={`/product/${card.id}`}>
              <img className="h-52 w-full object-cover" src={card.image} alt={card.name} />
             </Link>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                  <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">{card.quantity}</span>
                </div>

                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">{card.description}</p>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900">Rs. {card.amount}</p>
                  <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
