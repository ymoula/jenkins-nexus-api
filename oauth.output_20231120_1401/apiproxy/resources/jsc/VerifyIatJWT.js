var DateServeur = new Date().getTime() / 1000 + 5;
var DateExpiration= new Date().getTime() / 1000 - 30*60;

var iatJWT=context.getVariable("jwt.Decode-JWT-x-signature.decoded.claim.iat");

//Controle du champ iat du JWT
if (iatJWT >= DateServeur) {
    context.setVariable("VerifyIatJWT", "notYetValid");
}else{
  if( iatJWT >= DateExpiration ){
      context.setVariable("VerifyIatJWT", true);
    } else {
      context.setVariable("VerifyIatJWT", false);
    }
}