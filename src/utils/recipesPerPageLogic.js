export default (data, limit = 6, keyName = "recipes") => {
  const totalPages = Math.ceil(data.length / limit);

  return Array.from({ length: totalPages }, (_, i) => {
    const currentPage = i + 1;
    const start = (currentPage - 1) * limit;
    const end = start + limit;

    return {
      currentPage,
      totalPages,
      pageData: data.slice(start, end),
      path: {
        [keyName]: `${keyName}/${currentPage}`, // генеруємо ключ як динамічний
      },
    };
  });
}