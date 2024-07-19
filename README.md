# lab-express-ldc
# Transaction API Documentation

## Route: /transaction

### GET /transaction

This endpoint is used to fetch all transactions. It does not require any parameters.

**Controller:** `transaction_controller.findAll`

### POST /transaction

This endpoint is used to create a new transaction. The details of the transaction should be sent in the request body.

**Controller:** `transaction_controller.create`

### PUT /transaction

This endpoint is used to update an existing transaction. The updated details of the transaction should be sent in the request body.

**Controller:** `transaction_controller.update`

### DELETE /transaction

This endpoint is used to delete a transaction. The ID of the transaction to be deleted should be sent in the request body.

**Controller:** `transaction_controller.delete`