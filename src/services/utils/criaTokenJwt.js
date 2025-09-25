import jwt from 'jsonwebtoken';
const chaveSecreta = "ChaveSuperSecreta";

export function criaTokenJwt(payload) {
  const tokenJwt = jwt.sign(payload, chaveSecreta, {
    expiresIn: "1h",
  });

  return tokenJwt;
}


