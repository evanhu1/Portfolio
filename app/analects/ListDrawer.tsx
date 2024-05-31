import React from 'react';

interface ListDrawerProps {
  items: string[];
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (item: any) => void;
  selectedItem: any;
  title: string;
  widthClass?: string;
  side: 'left' | 'right';
  ref?: React.Ref<HTMLDivElement>; // Updated type
}

const ListDrawer = React.forwardRef<HTMLDivElement, ListDrawerProps>((props, ref) => {
  const {
    items,
    isOpen,
    onClose,
    onItemClick,
    selectedItem,
    title,
    widthClass = "w-full md:w-[500px]",
    side,
  } = props;
  ListDrawer.displayName = 'ListDrawer'
  const translateClass = side === 'left' ? 
    `${isOpen ? "translate-x-0" : "-translate-x-full"}` : 
    `${isOpen ? "translate-x-0" : "translate-x-full"}`;

  return (
    <div
      className={`absolute z-10 bg-gray-100 p-4 h-full ${side === 'left' ? 'left-0' : 'right-0'} transform ${translateClass} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${widthClass}`}
      ref={ref}
    >
      <div className="flex flex-row justify-between">
        <p className="text-2xl font-bold mb-4">{title}</p>
        <button
          className="rounded-full h-8 bg-white px-4 md:hidden"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      {items.map((item, index) => 
        <div
          key={index}
          className={`p-2 rounded-md my-2 cursor-pointer ${
            selectedItem && selectedItem === item ? "bg-blue-500/75 text-white" : "bg-white hover:bg-gray-200"
          }`}
          onClick={() => onItemClick(item)}
        >
          {item}
        </div>
      )}
    </div>
  );
});
export default ListDrawer;