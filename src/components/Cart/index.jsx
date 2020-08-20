import React from 'react';

const Cart = () => (
  <section className="container mx-auto pt-20">
    <main className="flex flex-row flex-grow xs:flex-wrap justify-evenly">
      <div className="max-w-sm rounded overflow-hidden shadow-lg pt-1">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Some title</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#twitter</span>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg pt-1">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Some title #1</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#facebook</span>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg pt-1">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Some title #2</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#devto</span>
        </div>
      </div>
    </main>
  </section>
);

export default Cart;
