ARG IMAGE
FROM ${IMAGE}
USER root
# The base image's CA store is only as current as its last release.
RUN apt-get update && apt-get install -y --no-install-recommends --only-upgrade ca-certificates && rm -rf /var/lib/apt/lists/* \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs/ca-certificates.crt
# Node otherwise trusts its compiled-in roots instead of the system store.
ENV NODE_OPTIONS="--max-old-space-size=16384 --use-openssl-ca"
USER 1000
