// components/Menu.jsx or app/menu/page.jsx

import { menuData } from '@/data/menuItems'

export default function Menu() {
  const categories = [
    { key: 'starters', title: 'Starters & Appetizers', emoji: '🥟' },
    { key: 'mainCourse', title: 'Main Course', emoji: '🍽️' },
    { key: 'desserts', title: 'Desserts', emoji: '🍰' },
    { key: 'beverages', title: 'Beverages', emoji: '☕' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Menu</h1>
          <p className="text-gray-600">Explore our multi-cuisine delights</p>
        </div>

        {/* Menu Categories */}
        {categories.map((category) => (
          <section key={category.key} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>{category.emoji}</span>
              {category.title}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {menuData[category.key].map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <span className="text-orange-600 font-bold">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                      {item.cuisine}
                    </span>
                  </div>
                  <div className="px-4 pb-4">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}