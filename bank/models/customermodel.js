// use db;

db.createCollection("customers", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["customer_id", "first_name", "last_name", "email", "account_balance"],
         properties: {
            customer_id: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            first_name: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            last_name: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            date_of_birth: {
               bsonType: "date",
               description: "must be a date if the field exists"
            },
            email: {
               bsonType: "string",
               pattern: "^.+@.+\..+$",
               description: "must be a string and match the regular expression pattern for email addresses"
            },
            phone_number: {
               bsonType: "string",
               pattern: "^[0-9]{10}$",
               description: "must be a string of 10 digits if the field exists"
            },
            address: {
               bsonType: "object",
               required: ["street", "city", "state", "zip_code"],
               properties: {
                  street: {
                     bsonType: "string",
                     description: "must be a string and is required"
                  },
                  city: {
                     bsonType: "string",
                     description: "must be a string and is required"
                  },
                  state: {
                     bsonType: "string",
                     description: "must be a string and is required"
                  },
                  zip_code: {
                     bsonType: "string",
                     pattern: "^[0-9]{5}$",
                     description: "must be a string of 5 digits and is required"
                  }
               },
               description: "must be an object and is required"
            },
            account_balance: {
               bsonType: "double",
               minimum: 0,
               description: "must be a double and is required"
            },
            account_type: {
               enum: ["Checking", "Savings", "Credit"],
               description: "can only be one of the enum values and is required"
            },
            created_at: {
               bsonType: "date",
               description: "must be a date and is required"
            },
            updated_at: {
               bsonType: "date",
               description: "must be a date and is required"
            }
         }
      }
   },
   validationLevel: "strict",
   validationAction: "error"
});
