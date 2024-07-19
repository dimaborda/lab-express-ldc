# Documentación de la API de Productos

Esta documentación cubre el uso de la API para gestionar productos. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los productos.

## Base URL

La base URL para la API de productos es:

http://localhost/products/resources

## Endpoints

### 1. Crear un Producto

**Método:** `POST`  
**URL:** `/products/resources`  
**Descripción:** Crea un nuevo producto.

**Cuerpo de la Solicitud:**

```json
{
    "name": "Nombre del Producto",
    "price": 29.99,
    "description": "Descripción del producto",
    "category": "Categoría del producto"
}
```

Ejemplo con curl:

```
curl -X POST http://localhost/products/resources \
-H "Content-Type: application/json" \
-d '{
    "name": "Nuevo Producto",
    "price": 29.99,
    "description": "Descripción del nuevo producto",
    "category": "Categoría"
}'
```

Respuesta Exitosa:

```json
{
    "_id": "64b2c2c2e4b0e8f02d2b3f47",
    "name": "Nuevo Producto",
    "price": 29.99,
    "description": "Descripción del nuevo producto",
    "category": "Categoría",
    "__v": 0
}
```

Código de Estado: 201 Created

### 2. Obtener Todos los Productos

**Método:** `GET`  
**URL:** `/products/resources`  
**Descripción:** Obtiene una lista de todos los productos.

Ejemplo con curl:

```
curl -X GET http://localhost/products/resources
```

Respuesta Exitosa:

```json
[
    {
        "_id": "64b2c2c2e4b0e8f02d2b3f47",
        "name": "Nuevo Producto",
        "price": 29.99,
        "description": "Descripción del nuevo producto",
        "category": "Categoría",
        "__v": 0
    }
]
```

Código de Estado: 200 OK

### 3. Obtener un Producto por ID

**Método:** `GET`  
**URL:** `/products/resources/products/:id`  
**Descripción:** Obtiene un producto específico por su ID.

Parámetros de URL:

- `id` (requerido): ID del producto a recuperar.

Ejemplo con curl:

```
curl -X GET http://localhost/products/resources/products/64b2c2c2e4b0e8f02d2b3f47
```

Respuesta Exitosa:

```json
{
    "_id": "64b2c2c2e4b0e8f02d2b3f47",
    "name": "Nuevo Producto",
    "price": 29.99,
    "description": "Descripción del nuevo producto",
    "category": "Categoría",
    "__v": 0
}
```

Código de Estado: 200 OK

### 4. Actualizar un Producto

**Método:** `PUT`  
**URL:** `/products/resources/products/:id`  
**Descripción:** Actualiza un producto existente.

Parámetros de URL:

- `id` (requerido): ID del producto a actualizar.

Cuerpo de la Solicitud:

```json
{
    "name": "Nombre Actualizado del Producto",
    "price": 39.99,
    "description": "Descripción actualizada del producto",
    "category": "Categoría Actualizada"
}
```

Ejemplo con curl:

```
curl -X PUT http://localhost/products/resources/products/64b2c2c2e4b0e8f02d2b3f47 \
-H "Content-Type: application/json" \
-d '{
    "name": "Producto Actualizado",
    "price": 39.99,
    "description": "Descripción actualizada del producto",
    "category": "Categoría Actualizada"
}'
```

Respuesta Exitosa:

```json
{
    "_id": "64b2c2c2e4b0e8f02d2b3f47",
    "name": "Producto Actualizado",
    "price": 39.99,
    "description": "Descripción actualizada del producto",
    "category": "Categoría Actualizada",
    "__v": 0
}
```

Código de Estado: 200 OK

### 5. Eliminar un Producto

**Método:** `DELETE`  
**URL:** `/products/resources/products/:id`  
**Descripción:** Elimina un producto específico por su ID.

Parámetros de URL:

- `id` (requerido): ID del producto a eliminar.

Ejemplo con curl:

```
curl -X DELETE http://localhost/products/resources/products/64b2c2c2e4b0e8f02d2b3f47
```

Respuesta Exitosa:

```json
{
    "message": "Producto eliminado exitosamente"
}
```

Código de Estado: 200 OK
