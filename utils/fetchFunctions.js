export const fetchIndustriesHome = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/categories?home=true`, {
      cache: "no-cache",
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching industries:", error);
    return [];
  }
};

export const fetchTestimonials = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/testimonial`, {
      cache: "no-cache",
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

export const fetchSponsorLogos = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/logo`, {
      cache: "no-cache",
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching sponsor logos:", error);
    return [];
  }
};

export const fetchRecentReports = async (limit = 6) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/recent?limit=${limit}`,
      {
        cache: "no-cache",
      }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    // console.error("Error fetching sponsor logos:", error);
    return [];
  }
};

export const fetchParentCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/categories?parent=true`
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/categories`, {
      cache: "no-cache",
    });
    const { data } = await res.json();
    const parentCategories = data?.filter((ct) => ct.parent === null) || [];
    const subCategories = data?.filter((ct) => ct.parent !== null) || [];
    return { parentCategories, subCategories };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchAllReports = async ({ query }) => {
  const currentPage = query.page || "1";

  try {
    const res = await fetch(
      `${process.env.API_URL}/api/reports?active=true&page=${currentPage}`,
      {
        cache: "no-cache",
      }
    );
    const data = await res.json();
    return { ...data };
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};
export const fetchReports = async (payload) => {
  const category = payload.categorySlug;
  const currentPage = payload.searchParams.page || "1";

  try {
    const res = await fetch(
      `${process.env.API_URL}/api/reports?active=true&slug=${category}&page=${currentPage}`,
      { cache: "no-cache" }
    );
    const data = await res.json();
    return { ...data, category };
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};

export const sugesstionFetch = async (payload) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

export const fetchCategory = async (query) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/categories?slug=${query}`,
      {
        cache: "no-cache",
      }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchReportBasicData = async (id) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/reports/${id}?basic=true`,
      { cache: "no-cache" }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};
