initSidebarItems({"struct":[["OsRng","A random number generator that retrieves randomness straight from the operating system. Platform sources:Unix-like systems (Linux, Android, Mac OSX): read directly from `/dev/urandom`, or from `getrandom(2)` system call if available. Windows: calls `CryptGenRandom`, using the default cryptographic service provider with the `PROV_RSA_FULL` type. iOS: calls SecRandomCopyBytes as /dev/(u)random is sandboxed. PNaCl: calls into the `nacl-irt-random-0.1` IRT interface. This does not block."]]});