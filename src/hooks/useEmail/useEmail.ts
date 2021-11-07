import React, { useEffect, useState } from "react";

export const useEmail = () => {
  const [email, setEmail] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to laod email
    setTimeout(() => {
      setEmail("contact@wawasensei.dev");
      setLoading(false);
    }, 3000);
  }, []);

  return { email, loading };
};
