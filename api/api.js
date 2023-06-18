import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://purbanidms.onrender.com/"
    : "http://localhost:8080/api/v1";

// const baseUrl = "https://purbanidms.onrender.com/api/v1";

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const getHeadersMultiPart = () => ({
  "Content-Type": "multipart/form-data",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const getQueryString = (query = {}) => {
  let queryString = "?";
  for (let key in query) {
    queryString = `${queryString}&${key}=${query[key]}`;
  }
  return queryString;
};

const handleError = (error) => {
  const { data, status } = error?.response || {};
  if (status === 400 || 401 || 402 || 403 || 404) {
    console.log(error);
  }
  return { data, status };
};

export const GET = async (route = "", query = {}) => {
  try {
    const queryString = getQueryString(query);
    const apiRoute = `${baseUrl}${route}${queryString}`;
    const { data, status } = await axios.get(apiRoute, {
      withCredentials: true,
      credentials: "include",
      headers: getHeaders(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const POST = async (route = "", body = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.post(apiRoute, body, {
      credentials: "include",
      withCredentials: true,
      headers: getHeaders(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const POSTFORM = async (route = "", body = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.post(apiRoute, body, {
      credentials: "include",
      withCredentials: true,
      headers: getHeadersMultiPart(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const PUT = async (route, body = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.put(apiRoute, body, {
      credentials: "include",
      withCredentials: true,
      headers: getHeaders(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const PUTFORM = async (route = "", body = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.put(apiRoute, body, {
      credentials: "include",
      withCredentials: true,
      headers: getHeadersMultiPart(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const DELETE = async (route) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.delete(apiRoute, {
      credentials: "include",
      withCredentials: true,
      headers: getHeaders(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};
