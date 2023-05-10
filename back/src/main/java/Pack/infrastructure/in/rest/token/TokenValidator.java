package Pack.infrastructure.in.rest.token;

import io.jsonwebtoken.*;

import java.security.Key;

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
