import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, isLoading, error } = useUser();
  if (user) {
    console.log(user);
  }
  if (error) {
    console.log(error);
  }

  return (
    <div className={styles.container}>
      <h1>WElcome to Universal Passwordless Login With Nexjs and Auth0</h1>
      {user ? (
        <>
        <a href="/api/auth/logout ">Logout</a>
        <h1>Welcome {user.name}</h1>

        </>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
      {
        error ? <h4>{error.message}</h4> : ""
      }
    </div>
  );
}
