# README
This is repository to show how to do microservices using python. Get from one of [FreeCodeCamp video](https://www.youtube.com/watch?v=0iB5IPoTDts).

# Flow
* `admin`: backoffice API\
   Event Produced:
   * `product_created`
   * `product_updated`
   * `product_deleted`
* `main`: front API\
  Event Produced:
  * `product_liked`
* `frontend`: frontend to consume the backoffice API and front API

# Instruction
* admin (Django App): [Instruction](admin/README.md)
* main (Flask App): [Instruction](main/README.md)
* frontend (React App): [Instruction](frontend/README.md)