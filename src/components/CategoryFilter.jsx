const CategoryFilter = ( {categories, selectedCategory, onCategoryChange} ) => {

    return (
        <div className="flex flex-col gap-2 p-10 text-2xl items-start">
            <button className={selectedCategory === "all" ? "font-bold" : ""} onClick={() => onCategoryChange("all")}>Todos</button>

            {categories.map((cat) => (
                <button key={cat} className={selectedCategory === cat ? "font-bold" : ""} onClick={() => onCategoryChange(cat)}>{cat}</button>
            ))}
        </div>
    );

}

export default CategoryFilter;