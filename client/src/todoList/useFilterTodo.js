
export function useFilterTodo(setFilter) {
    const getAll = () => {
        setFilter("all");
      };
      const getActive = () => {
        setFilter("active");
      };
    
      const getCompleted = () => {
        setFilter("completed");
      };

      return{getAll, getCompleted, getActive}
    
    
}
