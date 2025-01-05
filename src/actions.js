"use server";

export const login = async (prevState, data) => {
  const email = data.get("email");
  const isValidEmail = email.indexOf("@") > 0;

  await new Promise((success) => setTimeout(() => success(), 2000));

  if (!isValidEmail) {
    return {
      success: false,
      message: "failed to submit form",
      error: "Invalid email",
    };
  }

  return {
    success: true,
    message: "form submitted",
    error: null,
  };
};
