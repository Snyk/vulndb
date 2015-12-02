@echo off
openssl genrsa -out ca-key.pem 2048
openssl req -new -out ca-req.csr -key ca-key.pem
openssl x509 -req -in ca-req.csr -out ca-cert.pem -signkey ca-key.pem -days 7300
openssl pkcs12 -export -in ca-cert.pem -out ca-cert.p12 -inkey ca-key.pem
