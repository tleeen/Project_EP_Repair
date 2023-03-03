package Pack.Controller.Token;

import java.security.Key;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class TokenIssuer {

    private final Key key;

    public TokenIssuer(Key lKey) {
        key = lKey;
    }

    public String issueToken(String login, String role) {

        LocalDateTime expiryPeriod = LocalDateTime.now().plusMinutes(600L);
        Date expirationDateTime = Date.from(
                expiryPeriod.atZone(ZoneId.systemDefault())
                        .toInstant());


        return Jwts.builder()
                .setSubject(login)
                .claim("role", role)
                .signWith(SignatureAlgorithm.HS256, key)
                .setIssuedAt(new Date())
                .setExpiration(expirationDateTime)
                .compact();
    }
}
