export const getMyBooks = async (username) => {
  try {
    const response = await fetch(`/api/book/my/${username}`);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
