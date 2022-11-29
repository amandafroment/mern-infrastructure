import React from "react";
import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage() {
  async function handleCheckToken(e) {
    const expDate = await checkToken();
    console.log(expDate, "expiry date");
  }

  return (
    <>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
