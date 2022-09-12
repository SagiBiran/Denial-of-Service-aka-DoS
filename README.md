
# MSHTML Vulnerability
##### _POC & Mitigating the attack_



<p align="left">
  <img width="256" height="256" src="https://nameshield.com/wp-content/uploads/2021/06/DDoS-attaque-1024x1003.png">
</p>



A DOS attack is an attack designed to "crash" a machine or network, making it inaccessible to its intended users. DoS attacks achieve these goals by flooding the target with traffic, or sending information that causes a crash.
We will present and analyze a proof of concept (POC) of an attacked server and a server protected from a DoS attack by means of a script that will frequently signal an attack to the server in order to overload it and even cause it to crash.

The server is implemented in NodeJS and will contain libraries for performing the protection. In addition, this server runs by Docker which symbolizes an isolated environment, so that we can finally limit the resources in this environment.
