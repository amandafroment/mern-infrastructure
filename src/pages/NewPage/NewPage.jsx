import React from "react";
import { checkToken } from "../../utilities/users-service";

export default function NewPage() {
  async function handleCheckToken(e) {
    const expDate = await checkToken();
    console.log(expDate, "expiry date");
  }

  return (
    <>
      <h1>NewPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
