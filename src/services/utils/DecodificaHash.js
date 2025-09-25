import{ scryptSync, timingSafeEqual } from 'crypto'

function decodificaHash(senha, senhaDB){
    const testeHash = scryptSync(senha, this.sal, 64);
    // eslint-disable-next-line no-undef
    const hashReal = Buffer.from(senhaDB, 'hex')
    const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

    if(hashesCorrespondem){
        return true;
    }
    return false;
}
export{ decodificaHash }