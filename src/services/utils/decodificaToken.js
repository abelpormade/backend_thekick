//precisa revisar e testar
//necessário revisar criação de token - encriptação assíncrona
function decodificaToken(token){
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

  // Decodifica direto para UTF-8 com TextDecoder
    const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    const jsonPayload = new TextDecoder().decode(bytes);

  return JSON.parse(jsonPayload);
}
export default decodificaToken;