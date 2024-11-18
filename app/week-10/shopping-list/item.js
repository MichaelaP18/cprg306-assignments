

const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <li onClick={() => onSelect(name)}>
        <div className="bg-blue-200 m-4 rounded hover:bg-blue-400">
          <h3>{name}</h3>
          <p className="text-sm italic">{quantity}, in {category}</p>
        </div>
        
      </li>
    );
  };
  
  export default Item;