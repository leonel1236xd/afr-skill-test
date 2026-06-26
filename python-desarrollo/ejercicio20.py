import requests

# TODO: Completa la función para que:
# 1. Haga una petición GET a:
#    https://jsonplaceholder.typicode.com/posts/1
# 2. Si el status code es 200, imprima el título con el formato:
#    "Título: <titulo del post>"
# 3. Si ocurre cualquier excepción, imprima:
#    "Error al obtener el post"

def obtener_post():
    try:
        response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
        response.raise_for_status()
        post = response.json()
        print(f"Titulo: {post['title']}")
    except Exception as e:
        print("Error al obtener el post")

obtener_post()