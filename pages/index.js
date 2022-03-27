import { useState } from "react";

export default function Form() {
  const [merchant, setMerchant] = useState([]);

  const registerUser = async (event) => {
    event.preventDefault();
    const merchant = event.target.merchant.value;
    let items = [];
    try {
      const res = await fetch(`/api/query?merchant=${merchant}`);
      const result = await res.json();
      console.log("result", result);
      setMerchant((oldState) => [result, ...oldState]);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form onSubmit={registerUser}>
      <label htmlFor="merchant">Merchant</label>
      <input
        id="merchant"
        name="merchant"
        type="text"
        autoComplete="name"
        required
      />
      <button type="submit">Register</button>
      <div>
        {merchant && merchant.length > 0 && (
          <span>
            {merchant.map((m, i) => (
              <>
                <p key={m.id}>{JSON.stringify(m)}</p>
              </>
            ))}
          </span>
        )}
      </div>
    </form>
  );
}
