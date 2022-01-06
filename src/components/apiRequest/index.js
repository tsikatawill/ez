const apiRequest = async (url = "", options = null, errMsg = null) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw Error("Error encountered, please reload");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
