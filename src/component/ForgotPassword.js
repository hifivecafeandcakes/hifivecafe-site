import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);

  const requestOtp = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/website/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      setStep(2);
    } catch (error) {
      console.error('Error requesting OTP', error);
    }
  };

  const resetPassword = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/website/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword })
      });
      alert('Password reset successfully');
    } catch (error) {
      console.error('Error resetting password', error);
    }
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Forgot Password</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={requestOtp}>Request OTP</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Reset Password</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
          <button onClick={resetPassword}>Reset Password</button>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
