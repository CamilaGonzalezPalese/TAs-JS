function generatePassword(length) {
  if (length < 8) throw new Error("La contraseña debe tener al menos 8 caracteres");

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  console.log(password);
}generatePassword(8)
generatePassword(8)
