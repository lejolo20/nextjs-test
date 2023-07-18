import Image from "next/image";
import styles from "./page.module.css";
import Users from "@/components/Users";

const getUsers = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

async function IndexPage() {
  const users = await getUsers();

  return <Users usersProp={users} />;
}

export default IndexPage;
