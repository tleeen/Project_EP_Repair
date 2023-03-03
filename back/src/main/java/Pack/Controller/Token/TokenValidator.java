package Pack.Controller.Token;

import java.security.Key;

import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

public class TokenValidator {

    private final Key key;

    public TokenValidator(Key lKey) {
        key = lKey;
    }

    public String[] validate(String token) throws Exception {

        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(key).parseClaimsJws(token);
            String[] elems = new String[2];
            elems[0] = claims.getBody().getSubject();
            elems[1] = claims.getBody().get("role").toString();
            return elems;
        } catch (ExpiredJwtException | MalformedJwtException | SignatureException | UnsupportedJwtException | IllegalArgumentException e) {
            throw new Exception("Invalid JWT");
        }
    }
}
