import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Search, Check, Plus, Minus } from 'lucide-react';
import svgPaths from '../imports/KeepPace/svg-9v5puu0cj5';
import imgRectangle from '../imports/KeepPace/6fddaba592350928ccd0ee0a246e1434327ca71f.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

interface FoodItem {
  id: string;
  name: string;
  category: string;
  roles: string[];
  imagePath: string;
  unit?: string;
}

const foodCatalog: FoodItem[] = [
  // Bars & Bites
  { id: '1', name: 'Granola bar', category: 'Bars & Bites', roles: ['Steady fuel'], imagePath: '/media/food-library/00_All_Items/granola_bar.png' },
  { id: '2', name: 'Energy bar', category: 'Bars & Bites', roles: ['Steady fuel'], imagePath: '/media/food-library/00_All_Items/energy_bar_wrapper.png' },
  { id: '3', name: 'Oat bar', category: 'Bars & Bites', roles: ['Steady fuel'], imagePath: '/media/food-library/00_All_Items/oat_energy_bar.png' },

  // Gels & Chews
  { id: '4', name: 'Energy gel', category: 'Gels & Chews', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/energy_gel_packet.png' },
  { id: '5', name: 'Energy chews', category: 'Gels & Chews', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/energy_chews_packet.png' },
  { id: '6', name: 'Gummy candy', category: 'Gels & Chews', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/gummy_candy_packet.png' },
  { id: '7', name: 'Maple syrup', category: 'Gels & Chews', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/maple_syrup_packet.png' },
  { id: '8', name: 'Honey', category: 'Gels & Chews', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/honey_packet.png' },

  // Fruit
  { id: '9', name: 'Banana', category: 'Fruit', roles: ['Quick fuel', 'Steady fuel'], imagePath: '/media/food-library/00_All_Items/banana.png' },
  { id: '10', name: 'Banana chips', category: 'Fruit', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/banana_chips.png', unit: 'small handful' },
  { id: '11', name: 'Dates', category: 'Fruit', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/dates.png', unit: 'small handful' },
  { id: '12', name: 'Dried apricots', category: 'Fruit', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/dried_apricots.png', unit: 'small handful' },
  { id: '13', name: 'Dried mango', category: 'Fruit', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/dried_mango.png', unit: 'small handful' },
  { id: '14', name: 'Dried cherries', category: 'Fruit', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/dried_cherries.png', unit: 'small handful' },
  { id: '15', name: 'Raisins', category: 'Fruit', roles: ['Quick fuel'], imagePath: '/media/food-library/00_All_Items/raisins.png', unit: 'small handful' },

  // Real Food
  { id: '16', name: 'PB&J', category: 'Real Food', roles: ['Long fuel'], imagePath: '/media/food-library/00_All_Items/pbj_sandwich.png' },
  { id: '17', name: 'Rice cakes', category: 'Real Food', roles: ['Steady fuel'], imagePath: '/media/food-library/00_All_Items/rice_cakes.png' },
  { id: '18', name: 'Sweet potato', category: 'Real Food', roles: ['Long fuel'], imagePath: '/media/food-library/00_All_Items/sweet_potato.png' },
  { id: '19', name: 'Oats', category: 'Real Food', roles: ['Long fuel'], imagePath: '/media/food-library/00_All_Items/oats_bowl.png' },
  { id: '20', name: 'Whole grain bread', category: 'Real Food', roles: ['Long fuel'], imagePath: '/media/food-library/00_All_Items/whole_grain_bread.png' },
  { id: '21', name: 'Greek yogurt', category: 'Real Food', roles: ['Long fuel'], imagePath: '/media/food-library/00_All_Items/greek_yogurt_with_berries.png' },
  { id: '22', name: 'Eggs', category: 'Real Food', roles: ['Long fuel'], imagePath: '/media/food-library/00_All_Items/eggs.png' },

  // Snacks
  { id: '23', name: 'Pretzels', category: 'Snacks', roles: ['Steady fuel'], imagePath: '/media/food-library/00_All_Items/pretzels.png', unit: 'small handful' },
  { id: '24', name: 'Crackers', category: 'Snacks', roles: ['Steady fuel'], imagePath: '/media/food-library/00_All_Items/crackers.png', unit: 'small handful' },
  { id: '25', name: 'Trail mix', category: 'Snacks', roles: ['Steady fuel'], imagePath: '/media/food-library/00_All_Items/trail_mix_pouch.png', unit: '1 pouch' },
  { id: '26', name: 'Nut butter', category: 'Snacks', roles: ['Steady fuel'], imagePath: '/media/food-library/00_All_Items/nut_butter_packet.png' },

  // Drinks
  { id: '27', name: 'Water', category: 'Drinks', roles: [], imagePath: '/media/food-library/00_All_Items/water_bottle.png', unit: '1 bottle' },
  { id: '28', name: 'Sports drink', category: 'Drinks', roles: [], imagePath: '/media/food-library/00_All_Items/sports_drink_bottle.png', unit: '1 bottle' },
  { id: '29', name: 'Drink mix', category: 'Drinks', roles: [], imagePath: '/media/food-library/00_All_Items/electrolyte_drink_mix_bottle.png', unit: '1 bottle' },
  { id: '30', name: 'Protein shake', category: 'Drinks', roles: [], imagePath: '/media/food-library/00_All_Items/protein_shake_bottle.png', unit: '1 bottle' },
];

const categories = ['Bars & Bites', 'Gels & Chews', 'Fruit', 'Real Food', 'Snacks', 'Drinks'];
const roleFilters = ['Quick fuel', 'Steady fuel', 'Long fuel'];

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [showContextText, setShowContextText] = useState(false);
  const [contextMessage, setContextMessage] = useState('');
  const filterRowRef = useRef<HTMLDivElement>(null);

  const selectedCount = Object.keys(quantities).length;

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setShowContextText(false);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value) setShowContextText(false);
  };

  const handleQuantityChange = (itemId: string, change: number) => {
    setQuantities(prev => {
      const current = prev[itemId] || 0;
      const newValue = Math.max(0, Math.min(12, current + change));

      if (newValue === 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }

      return { ...prev, [itemId]: newValue };
    });
  };

  const getFilteredItems = () => {
    let filtered = foodCatalog;

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedFilter !== 'All') {
      if (categories.includes(selectedFilter)) {
        filtered = filtered.filter(item => item.category === selectedFilter);
      } else if (roleFilters.includes(selectedFilter)) {
        filtered = filtered.filter(item => item.roles.includes(selectedFilter));
      }
    }

    return filtered;
  };

  const groupItems = (items: FoodItem[]) => {
    if (searchQuery || selectedFilter !== 'All') {
      return { ungrouped: items };
    }

    return categories.reduce((acc, cat) => {
      acc[cat] = items.filter(item => item.category === cat);
      return acc;
    }, {} as Record<string, FoodItem[]>);
  };

  const filteredItems = getFilteredItems();
  const groupedItems = groupItems(filteredItems);

  return (
    <div className="bg-[#0b1d20] min-h-screen flex flex-col relative w-full max-w-[390px] mx-auto">
      {/* Header - Sticky */}
      <div className="sticky top-0 z-20 bg-[#0b1d20] px-4 pt-4 pb-3">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <button className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Title */}
          <h1 className="text-white text-[17px] font-semibold">Your cupboard</h1>

          {/* Selection Count */}
          {selectedCount > 0 ? (
            <div className="px-3 py-1.5 bg-white/10 rounded-full">
              <span className="text-white text-[13px] font-medium">{selectedCount} selected</span>
            </div>
          ) : (
            <div className="w-[85px]" />
          )}
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search your cupboard"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full bg-[#16242c] border border-white/10 rounded-[14px] pl-10 pr-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20"
          />
        </div>
      </div>

      {/* Context Text (conditional) */}
      {showContextText && !searchQuery && (
        <div className="px-4 pb-3 transition-opacity duration-200">
          <p className="text-[13px] text-white/60 leading-[1.3]">{contextMessage}</p>
        </div>
      )}

      {/* Filter Chips - Horizontal Scroll */}
      <div className="px-4 pb-4" ref={filterRowRef}>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => handleFilterChange('All')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-[14px] font-medium transition-colors ${
              selectedFilter === 'All'
                ? 'bg-[#3fcb7e] text-[#0b1d20]'
                : 'bg-[#16242c] text-white'
            }`}
          >
            All
          </button>

          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-[14px] font-medium transition-colors ${
                selectedFilter === cat
                  ? 'bg-[#3fcb7e] text-[#0b1d20]'
                  : 'bg-[#16242c] text-white'
              }`}
            >
              {cat}
            </button>
          ))}

          <div className="w-4 shrink-0" />

          {roleFilters.map(role => (
            <button
              key={role}
              onClick={() => handleFilterChange(role)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-[14px] font-medium transition-colors ${
                selectedFilter === role
                  ? 'bg-[#3fcb7e] text-[#0b1d20]'
                  : 'bg-[#16242c] text-white'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Food Grid */}
      <div className="flex-1 px-4 pb-24 overflow-y-auto">
        {Object.entries(groupedItems).map(([groupName, items]) => (
          <div key={groupName} className="mb-6">
            {groupName !== 'ungrouped' && (
              <h2 className="text-white/90 text-[15px] font-semibold mb-3">{groupName}</h2>
            )}

            <div className="grid grid-cols-2 gap-3">
              {items.map(item => {
                const quantity = quantities[item.id] || 0;
                const isSelected = quantity > 0;

                return (
                  <div
                    key={item.id}
                    className={`bg-[#16242c] rounded-[16px] overflow-hidden relative transition-all duration-200 ${
                      isSelected ? 'ring-2 ring-[#3fcb7e] ring-inset' : ''
                    }`}
                  >
                    {/* Image Area */}
                    <div className="relative bg-white aspect-[4/5] flex items-center justify-center overflow-hidden">
                      {isSelected && (
                        <>
                          <div className="absolute inset-0 bg-[#3fcb7e]/6 z-10" />
                          <div className="absolute top-2 right-2 z-20 w-4 h-4 bg-[#3fcb7e] rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                        </>
                      )}
                      <ImageWithFallback
                        src={item.imagePath}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Info Zone */}
                    <div className="p-3">
                      <p className="text-white text-[14px] font-semibold mb-1">{item.name}</p>
                      <p className="text-white/60 text-[12px] font-medium mb-3 h-[16px]">
                        {item.unit || ''}
                      </p>

                      {/* Add/Quantity Control */}
                      {quantity === 0 ? (
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-full h-[36px] rounded-[14px] bg-[#16242c] border border-white/20 flex items-center justify-center text-white text-[14px] font-semibold hover:border-white/30 transition-colors"
                        >
                          + Add
                        </button>
                      ) : (
                        <div className="w-full h-[36px] rounded-[14px] bg-[#16242c] border border-white/10 flex items-center justify-between overflow-hidden">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="flex-1 h-full flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                          >
                            <Minus className="w-5 h-5" strokeWidth={2.5} />
                          </button>

                          <div className="h-full w-px bg-white/10" />

                          <div className="flex-1 flex items-center justify-center">
                            <span className="text-white text-[16px] font-semibold">{quantity}</span>
                          </div>

                          <div className="h-full w-px bg-white/10" />

                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            disabled={quantity >= 12}
                            className={`flex-1 h-full flex items-center justify-center transition-colors ${
                              quantity >= 12
                                ? 'text-white/40 cursor-not-allowed'
                                : 'text-white hover:bg-white/5'
                            }`}
                          >
                            <Plus className="w-5 h-5" strokeWidth={2.5} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Add Custom Item Tile */}
              {groupName === 'ungrouped' || (groupName === 'Drinks' && selectedFilter === 'All') ? (
                <div className="bg-[#16242c] rounded-[16px] border-2 border-dashed border-white/20 aspect-[4/5] flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-white/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white/70 text-[13px] font-medium">Add custom item</p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto p-4 bg-gradient-to-t from-[#0b1d20] via-[#0b1d20] to-transparent pt-6">
        <button
          className={`w-full h-[52px] rounded-[14px] font-semibold text-[16px] transition-all ${
            selectedCount > 0
              ? 'bg-[#3fcb7e] text-[#0b1d20]'
              : 'bg-white/10 text-white/60'
          }`}
        >
          {selectedCount > 0 ? `Done · ${selectedCount} items` : 'Done'}
        </button>
      </div>
    </div>
  );
}
