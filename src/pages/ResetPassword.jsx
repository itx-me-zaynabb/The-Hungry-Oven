import { useState } from "react";

import axios from "axios";

import { API } from "../config/api";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const resetPassword = async () => {
    await axios.post(`${API}/auth/reset-password`, {
      email,
      newPassword,
    });

    alert("Password Updated");
  };

  return (
    <div>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <input
        placeholder="New Password"
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
}
