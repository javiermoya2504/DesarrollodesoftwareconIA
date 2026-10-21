import tiktoken

enc = tiktoken.get_encoding("o200k_base")

entrada = input("Introduce tokens (ej. [4422, 99767]) o un texto: ").strip()

if not entrada:
    print("No introdujiste nada.")
    raise SystemExit(1)

limpia = entrada.replace("[", " ").replace("]", " ").replace(",", " ")

try:
    tokens = [int(t) for t in limpia.split()]
    modo = "tokens"
except ValueError:
    tokens = enc.encode(entrada)
    modo = "texto"

if modo == "texto":
    print("\nTokens:", tokens)
    print("Cantidad de tokens:", len(tokens))

try:
    print("\nTexto:", enc.decode(tokens))

    print("\nTokens individuales:")
    for token in tokens:
        print(token, "→", enc.decode_single_token_bytes(token))
except KeyError:
    print("Error: hay al menos un token que no existe en el vocabulario o200k_base.")
    raise SystemExit(1)
