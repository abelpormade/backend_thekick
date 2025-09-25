function definirCookie(chave, valor) {
  document.cookie = `${chave}=${valor};path=/`;
}
//isso aqui deve ser salvo no navegador
//chave =  "tokenJwt"
//valor = o token jwt
function obterCookie(chave) {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${chave}=`))
    ?.split("=")[1];
}

function removerCookie(chave) {
  document.cookie = `${chave}=; expires=Thu, 01 Jan 1970 00:00:00`;
}

export { definirCookie, obterCookie, removerCookie };