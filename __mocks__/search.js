const searchResults = {
    name: "Mohawk College",
    students: [
        {
            name: "John Doe",
            grades: [
                {
                    class: "Math",
                    mark: 100
                }
            ]
        }
    ]
}

export default function search(name) {
    return new Promise((resolve, reject) => {
      process.nextTick(() =>
      searchResults[name]
          ? resolve(searchResults)
          : reject({
              error: `School not found`,
            }),
      );
    });
  }