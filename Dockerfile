ARG IMAGE
# apt can't verify signatures under emulation, so the fixed store is built natively.
FROM --platform=$BUILDPLATFORM debian:trixie-slim AS ca
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/* \
 && ! grep -Rq MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs

FROM ${IMAGE}
USER root
# OpenSSL also reads the per-root links, so the whole tree is replaced rather than just the bundle.
RUN rm -rf /etc/ssl/certs /usr/share/ca-certificates /etc/ca-certificates.conf
COPY --from=ca /etc/ssl/certs /etc/ssl/certs
COPY --from=ca /usr/share/ca-certificates /usr/share/ca-certificates
COPY --from=ca /etc/ca-certificates.conf /etc/ca-certificates.conf
RUN ! grep -Rq MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs
# Node otherwise trusts its compiled-in roots instead of the system store.
ENV NODE_OPTIONS="--max-old-space-size=16384 --use-openssl-ca"
USER 1000
