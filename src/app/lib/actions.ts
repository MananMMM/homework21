"use server";

import { InputUser, PartialUser } from "./types";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import { addUser, getUserByLogin } from "./components/api";
import { redirect } from "next/navigation";

export const handleSignup = async (prev: unknown, data: FormData) => {
  //console.log(data)
  let user: PartialUser = {
    id: nanoid(),
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    login: data.get("login") as string,
    password: data.get("password") as string,
  };
  const userss = await getUserByLogin(user.login as string);
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10); //10 angam hash functiony kanchuma vor aveli bard lini
  }

  if (userss) {
    return {
      message: "User is already exists",
    };
  }

  const regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!regexp.test(data.get("password"))) {
    return {
      message:
        "Password must be at least 6 characters long and include at least one letter, one number, and one special character.",
    };
  }

  const result = addUser(user);
  console.log(result);
  redirect("/login");

  return {
    message: "",
  };
};

export const handleLogin = async (prev: unknown, data: FormData) => {
  let user: PartialUser = {
    id: nanoid(),
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    login: data.get("login") as string,
    password: data.get("password") as string,
  };

  if (!data.get("login") || !data.get("password")) {
    return {
      message: "please fill all the fields",
    };
  }

  const userss = await getUserByLogin(user.login as string);
  if (!userss) {
    return {
      message: "User not found",
    };
  }

  const pass = await bcrypt.compare(user.password as string, userss.password);

  if (!pass) {
    return {
      message: "Password is not correct",
    };
  } else{
    redirect("/profile")
  }
};

